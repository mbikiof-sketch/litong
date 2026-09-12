# Fix remaining logos with different brand-tagline content
$basePath = "c:\Users\ymlt\Desktop\3\output"

$htmlFiles = Get-ChildItem -Path $basePath -Recurse -Filter "*.html"

$fixedCount = 0

foreach ($file in $htmlFiles) {
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    $originalContent = $content
    
    # Pattern: logo-link with inline styles + img + brand-tagline (any content)
    $pattern = '<a href="/" class="logo-link"[^>]*>\s*<img src="/assets/images/logo\.svg"[^>]*>\s*<span class="brand-tagline"[^>]*>[^<]*</span>\s*</a>'
    
    # Extract the brand-tagline content
    if ($content -match '<span class="brand-tagline"[^>]*>([^<]*)</span>') {
        $tagline = $matches[1]
        
        $replacement = @"
        <a href="/" class="logo-link">
          <div class="logo-text">
            <span class="logo-main">BeiLuo</span>
          </div>
          <span class="brand-tagline">$tagline</span>
        </a>
"@
        $content = $content -replace $pattern, $replacement
    }
    
    if ($content -ne $originalContent) {
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8 -NoNewline
        Write-Host "Fixed: $($file.FullName)" -ForegroundColor Green
        $fixedCount++
    }
}

Write-Host "`nFixed $fixedCount files" -ForegroundColor Cyan
