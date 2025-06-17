// 软件数据配置
let softwareData = {
    "编程": {
        icon: "📁",
        platforms: {
            "Windows": [
                {
                    name: "Visual Studio Code",
                    description: "微软开发的代码编辑器 (exe, 85MB)",
                    url: "#",
                    usage: "VS Code是一款轻量级但功能强大的代码编辑器，支持多种编程语言和丰富的扩展插件。",
                    installation: [
                        "下载安装包后双击运行",
                        "按照安装向导提示完成安装",
                        "首次运行时可以选择安装推荐的扩展插件",
                        "配置你的开发环境和主题"
                    ]
                },
                {
                    name: "JetBrains IntelliJ IDEA",
                    description: "Java集成开发环境 (exe, 650MB)",
                    url: "#",
                    usage: "IntelliJ IDEA是专业的Java开发IDE，提供智能代码补全、重构、调试等功能。",
                    installation: [
                        "运行安装程序并选择安装路径",
                        "选择要安装的组件和插件",
                        "完成安装后启动程序",
                        "输入许可证或选择试用版本",
                        "配置JDK和项目设置"
                    ]
                }
            ],
            "Mac": [
                {
                    name: "macos",
                    description: "JetBrains激活工具 (zip, 25MB)",
                    url: "https://chinhae-software.oss-cn-chengdu.aliyuncs.com/%E8%BD%AF%E4%BB%B6%E5%AE%89%E8%A3%85%E5%8C%85/macos.zip",
                    usage: "用于激活JetBrains系列软件的工具，支持IDEA、WebStorm、PyCharm等产品。",
                    installation: [
                        "下载并解压zip文件",
                        "关闭所有JetBrains软件",
                        "运行激活工具",
                        "按照工具内的说明进行操作",
                        "重启JetBrains软件验证激活状态"
                    ]
                },
                {
                    name: "Xcode",
                    description: "苹果官方开发工具 (dmg, 12GB)",
                    url: "#",
                    usage: "苹果官方的集成开发环境，用于开发iOS、macOS、watchOS和tvOS应用程序。",
                    installation: [
                        "从Mac App Store或苹果开发者网站下载",
                        "双击dmg文件挂载磁盘镜像",
                        "将Xcode拖拽到Applications文件夹",
                        "首次运行时会安装必要的开发工具",
                        "登录Apple ID以访问完整功能"
                    ]
                }
            ]
        }
    },
    "安装包": {
        icon: "📦",
        platforms: {
            "Windows": [
                {
                    name: "Office",
                    description: "Office_Tool_with_runtime_v10.21.35.0_x64.zip (zip, 73.531MB)",
                    url: "https://oxy-website.oss-cn-chengdu.aliyuncs.com/%E8%BD%AF%E4%BB%B6%E5%AE%89%E8%A3%85%E5%8C%85/Windows/Office_Tool_with_runtime_v10.21.35.0_x64.zip",
                    usage: "Office Tool Plus 是微软官方的 Office 安装工具，支持批量部署、版本切换、激活等操作。",
                    installation: [
                        "下载并解压zip文件",
                        "运行Office_Tool.exe",
                        "选择要安装的Office版本",
                        "选择安装路径",
                        "点击安装按钮",
                        "等待安装完成"
                    ]
                }
            ],
            "Mac": [
                {
                    name: "Meslo LG M Regular字体",
                    description: "Meslo LG M Regular for Powerline.ttf (ttf, 464.48KB)",
                    url: "https://oxy-website.oss-cn-chengdu.aliyuncs.com/%E8%BD%AF%E4%BB%B6%E5%AE%89%E8%A3%85%E5%8C%85/Mac/Meslo%20LG%20M%20Regular%20for%20Powerline.ttf",
                    usage: "Meslo LG M Regular字体是Powerline字体，可以用于终端显示。",
                    installation: [
                        "下载并解压ttf文件",
                        "运行下载的安装脚本",
                        "按照提示输入管理员密码",
                        "等待安装完成",
                        "使用 'brew --version' 验证安装"
                    ]
                },
                {
                    name: "CleanMyMac X",
                    description: "CleanMyMac X 4.15.3 [MacKed].dmg (dmg, 118.773MB)",
                    url: "https://oxy-website.oss-cn-chengdu.aliyuncs.com/%E8%BD%AF%E4%BB%B6%E5%AE%89%E8%A3%85%E5%8C%85/Mac/%E7%A0%B4%E8%A7%A3%E5%AE%89%E8%A3%85%E5%8C%85/CleanMyMac%20X%204.15.3%20%5BMacKed%5D.dmg",
                    usage: "专业的Mac系统清理和优化工具，可以清理垃圾文件、优化性能、管理启动项等。",
                    installation: [
                        "双击dmg文件挂载磁盘镜像",
                        "将CleanMyMac X拖拽到Applications文件夹",
                        "在应用程序文件夹中启动软件",
                        "输入许可证激活软件",
                        "授予必要的系统权限"
                    ]
                },
                {
                    name:"Setapp",
                    description:"Setapp 3.44.1 [MacKed].dmg (dmg, 103.085MB)",
                    url:"https://oxy-website.oss-cn-chengdu.aliyuncs.com/%E8%BD%AF%E4%BB%B6%E5%AE%89%E8%A3%85%E5%8C%85/Mac/%E7%A0%B4%E8%A7%A3%E5%AE%89%E8%A3%85%E5%8C%85/Setapp%203.44.1%20%5BMacKed%5D.dmg",
                    usage:"Setapp 是一款Mac上的软件管理工具，可以方便地管理Mac上的软件。",
                    installation:[
                        "双击dmg文件挂载磁盘镜像",
                        "将Setapp拖拽到Applications文件夹",
                        "在应用程序文件夹中启动软件",
                        "输入许可证激活软件",
                        "授予必要的系统权限"
                    ]
                },
                {
                    name:"macOS小助手", 
                    description:"macOS小助手.dmg (dmg, 14.905MB)",
                    url:"https://oxy-website.oss-cn-chengdu.aliyuncs.com/%E8%BD%AF%E4%BB%B6%E5%AE%89%E8%A3%85%E5%8C%85/Mac/%E7%A0%B4%E8%A7%A3%E5%AE%89%E8%A3%85%E5%8C%85/macOS%E5%B0%8F%E5%8A%A9%E6%89%8B.dmg",
                    usage:"macOS小助手是一款Mac上的软件管理工具，可以方便地管理Mac上的软件。",
                    installation:[
                        "双击dmg文件挂载磁盘镜像",
                        "将macOS小助手拖拽到Applications文件夹",
                        "在应用程序文件夹中启动软件",
                        "输入许可证激活软件",
                        "授予必要的系统权限"
                    ]
                }
            ]
        }
    }
};

