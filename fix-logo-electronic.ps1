# 批量替换logo中的Electronics文本
$baseDir = "c:\Users\ymlt\Desktop\3\output-all"

# 查找所有HTML文件
$htmlFiles = Get-ChildItem -Path $baseDir -Filter "*.html" -Recurse -File

$count = 0
foreach ($file in $htmlFiles) {
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    $originalContent = $content

    # 替换 <span class="logo-sub">Electronics</span> 为 <span class="logo-sub"></span>
    $content = $content -replace '<span class="logo-sub">Electronics</span>', '<span class="logo-sub"></span>'

    # 如果内容有变化，保存文件
    if ($content -ne $originalContent) {
        [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
        $count++
    }
}

Write-Host "Total files updated: $count"
