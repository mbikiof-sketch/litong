# Fix newline characters in logo HTML
$basePath = "c:\Users\ymlt\Desktop\3\output"

$htmlFiles = Get-ChildItem -Path $basePath -Recurse -Filter "*.html"

$fixedCount = 0

foreach ($file in $htmlFiles) {
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    
    # Check if file has the malformed logo with `n instead of actual newlines
    if ($content -match '`n\s*<div class="logo-text">') {
        $newContent = $content -replace '`n\s*<div class="logo-text">`n\s*<span class="logo-main">BeiLuo</span>`n\s*</div>`n\s*<span class="brand-tagline">([^<]*)</span>`n\s*</a>', "`n        <div class=`"logo-text`">`n          <span class=`"logo-main`">BeiLuo</span>`n        </div>`n        <span class=`"brand-tagline`">`$1</span>`n      </a>"
        
        if ($newContent -ne $content) {
            Set-Content -Path $file.FullName -Value $newContent -Encoding UTF8 -NoNewline
            Write-Host "Fixed: $($file.FullName)" -ForegroundColor Green
            $fixedCount++
        }
    }
}

Write-Host "`nFixed $fixedCount files" -ForegroundColor Cyan
