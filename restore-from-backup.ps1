# 从output-batch1恢复损坏的文件
$sourceDir = "c:\Users\ymlt\Desktop\3\output-batch1"
$targetDir = "c:\Users\ymlt\Desktop\3\output-all"

# 获取所有需要恢复的品牌目录
$brands = @("silan", "silergy", "sinofuse", "smartsens", "songle", "southchip", "st", "starpower")

foreach ($brand in $brands) {
    $sourceBrandDir = Join-Path $sourceDir $brand
    $targetBrandDir = Join-Path $targetDir $brand
    
    if (Test-Path $sourceBrandDir) {
        Write-Host "Restoring $brand..."
        
        # 如果目标目录存在，删除它
        if (Test-Path $targetBrandDir) {
            Remove-Item -Path $targetBrandDir -Recurse -Force
        }
        
        # 复制整个品牌目录
        Copy-Item -Path $sourceBrandDir -Destination $targetBrandDir -Recurse -Force
        Write-Host "  Restored $brand successfully"
    } else {
        Write-Host "  Source not found for $brand"
    }
}

# 恢复根目录文件
$rootFiles = @("index.html", "sitemap.xml", "_headers", "_routes.json")
foreach ($file in $rootFiles) {
    $sourceFile = Join-Path $sourceDir $file
    $targetFile = Join-Path $targetDir $file
    
    if (Test-Path $sourceFile) {
        Copy-Item -Path $sourceFile -Destination $targetFile -Force
        Write-Host "Restored root file: $file"
    }
}

# 恢复about目录
$sourceAbout = Join-Path $sourceDir "about"
$targetAbout = Join-Path $targetDir "about"
if (Test-Path $sourceAbout) {
    if (Test-Path $targetAbout) {
        Remove-Item -Path $targetAbout -Recurse -Force
    }
    Copy-Item -Path $sourceAbout -Destination $targetAbout -Recurse -Force
    Write-Host "Restored about directory"
}

# 恢复brands目录
$sourceBrands = Join-Path $sourceDir "brands"
$targetBrands = Join-Path $targetDir "brands"
if (Test-Path $sourceBrands) {
    if (Test-Path $targetBrands) {
        Remove-Item -Path $targetBrands -Recurse -Force
    }
    Copy-Item -Path $sourceBrands -Destination $targetBrands -Recurse -Force
    Write-Host "Restored brands directory"
}

# 恢复news目录
$sourceNews = Join-Path $sourceDir "news"
$targetNews = Join-Path $targetDir "news"
if (Test-Path $sourceNews) {
    if (Test-Path $targetNews) {
        Remove-Item -Path $targetNews -Recurse -Force
    }
    Copy-Item -Path $sourceNews -Destination $targetNews -Recurse -Force
    Write-Host "Restored news directory"
}

# 恢复assets目录
$sourceAssets = Join-Path $sourceDir "assets"
$targetAssets = Join-Path $targetDir "assets"
if (Test-Path $sourceAssets) {
    if (Test-Path $targetAssets) {
        Remove-Item -Path $targetAssets -Recurse -Force
    }
    Copy-Item -Path $sourceAssets -Destination $targetAssets -Recurse -Force
    Write-Host "Restored assets directory"
}

Write-Host "`nRestore completed!"
