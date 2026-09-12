# 同步品牌页面到 batch-deploy-new 目录
$sourceDir = "c:\Users\ymlt\Desktop\3\output"
$targetDir = "c:\Users\ymlt\Desktop\3\batch-deploy-new"

# 品牌列表
$brands3a = @("3peak", "adi", "aipu", "aishi", "allegro", "amec", "anlogic", "aowei", "aurasemi", "autochips", "awinic", "biwin", "bps", "bpsemi", "bussmann", "byd", "capxon", "changdian", "chemi-con", "chipon", "chipown", "chipsea", "cincon", "clickele", "cmsemicor", "cosel", "cosmo", "cps", "cree", "crmicro", "crrc", "cxmt", "dapu", "dosilicon", "eastsoft", "ecec", "esiontech", "espressif", "faratronic", "firstack", "fuji", "funcience", "fusemi")
$brands3b = @("gainsil", "gcoreinc", "genesic", "genuway", "giantec", "goertek", "gowin", "guanxi", "hangshun", "hawun", "hci", "hdsc", "hgsemi", "hisilicon", "hjc", "hongfa", "infineon", "injoinic", "ixys", "jianghai", "jisemi", "joulwatt", "lattice", "lelon", "lem", "linco", "linsimic", "liteon", "longsys", "loongson", "macmic", "mean-well", "meanwell", "mersen", "microchip", "micron", "montage", "mornsun", "mps", "mxtronics")
$brands3c = @("narada", "nce", "nichicon", "novosense", "nuvoton", "nxp", "on-bright", "onsemi", "oriental", "p-duke", "panasonic", "panjit", "pinesemi", "qiangmao", "qinheng", "rayson", "realtek", "recom", "renesas", "richtek", "rivotek", "rohm", "rorebai", "rubycon", "runic", "samwha", "samxon", "samyoung", "sanrex", "sanying", "semikron", "senodia", "sgmicro", "sikor", "silan", "silergy", "sindachip", "sinemicro", "sinofuse", "sk-hynix", "skhynix", "skyworks", "smartsens", "songle", "southchip", "st", "starpower", "sunlord", "superchip")
$brands3d = @("tdk", "ti", "tianbo", "tongfeng", "unisoc", "vanchip", "vicor", "walsin", "wanyu", "will", "wurth", "xghc", "xhsc", "xilinx", "xinbole", "xinzhou", "ymtc", "yxc", "zlg-power")

# 同步 batch-3a
Write-Host "同步 batch-3a 品牌..." -ForegroundColor Green
foreach ($brand in $brands3a) {
    $src = Join-Path $sourceDir $brand
    $dst = Join-Path "$targetDir\batch-3a-brands-a-f" $brand
    if (Test-Path $src) {
        robocopy $src $dst /E /NFL /NDL /NJH /NJS
    }
}

# 同步 batch-3b
Write-Host "同步 batch-3b 品牌..." -ForegroundColor Green
foreach ($brand in $brands3b) {
    $src = Join-Path $sourceDir $brand
    $dst = Join-Path "$targetDir\batch-3b-brands-g-m" $brand
    if (Test-Path $src) {
        robocopy $src $dst /E /NFL /NDL /NJH /NJS
    }
}

# 同步 batch-3c
Write-Host "同步 batch-3c 品牌..." -ForegroundColor Green
foreach ($brand in $brands3c) {
    $src = Join-Path $sourceDir $brand
    $dst = Join-Path "$targetDir\batch-3c-brands-n-s" $brand
    if (Test-Path $src) {
        robocopy $src $dst /E /NFL /NDL /NJH /NJS
    }
}

# 同步 batch-3d
Write-Host "同步 batch-3d 品牌..." -ForegroundColor Green
foreach ($brand in $brands3d) {
    $src = Join-Path $sourceDir $brand
    $dst = Join-Path "$targetDir\batch-3d-brands-t-z" $brand
    if (Test-Path $src) {
        robocopy $src $dst /E /NFL /NDL /NJH /NJS
    }
}

Write-Host "同步完成！" -ForegroundColor Green
