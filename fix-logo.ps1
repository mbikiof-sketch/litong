# 批量修改所有 HTML 文件的 logo 结构
$files = Get-ChildItem output-all -Recurse -Filter "*.html"
$count = 0

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    $original = $content
    
    # 替换 logo.svg 为 logo-text 结构 (news 页面样式)
    # 匹配模式: <img src="/assets/images/logo.svg" alt="BeiLuo" class="logo" style="...">
    $pattern = '<img src="/assets/images/logo\.svg" alt="[^"]*" class="logo"[^>]*>'
    $replacement = @'
<div class="logo-text">
            <span class="logo-main">BeiLuo</span>
            <span class="logo-sub">Electronics</span>
          </div>
'@
    
    $content = [regex]::Replace($content, $pattern, $replacement)
    
    # 如果内容有变化，保存文件
    if ($content -ne $original) {
        Set-Content $file.FullName -Value $content -Encoding UTF8 -NoNewline
        $count++
        Write-Host "Updated: $($file.FullName)"
    }
}

Write-Host "`nTotal files updated: $count"
