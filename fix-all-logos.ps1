# Fix all logo variations to match news page style
$basePath = "c:\Users\ymlt\Desktop\3\output"

$htmlFiles = Get-ChildItem -Path $basePath -Recurse -Filter "*.html"

$fixedCount = 0

foreach ($file in $htmlFiles) {
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    $originalContent = $content
    
    # Pattern 1: logo-link with inline styles + img + brand-tagline with inline styles
    $pattern1 = '<a href="/" class="logo-link"[^>]*>\s*<img src="/assets/images/logo\.svg"[^>]*>\s*<span class="brand-tagline"[^>]*>([^<]*)</span>\s*</a>'
    $replacement1 = @'
        <a href="/" class="logo-link">
          <div class="logo-text">
            <span class="logo-main">BeiLuo</span>
          </div>
          <span class="brand-tagline">$1</span>
        </a>
'@
    $content = $content -replace $pattern1, $replacement1
    
    # Pattern 2: Just img logo without proper structure
    $pattern2 = '<img src="/assets/images/logo\.svg"[^>]*>'
    if ($content -match $pattern2 -and $content -notmatch '<div class="logo-text">') {
        # Replace standalone img with proper structure
        $content = $content -replace $pattern2, @'
        <div class="logo-text">
          <span class="logo-main">BeiLuo</span>
        </div>
'@
    }
    
    if ($content -ne $originalContent) {
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8 -NoNewline
        Write-Host "Fixed: $($file.FullName)" -ForegroundColor Green
        $fixedCount++
    }
}

Write-Host "`nFixed $fixedCount files" -ForegroundColor Cyan
