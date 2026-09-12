# PowerShell script to add Contact link to all navigation menus missing it
# This script finds all HTML files with navbar-menu that don't have the Contact link

$basePath = "c:\Users\ymlt\Desktop\3\output"

# Get all HTML files
$htmlFiles = Get-ChildItem -Path $basePath -Recurse -Filter "*.html"

$fixedCount = 0
$skippedCount = 0

foreach ($file in $htmlFiles) {
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    
    # Check if file has navbar-menu
    if ($content -match '<nav class="navbar-menu" id="navbar-menu">') {
        # Check if it already has Contact link
        if ($content -match '<a href="/about/contact/"[^>]*>Contact</a>') {
            $skippedCount++
            continue
        }
        
        # Add Contact link before closing </nav> tag in navbar-menu
        # Pattern: match the navbar-menu nav block and add Contact link before </nav>
        $pattern = '(<nav class="navbar-menu" id="navbar-menu">\s*<a href="/" class="nav-item">Home</a>\s*<a href="/brands/" class="nav-item">Brands</a>\s*<a href="/news/" class="nav-item">News</a>\s*<a href="/about/" class="nav-item">About Us</a>)(\s*</nav>)'
        $replacement = '$1\n        <a href="/about/contact/" class="nav-item">Contact</a>$2'
        
        $newContent = $content -replace $pattern, $replacement
        
        if ($newContent -ne $content) {
            Set-Content -Path $file.FullName -Value $newContent -Encoding UTF8 -NoNewline
            Write-Host "Fixed: $($file.FullName)" -ForegroundColor Green
            $fixedCount++
        } else {
            # Try alternative pattern (different whitespace)
            $pattern2 = '(<a href="/about/" class="nav-item">About Us</a>)(\s*</nav>)'
            $replacement2 = '$1\n        <a href="/about/contact/" class="nav-item">Contact</a>$2'
            $newContent2 = $content -replace $pattern2, $replacement2
            
            if ($newContent2 -ne $content) {
                Set-Content -Path $file.FullName -Value $newContent2 -Encoding UTF8 -NoNewline
                Write-Host "Fixed: $($file.FullName)" -ForegroundColor Green
                $fixedCount++
            } else {
                Write-Host "Could not fix: $($file.FullName)" -ForegroundColor Yellow
            }
        }
    }
}

Write-Host "`nSummary:" -ForegroundColor Cyan
Write-Host "Fixed: $fixedCount files" -ForegroundColor Green
Write-Host "Skipped (already has Contact): $skippedCount files" -ForegroundColor Gray
