# Google 重新索引操作步骤

## 问题
Google Search Console 显示的用户声明规范网址还是旧的 `https://www.elec-distributor.com/`
需要让 Google 重新抓取更新后的页面。

## 操作步骤

### 1. 在 Search Console 中请求重新编入索引

1. 确保您在 **"网址检查"** 页面
2. 确认顶部显示的是：`https://ic-distributor.com/`
3. 点击页面底部的 **"请求编入索引"** 按钮

### 2. 等待 Google 重新抓取

- 通常需要几小时到几天
- 重新抓取后，"用户声明的规范网址" 会更新为 `https://ic-distributor.com/`

### 3. 验证更新

重新抓取后，检查：
- 用户声明的规范网址 应该显示：`https://ic-distributor.com/`
- Google 选择的规范网址 应该与之一致

### 4. 批量处理其他页面

对于其他重要页面，重复上述步骤：
- `/brands/`
- `/news/`
- `/about/`
- 主要品牌页面

## 注意事项

- 不要频繁请求，每个页面每天最多一次
- 优先处理首页和重要页面
- 其他页面 Google 会在定期抓取时自动更新
