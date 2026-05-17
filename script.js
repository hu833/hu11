// AI工具数据
const toolsData = [
    // AI对话
    {
        id: 1,
        name: 'ChatGPT',
        description: 'OpenAI开发的强大AI对话助手，支持多轮对话、代码生成、文案创作等多种任务，是目前最强大的AI助手之一。',
        icon: '💬',
        iconBg: 'linear-gradient(135deg, #10a37f, #1a7f5a)',
        category: 'chat',
        categoryName: 'AI对话',
        tag: 'hot',
        url: 'https://chat.openai.com',
        visits: '128万'
    },
    {
        id: 2,
        name: 'Claude',
        description: 'Anthropic开发的AI助手，擅长长文本理解和分析，支持200K上下文，安全可靠，推理能力强。',
        icon: '🤖',
        iconBg: 'linear-gradient(135deg, #d97706, #b45309)',
        category: 'chat',
        categoryName: 'AI对话',
        tag: 'hot',
        url: 'https://claude.ai',
        visits: '76万'
    },
    {
        id: 3,
        name: 'Google Gemini',
        description: 'Google最新多模态AI模型，支持文本、图像、音频等多种输入，与Google服务深度集成。',
        icon: '✨',
        iconBg: 'linear-gradient(135deg, #4285f4, #1a73e8)',
        category: 'chat',
        categoryName: 'AI对话',
        tag: 'free',
        url: 'https://gemini.google.com',
        visits: '65万'
    },
    {
        id: 4,
        name: 'Kimi',
        description: '月之暗面开发的AI助手，支持超长文本处理，中文理解能力出色，完全免费使用。',
        icon: '🌙',
        iconBg: 'linear-gradient(135deg, #6366f1, #4f46e5)',
        category: 'chat',
        categoryName: 'AI对话',
        tag: 'free',
        url: 'https://kimi.moonshot.cn',
        visits: '58万'
    },
    {
        id: 5,
        name: '文心一言',
        description: '百度推出的大语言模型，中文理解能力强，适合国内用户，支持多模态交互。',
        icon: '🔵',
        iconBg: 'linear-gradient(135deg, #2932e1, #1a237e)',
        category: 'chat',
        categoryName: 'AI对话',
        tag: 'free',
        url: 'https://yiyan.baidu.com',
        visits: '42万'
    },
    {
        id: 6,
        name: '智谱清言',
        description: '智谱AI推出的对话助手，基于GLM-4模型，支持长文本、代码、数学等多种能力。',
        icon: '💎',
        iconBg: 'linear-gradient(135deg, #3b82f6, #2563eb)',
        category: 'chat',
        categoryName: 'AI对话',
        tag: 'free',
        url: 'https://chatglm.cn',
        visits: '35万'
    },
    // AI绘画
    {
        id: 7,
        name: 'Midjourney',
        description: '顶级AI绘画工具，生成艺术感极强的图像作品，支持多种风格，是设计师和艺术家的首选。',
        icon: '🎨',
        iconBg: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
        category: 'image',
        categoryName: 'AI绘画',
        tag: 'paid',
        url: 'https://midjourney.com',
        visits: '95万'
    },
    {
        id: 8,
        name: 'Stable Diffusion',
        description: '开源AI绘画模型，可本地部署，高度自定义，支持ControlNet等高级功能。',
        icon: '🖼️',
        iconBg: 'linear-gradient(135deg, #9333ea, #7c3aed)',
        category: 'image',
        categoryName: 'AI绘画',
        tag: 'free',
        url: 'https://stability.ai',
        visits: '68万'
    },
    {
        id: 9,
        name: 'DALL·E 3',
        description: 'OpenAI图像生成模型，文本理解能力强，效果惊艳，与ChatGPT深度集成。',
        icon: '🎭',
        iconBg: 'linear-gradient(135deg, #10a37f, #059669)',
        category: 'image',
        categoryName: 'AI绘画',
        tag: 'paid',
        url: 'https://openai.com/dall-e-3',
        visits: '52万'
    },
    {
        id: 10,
        name: 'Leonardo.ai',
        description: 'AI图像生成平台，支持游戏素材、角色设计等专业用途，提供丰富的模型选择。',
        icon: '🦁',
        iconBg: 'linear-gradient(135deg, #f59e0b, #d97706)',
        category: 'image',
        categoryName: 'AI绘画',
        tag: 'free',
        url: 'https://leonardo.ai',
        visits: '38万'
    },
    {
        id: 11,
        name: '文心一格',
        description: '百度AI绘画平台，中文提示词支持好，国风效果出色，适合中国用户。',
        icon: '🖼️',
        iconBg: 'linear-gradient(135deg, #2932e1, #1a237e)',
        category: 'image',
        categoryName: 'AI绘画',
        tag: 'free',
        url: 'https://yige.baidu.com',
        visits: '25万'
    },
    // AI视频
    {
        id: 12,
        name: 'Runway',
        description: 'AI视频生成与编辑平台，支持视频生成、绿幕抠像、视频修复等专业功能。',
        icon: '🎬',
        iconBg: 'linear-gradient(135deg, #ec4899, #be185d)',
        category: 'video',
        categoryName: 'AI视频',
        tag: 'paid',
        url: 'https://runway.ml',
        visits: '48万'
    },
    {
        id: 13,
        name: 'Pika',
        description: 'AI视频生成工具，支持文字/图片生成视频，效果流畅自然，操作简单。',
        icon: '🎥',
        iconBg: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
        category: 'video',
        categoryName: 'AI视频',
        tag: 'hot',
        url: 'https://pika.art',
        visits: '42万'
    },
    {
        id: 14,
        name: 'Sora',
        description: 'OpenAI视频生成模型，可生成长达60秒的高质量视频，效果震撼，即将开放。',
        icon: '🌟',
        iconBg: 'linear-gradient(135deg, #10a37f, #059669)',
        category: 'video',
        categoryName: 'AI视频',
        tag: 'hot',
        url: 'https://openai.com/sora',
        visits: '85万'
    },
    {
        id: 15,
        name: '剪映',
        description: '抖音旗下视频编辑工具，内置AI字幕、AI配音、智能剪辑等功能，完全免费。',
        icon: '✂️',
        iconBg: 'linear-gradient(135deg, #1a1a1a, #333)',
        category: 'video',
        categoryName: 'AI视频',
        tag: 'free',
        url: 'https://www.capcut.cn',
        visits: '120万'
    },
    // AI编程
    {
        id: 16,
        name: 'GitHub Copilot',
        description: 'GitHub AI编程助手，实时代码补全，支持多种语言，提升编码效率40%以上。',
        icon: '💻',
        iconBg: 'linear-gradient(135deg, #24292e, #404448)',
        category: 'code',
        categoryName: 'AI编程',
        tag: 'paid',
        url: 'https://github.com/features/copilot',
        visits: '72万'
    },
    {
        id: 17,
        name: 'Cursor',
        description: 'AI代码编辑器，深度集成AI，支持智能补全、代码重构、Bug修复，编程效率神器。',
        icon: '🖱️',
        iconBg: 'linear-gradient(135deg, #1a1a1a, #333)',
        category: 'code',
        categoryName: 'AI编程',
        tag: 'hot',
        url: 'https://cursor.sh',
        visits: '52万'
    },
    {
        id: 18,
        name: 'Codeium',
        description: '免费AI代码补全工具，支持多种IDE，速度快，准确率高，完全免费使用。',
        icon: '⚡',
        iconBg: 'linear-gradient(135deg, #09b3af, #0d9488)',
        category: 'code',
        categoryName: 'AI编程',
        tag: 'free',
        url: 'https://codeium.com',
        visits: '38万'
    },
    {
        id: 19,
        name: '通义灵码',
        description: '阿里云AI编码助手，免费使用，支持主流IDE，中文注释生成效果出色。',
        icon: '🔷',
        iconBg: 'linear-gradient(135deg, #ff6a00, #ea580c)',
        category: 'code',
        categoryName: 'AI编程',
        tag: 'free',
        url: 'https://tongyi.aliyun.com/lingma',
        visits: '28万'
    },
    // AI写作
    {
        id: 20,
        name: 'Jasper',
        description: '专业AI写作工具，支持营销文案、博客文章、社交媒体内容生成，营销人员必备。',
        icon: '✍️',
        iconBg: 'linear-gradient(135deg, #ff4757, #dc2626)',
        category: 'writing',
        categoryName: 'AI写作',
        tag: 'paid',
        url: 'https://jasper.ai',
        visits: '32万'
    },
    {
        id: 21,
        name: 'Notion AI',
        description: 'Notion内置AI写作助手，支持笔记整理、内容扩写、翻译、摘要等功能。',
        icon: '📓',
        iconBg: 'linear-gradient(135deg, #1a1a1a, #333)',
        category: 'writing',
        categoryName: 'AI写作',
        tag: 'paid',
        url: 'https://notion.so',
        visits: '45万'
    },
    {
        id: 22,
        name: '秘塔写作猫',
        description: '中文AI写作工具，支持论文润色、公文写作、小说创作等，中文效果出色。',
        icon: '🐱',
        iconBg: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
        category: 'writing',
        categoryName: 'AI写作',
        tag: 'free',
        url: 'https://xiezuocat.com',
        visits: '22万'
    },
    {
        id: 23,
        name: 'Copy.ai',
        description: '快速生成营销文案、产品描述、广告语等商业内容，支持多种语言。',
        icon: '📝',
        iconBg: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
        category: 'writing',
        categoryName: 'AI写作',
        tag: 'free',
        url: 'https://copy.ai',
        visits: '28万'
    },
    // AI音频
    {
        id: 24,
        name: 'ElevenLabs',
        description: 'AI语音合成平台，声音自然逼真，支持声音克隆，多语言支持，效果惊艳。',
        icon: '🎙️',
        iconBg: 'linear-gradient(135deg, #f97316, #ea580c)',
        category: 'audio',
        categoryName: 'AI音频',
        tag: 'paid',
        url: 'https://elevenlabs.io',
        visits: '35万'
    },
    {
        id: 25,
        name: 'Suno AI',
        description: 'AI音乐生成工具，输入文字即可创作完整歌曲，支持多种风格，效果专业。',
        icon: '🎵',
        iconBg: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
        category: 'audio',
        categoryName: 'AI音频',
        tag: 'hot',
        url: 'https://suno.ai',
        visits: '41万'
    },
    {
        id: 26,
        name: 'Mubert',
        description: 'AI背景音乐生成，适合视频、直播、游戏等场景，版权无忧，免费使用。',
        icon: '🎶',
        iconBg: 'linear-gradient(135deg, #06b6d4, #0891b2)',
        category: 'audio',
        categoryName: 'AI音频',
        tag: 'free',
        url: 'https://mubert.com',
        visits: '18万'
    },
    // 效率工具
    {
        id: 27,
        name: 'Gamma',
        description: 'AI演示文稿生成工具，一键创建精美PPT，支持多种模板，提升工作效率。',
        icon: '📊',
        iconBg: 'linear-gradient(135deg, #9333ea, #7c3aed)',
        category: 'productivity',
        categoryName: '效率工具',
        tag: 'free',
        url: 'https://gamma.app',
        visits: '38万'
    },
    {
        id: 28,
        name: '飞书智能伙伴',
        description: '飞书内置AI助手，支持文档创作、会议总结、智能问答等功能，企业协作神器。',
        icon: '🚀',
        iconBg: 'linear-gradient(135deg, #3370ff, #2563eb)',
        category: 'productivity',
        categoryName: '效率工具',
        tag: 'free',
        url: 'https://feishu.cn',
        visits: '55万'
    },
    {
        id: 29,
        name: 'Otter.ai',
        description: 'AI会议记录工具，实时转录，自动生成会议纪要，支持多语言。',
        icon: '🦦',
        iconBg: 'linear-gradient(135deg, #1d4ed8, #1e40af)',
        category: 'productivity',
        categoryName: '效率工具',
        tag: 'paid',
        url: 'https://otter.ai',
        visits: '25万'
    },
    {
        id: 30,
        name: 'Mem',
        description: 'AI驱动的笔记工具，自动组织知识，智能检索，打造个人知识库。',
        icon: '🧠',
        iconBg: 'linear-gradient(135deg, #6366f1, #4f46e5)',
        category: 'productivity',
        categoryName: '效率工具',
        tag: 'paid',
        url: 'https://mem.ai',
        visits: '15万'
    },
    // AI研究
    {
        id: 31,
        name: 'Perplexity',
        description: 'AI搜索引擎，实时联网搜索，提供引用来源，答案准确可靠，研究必备。',
        icon: '🔍',
        iconBg: 'linear-gradient(135deg, #20b2aa, #14b8a6)',
        category: 'research',
        categoryName: 'AI研究',
        tag: 'free',
        url: 'https://perplexity.ai',
        visits: '48万'
    },
    {
        id: 32,
        name: 'Elicit',
        description: 'AI学术研究助手，自动文献检索与分析，帮助研究人员快速找到相关论文。',
        icon: '📚',
        iconBg: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
        category: 'research',
        categoryName: 'AI研究',
        tag: 'free',
        url: 'https://elicit.org',
        visits: '12万'
    },
    {
        id: 33,
        name: 'Consensus',
        description: 'AI论文搜索引擎，快速找到学术研究答案，提供论文摘要和引用。',
        icon: '🔎',
        iconBg: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
        category: 'research',
        categoryName: 'AI研究',
        tag: 'free',
        url: 'https://consensus.app',
        visits: '8万'
    },
    // AI翻译
    {
        id: 34,
        name: 'DeepL',
        description: '高质量AI翻译工具，翻译效果自然流畅，支持31种语言，专业用户首选。',
        icon: '🌐',
        iconBg: 'linear-gradient(135deg, #042b48, #0f172a)',
        category: 'translate',
        categoryName: 'AI翻译',
        tag: 'free',
        url: 'https://deepl.com',
        visits: '62万'
    },
    {
        id: 35,
        name: '沉浸式翻译',
        description: '浏览器翻译插件，双语对照，支持多种翻译引擎，阅读外文必备。',
        icon: '📖',
        iconBg: 'linear-gradient(135deg, #6366f1, #4f46e5)',
        category: 'translate',
        categoryName: 'AI翻译',
        tag: 'free',
        url: 'https://immersivetranslate.com',
        visits: '35万'
    },
    {
        id: 36,
        name: 'ChatGPT翻译',
        description: '利用ChatGPT进行翻译，支持语境理解和润色，翻译质量极高。',
        icon: '💬',
        iconBg: 'linear-gradient(135deg, #10a37f, #059669)',
        category: 'translate',
        categoryName: 'AI翻译',
        tag: 'free',
        url: 'https://chat.openai.com',
        visits: '45万'
    },
    // AI设计
    {
        id: 37,
        name: 'Canva AI',
        description: '设计平台内置AI功能，支持AI生成图片、文案、设计模板，设计小白也能上手。',
        icon: '🎨',
        iconBg: 'linear-gradient(135deg, #00c4cc, #0891b2)',
        category: 'design',
        categoryName: 'AI设计',
        tag: 'free',
        url: 'https://canva.com',
        visits: '85万'
    },
    {
        id: 38,
        name: 'Figma AI',
        description: 'Figma内置AI设计助手，快速生成UI设计，支持组件智能生成，设计师必备。',
        icon: '🎯',
        iconBg: 'linear-gradient(135deg, #f24e1e, #dc2626)',
        category: 'design',
        categoryName: 'AI设计',
        tag: 'free',
        url: 'https://figma.com',
        visits: '52万'
    },
    {
        id: 39,
        name: 'Looka',
        description: 'AI Logo设计工具，快速生成品牌标识，支持多种风格，创业公司首选。',
        icon: '✨',
        iconBg: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
        category: 'design',
        categoryName: 'AI设计',
        tag: 'paid',
        url: 'https://looka.com',
        visits: '15万'
    },
    // 其他
    {
        id: 40,
        name: 'Character.AI',
        description: 'AI角色聊天平台，与各种虚拟角色对话互动，支持自定义角色，娱乐性强。',
        icon: '🎭',
        iconBg: 'linear-gradient(135deg, #6366f1, #4f46e5)',
        category: 'other',
        categoryName: '其他',
        tag: 'free',
        url: 'https://character.ai',
        visits: '45万'
    },
    {
        id: 41,
        name: 'Hugging Face',
        description: 'AI模型社区平台，海量开源模型和数据集，开发者必备，AI领域GitHub。',
        icon: '🤗',
        iconBg: 'linear-gradient(135deg, #ffcc00, #f59e0b)',
        category: 'other',
        categoryName: '其他',
        tag: 'free',
        url: 'https://huggingface.co',
        visits: '68万'
    },
    {
        id: 42,
        name: '通义千问',
        description: '阿里云推出的大规模语言模型，支持多种应用场景，免费使用，中文能力强。',
        icon: '🔷',
        iconBg: 'linear-gradient(135deg, #ff6a00, #ea580c)',
        category: 'chat',
        categoryName: 'AI对话',
        tag: 'free',
        url: 'https://tongyi.aliyun.com',
        visits: '32万'
    }
];