// 当前路径状态
let currentPath = [];

// 导航到指定路径
function navigateTo(path) {
    enhancedNavigateTo(path);
}

// 更新面包屑导航
function updateBreadcrumb() {
    const breadcrumb = document.getElementById('breadcrumb');
    breadcrumb.innerHTML = '';
    
    // 添加首页链接
    const homeLink = document.createElement('a');
    homeLink.className = 'breadcrumb-item';
    homeLink.textContent = '🏠 首页';
    homeLink.addEventListener('click', () => navigateTo([]));
    breadcrumb.appendChild(homeLink);
    
    // 添加路径项目
    currentPath.forEach((item, index) => {
        // 添加分隔符
        const separator = document.createElement('span');
        separator.className = 'breadcrumb-separator';
        separator.textContent = '>';
        breadcrumb.appendChild(separator);
        
        const pathToHere = currentPath.slice(0, index + 1);
        
        if (index === currentPath.length - 1) {
            // 当前页面，不可点击
            const activeItem = document.createElement('span');
            activeItem.className = 'breadcrumb-item active';
            activeItem.textContent = item;
            breadcrumb.appendChild(activeItem);
        } else {
            // 可点击的链接
            const linkItem = document.createElement('a');
            linkItem.className = 'breadcrumb-item';
            linkItem.textContent = item;
            linkItem.addEventListener('click', () => navigateTo([...pathToHere]));
            breadcrumb.appendChild(linkItem);
        }
    });
}

