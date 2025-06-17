# 软件仓库 🗄️

一个现代化的个人软件下载站，具有层级导航、全局搜索和详细软件信息展示功能。

## ✨ 功能特点

### 🗂️ 层级导航
- 类似文件管理器的层级结构
- 面包屑导航，轻松返回上级目录
- 清晰的三层结构：分类 → 平台 → 软件列表

### 🔍 智能搜索
- 实时搜索软件名称和描述
- 搜索结果显示软件路径信息
- 支持中文搜索

### 📋 详细软件信息
- 点击软件名查看详细信息
- 包含软件介绍和安装说明
- 美观的模态框展示

### ⚙️ 管理功能
- 可视化添加新软件和分类
- 支持数据导出和导入
- 数据驱动，易于维护

## 🚀 快速开始

1. **克隆项目**
   ```bash
   git clone https://github.com/你的用户名/软件仓库.git
   cd 软件仓库
   ```

2. **打开网站**
   - 直接用浏览器打开 `index.html` 文件
   - 或者使用本地服务器：
     ```bash
     # 使用Python (推荐)
     python -m http.server 8000
     
     # 使用Node.js
     npx serve .
     ```

3. **访问网站**
   - 本地文件：`file:///路径/到/index.html`
   - 本地服务器：`http://localhost:8000`

## 📱 使用说明

### 普通用户
1. **浏览软件**：点击分类文件夹进入查看软件
2. **搜索软件**：在搜索框输入关键词快速查找
3. **查看详情**：点击软件名称查看详细信息和下载

### 管理员
1. **打开管理界面**：点击右上角"⚙️ 管理"按钮
2. **添加软件**：填写软件信息，包括介绍和安装说明
3. **添加分类**：创建新的软件分类
4. **数据管理**：导出/导入软件数据

## 🛠️ 技术栈

- **前端**：HTML5 + CSS3 + 原生JavaScript
- **样式**：响应式设计，支持移动端
- **数据**：JSON格式，客户端存储
- **部署**：静态网站，支持GitHub Pages

## 📁 项目结构

```
my-website/
├── index.html          # 主页面
├── css/
│   └── style.css      # 样式文件（可选，样式已内联）
├── js/
│   └── script.js      # 脚本文件（可选，脚本已内联）
├── images/            # 图片资源
├── README.md          # 项目说明
└── .gitignore         # Git忽略文件
```

## 🎨 自定义配置

### 修改软件数据
在 `index.html` 中找到 `softwareData` 对象，按以下格式添加：

```javascript
"分类名": {
    icon: "📁",
    platforms: {
        "Windows": [
            {
                name: "软件名称",
                description: "软件描述 (格式, 大小)",
                url: "下载链接",
                usage: "软件介绍",
                installation: ["安装步骤1", "安装步骤2"]
            }
        ]
    }
}
```

### 修改样式
可以在CSS部分自定义：
- 颜色主题
- 字体样式
- 布局间距
- 动画效果

## 🌐 部署到GitHub Pages

1. **推送到GitHub**：
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **启用GitHub Pages**：
   - 进入仓库设置 → Pages
   - 选择部署源为 `main` 分支
   - 保存设置

3. **访问网站**：
   - 网址：`https://你的用户名.github.io/仓库名`

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

## 🔗 相关链接

- [GitHub Pages 文档](https://pages.github.com/)
- [Markdown 语法指南](https://guides.github.com/features/mastering-markdown/)

---

如果这个项目对您有帮助，请给个 ⭐ Star！