// DOM元素
const toolsGrid = document.getElementById('toolsGrid');
const categoryTabs = document.querySelectorAll('.category-tab');
const searchInput = document.getElementById('searchInput');
const backToTop = document.getElementById('backToTop');
const resultCount = document.getElementById('resultCount');

// 当前状态
let currentCategory = 'all';

// 渲染工具卡片
function renderTools(tools) {
    if (tools.length === 0) {
        toolsGrid.innerHTML = `
            <div class="empty-state" style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
                <div style="font-size: 48px; margin-bottom: 20px;">🔍</div>
                <h3 style="font-size: 20px; margin-bottom: 10px; color: var(--text-primary);">未找到相关工具</h3>
                <p style="color: var(--text-secondary);">尝试其他关键词或分类</p>
            </div>
        `;
        return;
    }

    toolsGrid.innerHTML = tools.map(tool => `
        <div class="tool-card" onclick="window.open('${tool.url}', '_blank')">
            <div class="tool-header">
                <div class="tool-icon" style="background: ${tool.iconBg}">
                    ${tool.icon}
                </div>
                <div class="tool-info">
                    <div class="tool-name">
                        <a href="${tool.url}" target="_blank" onclick="event.stopPropagation()">${tool.name}</a>
                    </div>
                    <span class="tool-category">${tool.categoryName}</span>
                </div>
            </div>
            <p class="tool-desc">${tool.description}</p>
            <div class="tool-footer">
                <div class="tool-tags">
                    <span class="tool-tag ${tool.tag}">${getTagText(tool.tag)}</span>
                </div>
                <div class="tool-action">
                    <span>访问</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M7 17L17 7M17 7H7M17 7V17"/>
                    </svg>
                </div>
            </div>
        </div>
    `).join('');

    // 更新结果数量
    if (resultCount) {
        resultCount.textContent = tools.length;
    }
}