// 更新内容区域
function updateContent() {
    const contentGrid = document.getElementById('contentGrid');
    
    if (currentPath.length === 0) {
        // 显示所有分类
        displayCategories();
    } else if (currentPath.length === 1) {
        // 显示选中分类的平台
        displayPlatforms(currentPath[0]);
    } else if (currentPath.length === 2) {
        // 显示选中平台的软件
        displaySoftware(currentPath[0], currentPath[1]);
    }
}

// 显示分类列表
function displayCategories() {
    const contentGrid = document.getElementById('contentGrid');
    let html = '';
    
    Object.entries(softwareData).forEach(([categoryName, categoryData]) => {
        const totalSoftware = Object.values(categoryData.platforms).reduce((total, softwares) => total + softwares.length, 0);
        html += `
            <div class="item-card folder-card" onclick="navigateTo(['${categoryName}'])">
                <span class="item-icon">${categoryData.icon}</span>
                <div class="item-name">${categoryName}</div>
                <div class="item-desc">${totalSoftware} 个软件</div>
                <button class="folder-enter-btn">进入文件夹</button>
            </div>
        `;
    });
    
    contentGrid.innerHTML = html;
}

// 显示平台列表
function displayPlatforms(categoryName) {
    const contentGrid = document.getElementById('contentGrid');
    const categoryData = softwareData[categoryName];
    
    if (!categoryData) {
        contentGrid.innerHTML = '<div class="empty-state"><span class="empty-state-icon">😕</span><div>找不到该分类</div></div>';
        return;
    }
    
    let html = '';
    Object.entries(categoryData.platforms).forEach(([platformName, softwares]) => {
        const platformIcon = platformName === 'Windows' ? '💻' : '🍎';
        html += `
            <div class="item-card folder-card" onclick="navigateTo(['${categoryName}', '${platformName}'])">
                <span class="item-icon">${platformIcon}</span>
                <div class="item-name">${platformName}</div>
                <div class="item-desc">${softwares.length} 个软件</div>
                <button class="folder-enter-btn">进入文件夹</button>
            </div>
        `;
    });
    
    if (html === '') {
        html = '<div class="empty-state"><span class="empty-state-icon">📂</span><div>该分类暂无内容</div></div>';
    }
    
    contentGrid.innerHTML = html;
}

// 显示软件列表
function displaySoftware(categoryName, platformName) {
    const contentGrid = document.getElementById('contentGrid');
    const softwares = softwareData[categoryName]?.platforms[platformName];
    
    if (!softwares) {
        contentGrid.innerHTML = '<div class="empty-state"><span class="empty-state-icon">😕</span><div>找不到该平台</div></div>';
        return;
    }
    
    let html = '';
    softwares.forEach((software, index) => {
        html += `
            <div class="item-card software-card">
                <span class="item-icon">💿</span>
                <div class="item-name software-name-clickable" onclick="openSoftwareModal('${categoryName}', '${platformName}', ${index})">${software.name}</div>
                <div class="item-desc">${software.description}</div>
            </div>
        `;
    });
    
    if (html === '') {
        html = '<div class="empty-state"><span class="empty-state-icon">📁</span><div>该平台暂无软件</div></div>';
    }
    
    contentGrid.innerHTML = html;
}

// 搜索功能
function handleSearch(query) {
    const searchResults = document.getElementById('searchResults');
    
    if (query.trim() === '') {
        hideSearchResults();
        return;
    }
    
    const results = searchSoftware(query);
    displaySearchResults(results);
}

function searchSoftware(query) {
    const results = [];
    const searchTerm = query.toLowerCase();
    
    Object.entries(softwareData).forEach(([categoryName, categoryData]) => {
        Object.entries(categoryData.platforms).forEach(([platformName, softwares]) => {
            softwares.forEach(software => {
                if (software.name.toLowerCase().includes(searchTerm) || 
                    software.description.toLowerCase().includes(searchTerm)) {
                    results.push({
                        ...software,
                        category: categoryName,
                        platform: platformName,
                        path: [categoryName, platformName]
                    });
                }
            });
        });
    });
    
    return results;
}

function displaySearchResults(results) {
    const searchResults = document.getElementById('searchResults');
    
    if (results.length === 0) {
        searchResults.innerHTML = '<div style="padding: 15px; text-align: center; color: #6c757d;">未找到相关软件</div>';
    } else {
        let html = '';
        results.forEach(result => {
            const softwareIndex = softwareData[result.category].platforms[result.platform].findIndex(s => s.name === result.name);
            html += `
                <div class="item-card software-card" style="margin: 5px;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div style="flex-grow: 1;">
                            <div class="item-name software-name-clickable" onclick="openSoftwareModal('${result.category}', '${result.platform}', ${softwareIndex}); hideSearchResults();">${result.name}</div>
                            <div class="item-desc">${result.description}</div>
                            <small style="color: #007bff;">${result.category} > ${result.platform}</small>
                        </div>
                    </div>
                </div>
            `;
        });
        searchResults.innerHTML = html;
    }
    
    searchResults.style.display = 'block';
}

function hideSearchResults() {
    const searchResults = document.getElementById('searchResults');
    searchResults.style.display = 'none';
}

// 管理功能
function toggleAdmin() {
    const panel = document.getElementById('adminPanel');
    panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
}

function updateCategorySelect() {
    const select = document.getElementById('categorySelect');
    select.innerHTML = '<option value="">选择分类</option>';
    Object.keys(softwareData).forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        select.appendChild(option);
    });
}

function addSoftware() {
    const category = document.getElementById('categorySelect').value;
    const platform = document.getElementById('platformSelect').value;
    const name = document.getElementById('softwareName').value;
    const description = document.getElementById('softwareDesc').value;
    const usage = document.getElementById('softwareUsage').value;
    const installationText = document.getElementById('installationSteps').value;
    const url = document.getElementById('downloadUrl').value;

    if (!category || !platform || !name || !description || !url) {
        alert('请填写必填字段（分类、平台、软件名称、软件描述、下载链接）！');
        return;
    }

    if (!softwareData[category]) {
        alert('请先选择一个有效的分类！');
        return;
    }

    if (!softwareData[category].platforms[platform]) {
        softwareData[category].platforms[platform] = [];
    }

    // 处理安装步骤，将文本按行分割成数组
    const installationSteps = installationText.trim() ? 
        installationText.split('\n').filter(step => step.trim() !== '') : [];

    const newSoftware = {
        name: name,
        description: description,
        url: url
    };

    // 只有填写了内容才添加这些字段
    if (usage.trim()) {
        newSoftware.usage = usage.trim();
    }
    
    if (installationSteps.length > 0) {
        newSoftware.installation = installationSteps;
    }

    softwareData[category].platforms[platform].push(newSoftware);

    // 清空表单
    document.getElementById('softwareName').value = '';
    document.getElementById('softwareDesc').value = '';
    document.getElementById('softwareUsage').value = '';
    document.getElementById('installationSteps').value = '';
    document.getElementById('downloadUrl').value = '';

    // 更新内容
    updateContent();
    alert('软件添加成功！');
}

function addCategory() {
    const name = document.getElementById('newCategoryName').value;
    const icon = document.getElementById('newCategoryIcon').value || '📁';

    if (!name) {
        alert('请输入分类名称！');
        return;
    }

    if (softwareData[name]) {
        alert('该分类已存在！');
        return;
    }

    softwareData[name] = {
        icon: icon,
        platforms: {
            "Windows": [],
            "Mac": []
        }
    };

    // 清空表单
    document.getElementById('newCategoryName').value = '';
    document.getElementById('newCategoryIcon').value = '📁';

    // 更新内容
    updateContent();
    updateCategorySelect();
    alert('分类添加成功！');
}

function exportData() {
    const dataStr = JSON.stringify(softwareData, null, 2);
    const blob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'software-data.json';
    a.click();
    URL.revokeObjectURL(url);
}