// 获取标签文本
function getTagText(tag) {
    const tagMap = {
        'free': '免费',
        'paid': '付费',
        'hot': '热门'
    };
    return tagMap[tag] || '';
}

// 过滤工具
function filterTools() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    let filtered = toolsData;

    // 按分类过滤
    if (currentCategory !== 'all') {
        filtered = filtered.filter(tool => tool.category === currentCategory);
    }

    // 按搜索词过滤
    if (searchTerm) {
        filtered = filtered.filter(tool =>
            tool.name.toLowerCase().includes(searchTerm) ||
            tool.description.toLowerCase().includes(searchTerm) ||
            tool.categoryName.toLowerCase().includes(searchTerm)
        );
    }

    renderTools(filtered);
}

// 分类标签点击事件
categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        categoryTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentCategory = tab.dataset.category;
        filterTools();
    });
});

// 搜索输入事件
searchInput.addEventListener('input', filterTools);

// 返回顶部按钮
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 数字动画
function animateNumbers() {
    const stats = document.querySelectorAll('.stat-value[data-count]');
    stats.forEach(stat => {
        const target = parseInt(stat.dataset.count);
        const duration = 2000;
        const start = 0;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(start + (target - start) * easeOut);
            stat.textContent = current;

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }

        requestAnimationFrame(update);
    });
}

// 排序按钮
const sortBtns = document.querySelectorAll('.sort-btn');
sortBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        sortBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// 键盘快捷键
document.addEventListener('keydown', (e) => {
    // Cmd/Ctrl + K 聚焦搜索
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
    }
    // Esc 清空搜索
    if (e.key === 'Escape' && document.activeElement === searchInput) {
        searchInput.value = '';
        filterTools();
        searchInput.blur();
    }
});

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    renderTools(toolsData);
    animateNumbers();
});

// 添加卡片点击涟漪效果
document.addEventListener('click', (e) => {
    const card = e.target.closest('.tool-card');
    if (card) {
        card.style.transform = 'scale(0.98)';
        setTimeout(() => {
            card.style.transform = '';
        }, 150);
    }
});