function importData() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const importedData = JSON.parse(e.target.result);
                    softwareData = importedData;
                    navigateTo([]);
                    updateCategorySelect();
                    alert('数据导入成功！');
                } catch (error) {
                    alert('导入失败：文件格式错误！');
                }
            };
            reader.readAsText(file);
        }
    };
    input.click();
}

// 模态框功能
function openSoftwareModal(categoryName, platformName, softwareIndex) {
    const software = softwareData[categoryName].platforms[platformName][softwareIndex];
    const modal = document.getElementById('softwareModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    modalTitle.textContent = software.name;
    
    modalBody.innerHTML = `
        <div class="software-icon-large">💿</div>
        
        <div class="software-info">
            <div><strong>软件描述：</strong>${software.description}</div>
        </div>
        
        <div class="info-section">
            <h3>📋 软件介绍</h3>
            <div class="info-content">
                ${software.usage || '暂无使用说明'}
            </div>
        </div>
        
        <div class="info-section">
            <h3>⚙️ 安装说明</h3>
            <div class="info-content">
                ${software.installation ? 
                    '<ul>' + software.installation.map(step => `<li>${step}</li>`).join('') + '</ul>' 
                    : '暂无安装说明'
                }
            </div>
        </div>
        
        <div class="download-section">
            <h4>📥 下载软件</h4>
            <a href="${software.url}" class="download-btn-large" ${software.url === '#' ? 'onclick="alert(\'下载链接暂未配置\'); return false;"' : ''}>
                立即下载 ${software.name}
            </a>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // 防止背景滚动
}

function closeSoftwareModal() {
    const modal = document.getElementById('softwareModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // 恢复滚动
}

// 点击模态框外部关闭
window.onclick = function(event) {
    const modal = document.getElementById('softwareModal');
    if (event.target === modal) {
        closeSoftwareModal();
    }
}

// 按ESC键关闭模态框
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeSoftwareModal();
    }
});

// 页面加载效果
function showLoadingEffect() {
    const contentGrid = document.getElementById('contentGrid');
    contentGrid.style.opacity = '0';
    setTimeout(() => {
        contentGrid.style.opacity = '1';
    }, 100);
}

// 平滑滚动到顶部
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// 增强导航功能
function enhancedNavigateTo(path) {
    showLoadingEffect();
    currentPath = path;
    updateBreadcrumb();
    updateContent();
    hideSearchResults();
    scrollToTop();
}

// 添加键盘快捷键支持
document.addEventListener('keydown', function(event) {
    // ESC 键关闭模态框
    if (event.key === 'Escape') {
        closeSoftwareModal();
        hideSearchResults();
    }
    
    // Ctrl/Cmd + K 聚焦搜索框
    if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        document.getElementById('searchBox').focus();
    }
    
    // Ctrl/Cmd + H 回到首页
    if ((event.ctrlKey || event.metaKey) && event.key === 'h') {
        event.preventDefault();
        navigateTo([]);
    }
});

// 增强的搜索功能 - 防抖
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const debouncedSearch = debounce(handleSearch, 300);

// 初始化页面
document.addEventListener('DOMContentLoaded', function() {
    // 添加页面加载动画
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in-out';
        document.body.style.opacity = '1';
    }, 100);
    
    navigateTo([]);
    updateCategorySelect();
    
    // 使用防抖的搜索
    const searchBox = document.getElementById('searchBox');
    searchBox.addEventListener('input', (e) => debouncedSearch(e.target.value));
    
    // 点击页面其他地方隐藏搜索结果
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.search-container')) {
            hideSearchResults();
        }
    });
    
    // 添加搜索框快捷键提示
    const searchBoxElement = document.getElementById('searchBox');
    if (navigator.userAgent.includes('Mac')) {
        searchBoxElement.placeholder = '搜索软件... (⌘K)';
    } else {
        searchBoxElement.placeholder = '搜索软件... (Ctrl+K)';
    }
    
    // 添加版权信息
    console.log('%c🚀 软件仓库', 'color: #667eea; font-size: 20px; font-weight: bold;');
    console.log('%c专业软件资源管理平台', 'color: #718096; font-size: 14px;');
    console.log('%cPowered by ChinHae Software', 'color: #a0aec0; font-size: 12px;');
});
