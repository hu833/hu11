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
    },
    // ========== 更多AI对话 ==========
    {
        id: 43,
        name: 'DeepSeek',
        description: '国产顶尖AI模型，数学和代码能力出色，完全免费，性价比极高。',
        icon: '🐋',
        iconBg: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
        category: 'chat',
        categoryName: 'AI对话',
        tag: 'hot',
        url: 'https://chat.deepseek.com',
        visits: '95万'
    },
    {
        id: 44,
        name: '豆包',
        description: '字节跳动AI助手，支持对话、写作、绘画等多功能，完全免费。',
        icon: '🫘',
        iconBg: 'linear-gradient(135deg, #22c55e, #16a34a)',
        category: 'chat',
        categoryName: 'AI对话',
        tag: 'free',
        url: 'https://www.doubao.com',
        visits: '68万'
    },
    {
        id: 45,
        name: '讯飞星火',
        description: '科大讯飞大模型，语音交互出色，中文理解能力强，办公学习好帮手。',
        icon: '⭐',
        iconBg: 'linear-gradient(135deg, #eab308, #ca8a04)',
        category: 'chat',
        categoryName: 'AI对话',
        tag: 'free',
        url: 'https://xinghuo.xfyun.cn',
        visits: '45万'
    },
    {
        id: 46,
        name: '腾讯混元',
        description: '腾讯自研大模型，与微信生态深度整合，多模态能力强。',
        icon: '🌊',
        iconBg: 'linear-gradient(135deg, #06b6d4, #0891b2)',
        category: 'chat',
        categoryName: 'AI对话',
        tag: 'free',
        url: 'https://hunyuan.tencent.com',
        visits: '38万'
    },
    {
        id: 47,
        name: 'Poe',
        description: '多模型聚合平台，可使用ChatGPT、Claude等多种AI，一站式体验。',
        icon: '🤖',
        iconBg: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
        category: 'chat',
        categoryName: 'AI对话',
        tag: 'hot',
        url: 'https://poe.com',
        visits: '52万'
    },
    {
        id: 48,
        name: 'Coze扣子',
        description: '字节AI应用构建平台，无需代码创建AI机器人，支持多平台发布。',
        icon: '🧩',
        iconBg: 'linear-gradient(135deg, #f43f5e, #e11d48)',
        category: 'chat',
        categoryName: 'AI对话',
        tag: 'hot',
        url: 'https://www.coze.cn',
        visits: '48万'
    },
    {
        id: 49,
        name: '百川智能',
        description: '国产大模型，中文能力强，支持长文本处理，免费使用。',
        icon: '🌊',
        iconBg: 'linear-gradient(135deg, #3b82f6, #2563eb)',
        category: 'chat',
        categoryName: 'AI对话',
        tag: 'free',
        url: 'https://www.baichuan-ai.com',
        visits: '22万'
    },
    {
        id: 50,
        name: 'MiniMax',
        description: '国产AI公司，海螺AI助手，语音对话自然，角色扮演出色。',
        icon: '🐚',
        iconBg: 'linear-gradient(135deg, #ec4899, #db2777)',
        category: 'chat',
        categoryName: 'AI对话',
        tag: 'free',
        url: 'https://www.minimaxi.com',
        visits: '28万'
    },
    // ========== 更多AI绘画 ==========
    {
        id: 51,
        name: '即梦AI',
        description: '字节AI绘画工具，中文提示词友好，生成速度快，免费额度多。',
        icon: '🎨',
        iconBg: 'linear-gradient(135deg, #f43f5e, #e11d48)',
        category: 'image',
        categoryName: 'AI绘画',
        tag: 'hot',
        url: 'https://jimeng.jianying.com',
        visits: '58万'
    },
    {
        id: 52,
        name: 'Flux',
        description: '开源AI绘画模型，效果媲美Midjourney，可本地部署，完全免费。',
        icon: '⚡',
        iconBg: 'linear-gradient(135deg, #f59e0b, #d97706)',
        category: 'image',
        categoryName: 'AI绘画',
        tag: 'hot',
        url: 'https://blackforestlabs.ai',
        visits: '72万'
    },
    {
        id: 53,
        name: 'Ideogram',
        description: 'AI绘画工具，文字渲染能力最强，适合海报、Logo设计。',
        icon: '📝',
        iconBg: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
        category: 'image',
        categoryName: 'AI绘画',
        tag: 'hot',
        url: 'https://ideogram.ai',
        visits: '45万'
    },
    {
        id: 54,
        name: 'LiblibAI',
        description: '国产AI绘画平台，模型丰富，支持在线训练，免费使用。',
        icon: '🖼️',
        iconBg: 'linear-gradient(135deg, #06b6d4, #0891b2)',
        category: 'image',
        categoryName: 'AI绘画',
        tag: 'free',
        url: 'https://www.liblib.art',
        visits: '35万'
    },
    {
        id: 55,
        name: '堆友',
        description: '阿里AI绘画平台，中文提示词友好，电商素材生成神器。',
        icon: '🎨',
        iconBg: 'linear-gradient(135deg, #ff6a00, #ea580c)',
        category: 'image',
        categoryName: 'AI绘画',
        tag: 'free',
        url: 'https://tongyi.aliyun.com/wanxiang',
        visits: '32万'
    },
    {
        id: 56,
        name: 'Civitai',
        description: 'AI模型分享社区，海量Stable Diffusion模型，创作者必备。',
        icon: '🎭',
        iconBg: 'linear-gradient(135deg, #3b82f6, #2563eb)',
        category: 'image',
        categoryName: 'AI绘画',
        tag: 'free',
        url: 'https://civitai.com',
        visits: '55万'
    },
    {
        id: 57,
        name: 'Playground AI',
        description: '免费AI绘画工具，每日500张免费额度，操作简单效果好。',
        icon: '🎮',
        iconBg: 'linear-gradient(135deg, #22c55e, #16a34a)',
        category: 'image',
        categoryName: 'AI绘画',
        tag: 'free',
        url: 'https://playground.com',
        visits: '28万'
    },
    // ========== 更多AI视频 ==========
    {
        id: 58,
        name: '可灵AI',
        description: '快手AI视频生成，文字/图片生成视频，效果惊艳，国产首选。',
        icon: '🎬',
        iconBg: 'linear-gradient(135deg, #f43f5e, #e11d48)',
        category: 'video',
        categoryName: 'AI视频',
        tag: 'hot',
        url: 'https://klingai.kuaishou.com',
        visits: '65万'
    },
    {
        id: 59,
        name: 'Luma Dream Machine',
        description: 'AI视频生成工具，效果逼真，生成速度快，免费体验。',
        icon: '🎥',
        iconBg: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
        category: 'video',
        categoryName: 'AI视频',
        tag: 'hot',
        url: 'https://lumalabs.ai/dream-machine',
        visits: '48万'
    },
    {
        id: 60,
        name: 'Haiper',
        description: 'AI视频生成平台，文字生成视频，效果流畅，免费使用。',
        icon: '🎞️',
        iconBg: 'linear-gradient(135deg, #06b6d4, #0891b2)',
        category: 'video',
        categoryName: 'AI视频',
        tag: 'free',
        url: 'https://haiper.ai',
        visits: '32万'
    },
    {
        id: 61,
        name: '即创',
        description: '字节AI视频工具，一键生成短视频，适合内容创作者。',
        icon: '📹',
        iconBg: 'linear-gradient(135deg, #22c55e, #16a34a)',
        category: 'video',
        categoryName: 'AI视频',
        tag: 'free',
        url: 'https://aic.oceanengine.com',
        visits: '28万'
    },
    {
        id: 62,
        name: 'Stable Video',
        description: 'Stability AI视频生成模型，开源免费，可本地部署。',
        icon: '🎥',
        iconBg: 'linear-gradient(135deg, #9333ea, #7c3aed)',
        category: 'video',
        categoryName: 'AI视频',
        tag: 'free',
        url: 'https://stability.ai',
        visits: '25万'
    },
    // ========== 更多AI编程 ==========
    {
        id: 63,
        name: 'Claude Code',
        description: 'Anthropic编程助手，终端AI编程神器，代码理解能力强。',
        icon: '💻',
        iconBg: 'linear-gradient(135deg, #d97706, #b45309)',
        category: 'code',
        categoryName: 'AI编程',
        tag: 'hot',
        url: 'https://claude.ai',
        visits: '38万'
    },
    {
        id: 64,
        name: 'Windsurf',
        description: 'AI代码编辑器，深度AI集成，免费使用，Cursor替代品。',
        icon: '🌊',
        iconBg: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
        category: 'code',
        categoryName: 'AI编程',
        tag: 'hot',
        url: 'https://codeium.com/windsurf',
        visits: '42万'
    },
    {
        id: 65,
        name: 'Amazon CodeWhisperer',
        description: '亚马逊AI编程助手，免费使用，支持多种语言，AWS集成。',
        icon: '☁️',
        iconBg: 'linear-gradient(135deg, #f59e0b, #d97706)',
        category: 'code',
        categoryName: 'AI编程',
        tag: 'free',
        url: 'https://aws.amazon.com/codewhisperer',
        visits: '22万'
    },
    {
        id: 66,
        name: 'Tabnine',
        description: 'AI代码补全工具，隐私保护好，支持本地部署，企业首选。',
        icon: '⌨️',
        iconBg: 'linear-gradient(135deg, #6366f1, #4f46e5)',
        category: 'code',
        categoryName: 'AI编程',
        tag: 'free',
        url: 'https://www.tabnine.com',
        visits: '28万'
    },
    {
        id: 67,
        name: 'Replit AI',
        description: '在线编程平台AI助手，浏览器即可编程，支持多种语言。',
        icon: '🔄',
        iconBg: 'linear-gradient(135deg, #f43f5e, #e11d48)',
        category: 'code',
        categoryName: 'AI编程',
        tag: 'free',
        url: 'https://replit.com',
        visits: '35万'
    },
    {
        id: 68,
        name: 'Baidu Comate',
        description: '百度AI编程助手，中文代码注释生成出色，免费使用。',
        icon: '🔷',
        iconBg: 'linear-gradient(135deg, #3b82f6, #2563eb)',
        category: 'code',
        categoryName: 'AI编程',
        tag: 'free',
        url: 'https://comate.baidu.com',
        visits: '18万'
    },
    // ========== 更多AI写作 ==========
    {
        id: 69,
        name: 'Writesonic',
        description: 'AI写作工具，营销文案、博客文章一键生成，支持中文。',
        icon: '✍️',
        iconBg: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
        category: 'writing',
        categoryName: 'AI写作',
        tag: 'free',
        url: 'https://writesonic.com',
        visits: '25万'
    },
    {
        id: 70,
        name: 'Rytr',
        description: 'AI写作助手，多种写作模板，免费额度充足，入门首选。',
        icon: '📝',
        iconBg: 'linear-gradient(135deg, #22c55e, #16a34a)',
        category: 'writing',
        categoryName: 'AI写作',
        tag: 'free',
        url: 'https://rytr.me',
        visits: '22万'
    },
    {
        id: 71,
        name: '火山写作',
        description: '字节AI写作工具，中文写作效果好，完全免费。',
        icon: '🌋',
        iconBg: 'linear-gradient(135deg, #f43f5e, #e11d48)',
        category: 'writing',
        categoryName: 'AI写作',
        tag: 'free',
        url: 'https://www.writingo.net',
        visits: '18万'
    },
    {
        id: 72,
        name: '讯飞写作',
        description: '科大讯飞AI写作，公文、论文写作助手，中文专业。',
        icon: '📄',
        iconBg: 'linear-gradient(135deg, #eab308, #ca8a04)',
        category: 'writing',
        categoryName: 'AI写作',
        tag: 'free',
        url: 'https://xiezuoxia.com',
        visits: '15万'
    },
    {
        id: 73,
        name: 'Grammarly',
        description: 'AI英语写作助手，语法检查、润色优化，英文写作必备。',
        icon: '✏️',
        iconBg: 'linear-gradient(135deg, #22c55e, #16a34a)',
        category: 'writing',
        categoryName: 'AI写作',
        tag: 'free',
        url: 'https://www.grammarly.com',
        visits: '85万'
    },
    // ========== 更多AI音频 ==========
    {
        id: 74,
        name: 'Udio',
        description: 'AI音乐生成工具，与Suno竞争，音乐质量高，免费体验。',
        icon: '🎵',
        iconBg: 'linear-gradient(135deg, #ec4899, #db2777)',
        category: 'audio',
        categoryName: 'AI音频',
        tag: 'hot',
        url: 'https://www.udio.com',
        visits: '38万'
    },
    {
        id: 75,
        name: '讯飞听见',
        description: 'AI语音转文字，会议录音转写，中文识别率高。',
        icon: '🎤',
        iconBg: 'linear-gradient(135deg, #eab308, #ca8a04)',
        category: 'audio',
        categoryName: 'AI音频',
        tag: 'free',
        url: 'https://www.iflyrec.com',
        visits: '28万'
    },
    {
        id: 76,
        name: 'Fish Audio',
        description: 'AI语音合成，声音克隆，多语言支持，效果自然。',
        icon: '🐟',
        iconBg: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
        category: 'audio',
        categoryName: 'AI音频',
        tag: 'free',
        url: 'https://fish.audio',
        visits: '22万'
    },
    {
        id: 77,
        name: 'GPT-SoVITS',
        description: '开源AI语音克隆，本地部署，完全免费，效果出色。',
        icon: '🎙️',
        iconBg: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
        category: 'audio',
        categoryName: 'AI音频',
        tag: 'free',
        url: 'https://github.com/RVC-Boss/GPT-SoVITS',
        visits: '18万'
    },
    {
        id: 78,
        name: 'AIVA',
        description: 'AI作曲工具，生成电影配乐、游戏音乐，版权可商用。',
        icon: '🎹',
        iconBg: 'linear-gradient(135deg, #f59e0b, #d97706)',
        category: 'audio',
        categoryName: 'AI音频',
        tag: 'free',
        url: 'https://www.aiva.ai',
        visits: '15万'
    },
    // ========== 更多效率工具 ==========
    {
        id: 79,
        name: 'Notion',
        description: '全能协作工具，内置AI助手，笔记、文档、项目管理一体化。',
        icon: '📓',
        iconBg: 'linear-gradient(135deg, #1a1a1a, #333)',
        category: 'productivity',
        categoryName: '效率工具',
        tag: 'hot',
        url: 'https://notion.so',
        visits: '120万'
    },
    {
        id: 80,
        name: '飞书',
        description: '企业协作平台，AI助手加持，文档、会议、IM一体化。',
        icon: '🚀',
        iconBg: 'linear-gradient(135deg, #3370ff, #2563eb)',
        category: 'productivity',
        categoryName: '效率工具',
        tag: 'free',
        url: 'https://feishu.cn',
        visits: '95万'
    },
    {
        id: 81,
        name: '钉钉AI',
        description: '阿里企业协作，AI助手支持会议纪要、文档摘要。',
        icon: '📱',
        iconBg: 'linear-gradient(135deg, #3b82f6, #2563eb)',
        category: 'productivity',
        categoryName: '效率工具',
        tag: 'free',
        url: 'https://www.dingtalk.com',
        visits: '68万'
    },
    {
        id: 82,
        name: 'Tome',
        description: 'AI演示文稿生成，一键创建精美PPT，讲故事神器。',
        icon: '📊',
        iconBg: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
        category: 'productivity',
        categoryName: '效率工具',
        tag: 'free',
        url: 'https://tome.app',
        visits: '32万'
    },
    {
        id: 83,
        name: 'Beautiful.ai',
        description: 'AI设计PPT，自动排版美化，演示文稿专业工具。',
        icon: '🎨',
        iconBg: 'linear-gradient(135deg, #ec4899, #db2777)',
        category: 'productivity',
        categoryName: '效率工具',
        tag: 'paid',
        url: 'https://www.beautiful.ai',
        visits: '18万'
    },
    {
        id: 84,
        name: 'Fireflies.ai',
        description: 'AI会议记录，自动转录、摘要、分析，会议效率神器。',
        icon: '🪰',
        iconBg: 'linear-gradient(135deg, #f59e0b, #d97706)',
        category: 'productivity',
        categoryName: '效率工具',
        tag: 'free',
        url: 'https://fireflies.ai',
        visits: '22万'
    },
    // ========== 更多AI研究 ==========
    {
        id: 85,
        name: 'Semantic Scholar',
        description: 'AI学术搜索引擎，免费论文检索，引用关系可视化。',
        icon: '📚',
        iconBg: 'linear-gradient(135deg, #3b82f6, #2563eb)',
        category: 'research',
        categoryName: 'AI研究',
        tag: 'free',
        url: 'https://www.semanticscholar.org',
        visits: '35万'
    },
    {
        id: 86,
        name: 'Connected Papers',
        description: '论文关系图谱，可视化引用网络，快速了解研究领域。',
        icon: '🕸️',
        iconBg: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
        category: 'research',
        categoryName: 'AI研究',
        tag: 'free',
        url: 'https://www.connectedpapers.com',
        visits: '18万'
    },
    {
        id: 87,
        name: 'Research Rabbit',
        description: 'AI论文推荐工具，发现相关研究，学术发现神器。',
        icon: '🐰',
        iconBg: 'linear-gradient(135deg, #f43f5e, #e11d48)',
        category: 'research',
        categoryName: 'AI研究',
        tag: 'free',
        url: 'https://www.researchrabbit.ai',
        visits: '15万'
    },
    // ========== 更多AI翻译 ==========
    {
        id: 88,
        name: 'Google翻译',
        description: '谷歌翻译，支持130+语言，免费使用，翻译准确。',
        icon: '🌐',
        iconBg: 'linear-gradient(135deg, #4285f4, #1a73e8)',
        category: 'translate',
        categoryName: 'AI翻译',
        tag: 'free',
        url: 'https://translate.google.com',
        visits: '180万'
    },
    {
        id: 89,
        name: '有道翻译',
        description: '网易AI翻译，中文翻译专业，支持文档翻译。',
        icon: '📖',
        iconBg: 'linear-gradient(135deg, #f43f5e, #e11d48)',
        category: 'translate',
        categoryName: 'AI翻译',
        tag: 'free',
        url: 'https://fanyi.youdao.com',
        visits: '45万'
    },
    {
        id: 90,
        name: '百度翻译',
        description: '百度AI翻译，支持200+语言，文档、图片翻译。',
        icon: '🌐',
        iconBg: 'linear-gradient(135deg, #3b82f6, #2563eb)',
        category: 'translate',
        categoryName: 'AI翻译',
        tag: 'free',
        url: 'https://fanyi.baidu.com',
        visits: '52万'
    },
    // ========== 更多AI设计 ==========
    {
        id: 91,
        name: '即时设计',
        description: '国产协作设计工具，AI辅助设计，Figma替代品。',
        icon: '🎯',
        iconBg: 'linear-gradient(135deg, #3b82f6, #2563eb)',
        category: 'design',
        categoryName: 'AI设计',
        tag: 'free',
        url: 'https://js.design',
        visits: '28万'
    },
    {
        id: 92,
        name: 'MasterGo',
        description: 'AI设计协作平台，国产Figma，团队协作友好。',
        icon: '🎨',
        iconBg: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
        category: 'design',
        categoryName: 'AI设计',
        tag: 'free',
        url: 'https://mastergo.com',
        visits: '22万'
    },
    {
        id: 93,
        name: 'Remove.bg',
        description: 'AI一键抠图，自动去除背景，设计师必备工具。',
        icon: '✂️',
        iconBg: 'linear-gradient(135deg, #22c55e, #16a34a)',
        category: 'design',
        categoryName: 'AI设计',
        tag: 'free',
        url: 'https://www.remove.bg',
        visits: '85万'
    },
    {
        id: 94,
        name: 'Uizard',
        description: 'AI UI设计工具，手绘转设计稿，快速原型制作。',
        icon: '🖼️',
        iconBg: 'linear-gradient(135deg, #06b6d4, #0891b2)',
        category: 'design',
        categoryName: 'AI设计',
        tag: 'free',
        url: 'https://uizard.io',
        visits: '18万'
    },
    // ========== 更多其他 ==========
    {
        id: 95,
        name: 'ChatPDF',
        description: 'AI阅读PDF工具，上传文档即可对话，快速提取信息。',
        icon: '📄',
        iconBg: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
        category: 'other',
        categoryName: '其他',
        tag: 'free',
        url: 'https://www.chatpdf.com',
        visits: '45万'
    },
    {
        id: 96,
        name: 'Humata',
        description: 'AI文档分析工具，快速总结、问答，科研必备。',
        icon: '📊',
        iconBg: 'linear-gradient(135deg, #3b82f6, #2563eb)',
        category: 'other',
        categoryName: '其他',
        tag: 'free',
        url: 'https://www.humata.ai',
        visits: '28万'
    },
    {
        id: 97,
        name: 'Kimi智能助手',
        description: '月之暗面AI，支持20万字长文本，文件解析能力强。',
        icon: '🌙',
        iconBg: 'linear-gradient(135deg, #6366f1, #4f46e5)',
        category: 'other',
        categoryName: '其他',
        tag: 'hot',
        url: 'https://kimi.moonshot.cn',
        visits: '68万'
    },
    {
        id: 98,
        name: 'Pika',
        description: 'AI视频生成，文字/图片生成视频，效果流畅自然。',
        icon: '⚡',
        iconBg: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
        category: 'video',
        categoryName: 'AI视频',
        tag: 'hot',
        url: 'https://pika.art',
        visits: '42万'
    },
    {
        id: 99,
        name: 'HeyGen',
        description: 'AI数字人视频生成，虚拟主播、营销视频制作神器。',
        icon: '🎬',
        iconBg: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
        category: 'video',
        categoryName: 'AI视频',
        tag: 'paid',
        url: 'https://www.heygen.com',
        visits: '38万'
    },
    {
        id: 100,
        name: 'D-ID',
        description: 'AI数字人制作，照片转视频，虚拟主播生成。',
        icon: '👤',
        iconBg: 'linear-gradient(135deg, #ec4899, #db2777)',
        category: 'video',
        categoryName: 'AI视频',
        tag: 'paid',
        url: 'https://www.d-id.com',
        visits: '25万'
    },
    {
        id: 101,
        name: 'Descript',
        description: 'AI视频/播客编辑，文字编辑视频，自动转录。',
        icon: '🎙️',
        iconBg: 'linear-gradient(135deg, #22c55e, #16a34a)',
        category: 'video',
        categoryName: 'AI视频',
        tag: 'paid',
        url: 'https://www.descript.com',
        visits: '32万'
    },
    {
        id: 102,
        name: 'Synthesia',
        description: 'AI视频生成平台，140+AI数字人，多语言视频制作。',
        icon: '🎥',
        iconBg: 'linear-gradient(135deg, #6366f1, #4f46e5)',
        category: 'video',
        categoryName: 'AI视频',
        tag: 'paid',
        url: 'https://www.synthesia.io',
        visits: '28万'
    }
];

// DOM元素
const toolsGrid = document.getElementById('toolsGrid');
const categoryTabs = document.querySelectorAll('.category-tab');
const searchInput = document.getElementById('searchInput');
const backToTop = document.getElementById('backToTop');
const resultCount = document.getElementById('resultCount');
const mobileNav = document.getElementById('mobileNav');
const mobileNavOverlay = document.getElementById('mobileNavOverlay');
const modalOverlay = document.getElementById('modalOverlay');

// 当前状态
let currentCategory = 'all';
let currentNav = 'home';
let currentSort = 'hot';
let searchTimeout = null;

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
        <article class="tool-card" onclick="window.open('${tool.url}', '_blank')">
            <div class="tool-header">
                <div class="tool-icon" style="background: ${tool.iconBg}" aria-hidden="true">
                    ${tool.icon}
                </div>
                <div class="tool-info">
                    <h3 class="tool-name">
                        <a href="${tool.url}" target="_blank" onclick="event.stopPropagation()" aria-label="${tool.name} - ${tool.categoryName}">${tool.name}</a>
                    </h3>
                    <span class="tool-category">${tool.categoryName}</span>
                </div>
            </div>
            <p class="tool-desc" id="desc-${tool.id}">${tool.description}</p>
            <button class="desc-expand-btn" onclick="event.stopPropagation(); toggleDesc(${tool.id})" aria-expanded="false" aria-controls="desc-${tool.id}">
                展开全文
            </button>
            <div class="tool-footer">
                <div class="tool-tags">
                    <span class="tool-tag ${tool.tag}">${getTagText(tool.tag)}</span>
                </div>
                <div class="tool-action" aria-label="访问 ${tool.name}">
                    <span>访问</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                        <path d="M7 17L17 7M17 7H7M17 7V17"/>
                    </svg>
                </div>
            </div>
        </article>
    `).join('');

    // 更新结果数量
    if (resultCount) {
        resultCount.textContent = tools.length;
    }
}

// 切换描述展开/收起
function toggleDesc(id) {
    const descEl = document.getElementById(`desc-${id}`);
    const btn = descEl.nextElementSibling;

    if (descEl.style.webkitLineClamp === 'unset') {
        descEl.style.webkitLineClamp = '2';
        descEl.style.display = '-webkit-box';
        btn.textContent = '展开全文';
        btn.setAttribute('aria-expanded', 'false');
    } else {
        descEl.style.webkitLineClamp = 'unset';
        descEl.style.display = 'block';
        btn.textContent = '收起';
        btn.setAttribute('aria-expanded', 'true');
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

// 搜索输入事件 - 添加防抖
searchInput.addEventListener('input', () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(filterTools, 300);
});

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
    renderHotList();
    updateCategoryCounts();
    initAnnouncementSlider();

    // 检查公告栏状态
    if (localStorage.getItem('announcementClosed')) {
        const announcementBar = document.getElementById('announcementBar');
        if (announcementBar) {
            announcementBar.classList.add('hidden');
        }
    }
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

// ========== 全局函数定义 ==========

// 移动端菜单切换
function toggleMobileMenu() {
    const btn = document.querySelector('.mobile-menu-btn');
    const isOpen = mobileNav.classList.contains('open');

    if (isOpen) {
        mobileNav.classList.remove('open');
        mobileNavOverlay.classList.remove('show');
        btn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    } else {
        mobileNav.classList.add('open');
        mobileNavOverlay.classList.add('show');
        btn.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }
}

// 导航切换
function switchNav(nav, event) {
    if (event) event.preventDefault();
    currentNav = nav;

    // 更新桌面端导航
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.dataset.nav === nav);
    });

    // 更新移动端导航
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.classList.toggle('active', link.dataset.nav === nav);
    });

    // 获取内容区域
    const toolsSection = document.querySelector('.tools-section');
    const articlesSection = document.getElementById('articlesSection');
    const sidebar = document.querySelector('.sidebar');
    const rightSidebar = document.querySelector('.sidebar.right');
    const bannerAd = document.querySelector('.banner-ad');

    // 根据导航类型切换显示
    if (nav === 'articles') {
        // 显示文章页面
        if (toolsSection) toolsSection.style.display = 'none';
        if (articlesSection) articlesSection.style.display = 'block';
        if (sidebar) sidebar.style.display = 'none';
        if (rightSidebar) rightSidebar.style.display = 'none';
        if (bannerAd) bannerAd.style.display = 'none';
        renderArticles();
    } else {
        // 显示工具页面
        if (toolsSection) toolsSection.style.display = 'block';
        if (articlesSection) articlesSection.style.display = 'none';
        if (sidebar) sidebar.style.display = 'block';
        if (rightSidebar) rightSidebar.style.display = 'block';
        if (bannerAd) bannerAd.style.display = 'block';

        // 根据导航类型过滤
        if (nav === 'home') {
            currentCategory = 'all';
            filterTools();
        } else if (nav === 'new') {
            sortTools('new');
        } else if (nav === 'hot') {
            sortTools('hot');
        } else if (nav === 'free') {
            filterByTag('free');
        }
    }

    // 关闭移动端菜单
    if (mobileNav.classList.contains('open')) {
        toggleMobileMenu();
    }

    // 滚动到工具区域
    scrollToTools();
}

// 滚动到工具区域
function scrollToTools(event) {
    if (event) event.preventDefault();
    const toolsSection = document.getElementById('tools');
    if (toolsSection) {
        toolsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// 返回首页
function goHome(event) {
    if (event) event.preventDefault();
    currentCategory = 'all';
    currentNav = 'home';
    filterTools();
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // 重置导航状态
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.dataset.nav === 'home');
    });
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.classList.toggle('active', link.dataset.nav === 'home');
    });
}

// 打开工具链接
function openTool(url) {
    window.open(url, '_blank', 'noopener,noreferrer');
}

// 模态框功能
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal && modalOverlay) {
        modalOverlay.classList.add('show');
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';

        // 聚焦到模态框内的第一个可聚焦元素
        const focusable = modal.querySelector('input, button, select, textarea, a[href]');
        if (focusable) focusable.focus();
    }
}

function closeModal() {
    if (modalOverlay) {
        modalOverlay.classList.remove('show');
        document.querySelectorAll('.modal.show').forEach(modal => {
            modal.classList.remove('show');
        });
        document.body.style.overflow = '';
    }
}

function closeModalOnOverlay(event) {
    if (event.target === modalOverlay) {
        closeModal();
    }
}

function switchModal(modalId) {
    closeModal();
    setTimeout(() => openModal(modalId), 100);
}

// 公告栏功能
function closeAnnouncement() {
    const announcementBar = document.getElementById('announcementBar');
    if (announcementBar) {
        announcementBar.classList.add('hidden');
        localStorage.setItem('announcementClosed', 'true');
    }
}

// 搜索功能
function focusSearch() {
    if (searchInput) {
        searchInput.focus();
    }
}

function quickSearch(term) {
    if (searchInput) {
        searchInput.value = term;
        filterTools();
        searchInput.focus();
    }
}

function clearSearchHistory() {
    localStorage.removeItem('searchHistory');
    const historyList = document.getElementById('historyList');
    if (historyList) {
        historyList.innerHTML = '';
    }
    showToast('搜索历史已清空', 'success');
}

// 分类过滤
function filterByCategory(category, event) {
    if (event) event.preventDefault();
    currentCategory = category;

    // 更新分类标签状态
    categoryTabs.forEach(tab => {
        tab.classList.toggle('active', tab.dataset.category === category);
    });

    filterTools();
    scrollToTools();
}

// 标签过滤
function filterByTag(tag, event) {
    if (event) event.preventDefault();

    const filtered = toolsData.filter(tool => tool.tag === tag);
    renderTools(filtered);
    scrollToTools();
}

// 排序功能
function sortTools(sortType, event) {
    if (event) event.preventDefault();
    currentSort = sortType;

    // 更新排序按钮状态
    document.querySelectorAll('.sort-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.sort === sortType);
    });

    let sorted = [...toolsData];

    if (currentCategory !== 'all') {
        sorted = sorted.filter(tool => tool.category === currentCategory);
    }

    if (sortType === 'hot') {
        sorted.sort((a, b) => {
            const aHot = a.tag === 'hot' ? 1 : 0;
            const bHot = b.tag === 'hot' ? 1 : 0;
            return bHot - aHot;
        });
    } else if (sortType === 'new') {
        sorted.sort((a, b) => b.id - a.id);
    } else if (sortType === 'free') {
        sorted.sort((a, b) => {
            const aFree = a.tag === 'free' ? 1 : 0;
            const bFree = b.tag === 'free' ? 1 : 0;
            return bFree - aFree;
        });
    }

    renderTools(sorted);
}

// 加载更多
function loadMore() {
    showToast('已加载全部工具', 'success');
}

// 表单处理
function handleRegister(event) {
    event.preventDefault();
    showToast('注册成功！100积分已到账', 'success');
    closeModal();
}

function handleVipPurchase() {
    showToast('会员开通成功！', 'success');
    closeModal();
}

function handleSubmitTool(event) {
    event.preventDefault();
    showToast('提交成功！我们会尽快审核', 'success');
    closeModal();
}

function handleGetGuide(event) {
    event.preventDefault();
    showToast('教程已发送到您的邮箱', 'success');
    closeModal();
}

function sendCode(btn) {
    btn.disabled = true;
    let countdown = 60;
    const originalText = btn.textContent;

    const timer = setInterval(() => {
        btn.textContent = `${countdown}s`;
        countdown--;

        if (countdown < 0) {
            clearInterval(timer);
            btn.textContent = originalText;
            btn.disabled = false;
        }
    }, 1000);

    showToast('验证码已发送', 'success');
}

function selectPlan(element, planType) {
    document.querySelectorAll('.vip-plan').forEach(plan => {
        plan.classList.remove('selected');
    });
    element.classList.add('selected');
}

// 视频弹窗
function openVideoModal(event) {
    if (event) event.preventDefault();
    openModal('videoModal');
}

// 社交媒体链接
function openWeibo() {
    window.open('https://weibo.com', '_blank', 'noopener,noreferrer');
}

// Toast 提示
function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast-item ${type}`;
    toast.innerHTML = `
        <span class="toast-item-icon">${type === 'success' ? '✅' : '❌'}</span>
        <span class="toast-item-text">${message}</span>
        <button class="toast-item-close" onclick="this.parentElement.remove()">✕</button>
    `;

    container.appendChild(toast);

    // 3秒后自动移除
    setTimeout(() => {
        if (toast.parentElement) {
            toast.style.animation = 'slideOut 0.3s forwards';
            setTimeout(() => toast.remove(), 300);
        }
    }, 3000);
}

// 返回顶部
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 公告轮播
function initAnnouncementSlider() {
    const items = document.querySelectorAll('.announcement-item');
    if (items.length === 0) return;

    let currentIndex = 0;

    setInterval(() => {
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % items.length;
        items[currentIndex].classList.add('active');
    }, 5000);
}

// 热门榜单渲染
function renderHotList() {
    const hotList = document.getElementById('hotList');
    if (!hotList) return;

    const hotTools = toolsData
        .filter(tool => tool.tag === 'hot' || tool.visits)
        .sort((a, b) => {
            const aVisits = parseInt(a.visits) || 0;
            const bVisits = parseInt(b.visits) || 0;
            return bVisits - aVisits;
        })
        .slice(0, 5);

    hotList.innerHTML = hotTools.map((tool, index) => `
        <div class="hot-item" onclick="window.open('${tool.url}', '_blank')">
            <span class="hot-rank ${index < 3 ? 'rank-' + (index + 1) : ''}">${index + 1}</span>
            <div class="hot-info">
                <span class="hot-name">${tool.name}</span>
                <span class="hot-visits">${tool.visits || '0'}访问</span>
            </div>
            <span class="hot-trend ${index === 0 ? 'new' : 'up'}">${index === 0 ? 'NEW' : '↑'}</span>
        </div>
    `).join('');
}

// 更新分类计数
function updateCategoryCounts() {
    const counts = {
        all: toolsData.length,
        chat: toolsData.filter(t => t.category === 'chat').length,
        writing: toolsData.filter(t => t.category === 'writing').length,
        image: toolsData.filter(t => t.category === 'image').length,
        video: toolsData.filter(t => t.category === 'video').length,
        audio: toolsData.filter(t => t.category === 'audio').length,
        code: toolsData.filter(t => t.category === 'code').length,
        productivity: toolsData.filter(t => t.category === 'productivity').length,
        research: toolsData.filter(t => t.category === 'research').length,
        translate: toolsData.filter(t => t.category === 'translate').length,
        design: toolsData.filter(t => t.category === 'design').length,
        other: toolsData.filter(t => t.category === 'other').length
    };

    Object.keys(counts).forEach(key => {
        const countEl = document.getElementById(`count-${key}`);
        if (countEl) {
            countEl.textContent = counts[key];
        }
    });
}

// ==================== AI文章数据 ====================
const articlesData = [
    // 行业新闻类 (1-25)
    {
        id: 1,
        title: 'OpenAI发布GPT-4o：多模态AI助手迎来重大升级',
        excerpt: 'OpenAI最新发布的GPT-4o模型在语音、视觉、文本处理能力上实现重大突破，响应速度提升2倍，成本降低50%。',
        category: 'news',
        categoryName: '行业新闻',
        cover: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
        date: '2025-05-15',
        views: 12580,
        tags: ['GPT-4o', 'OpenAI', '多模态'],
        content: `
            <h2>GPT-4o：OpenAI的多模态革命</h2>
            <p>2025年5月，OpenAI正式发布了GPT-4o模型，这是该公司在多模态AI领域的又一重大突破。GPT-4o中的"o"代表"omni"（全能），意味着该模型能够无缝处理文本、音频和图像等多种输入形式。</p>

            <h3>核心优势</h3>
            <ul>
                <li><strong>响应速度提升2倍</strong>：GPT-4o的平均响应时间从GPT-4的2.8秒降至1.4秒</li>
                <li><strong>成本降低50%</strong>：API调用成本大幅下降，让更多开发者能够负担</li>
                <li><strong>实时语音交互</strong>：支持毫秒级响应的语音对话，体验接近真人</li>
                <li><strong>视觉理解增强</strong>：能够理解复杂图像、图表和视频内容</li>
            </ul>

            <h3>技术细节</h3>
            <p>GPT-4o采用了全新的端到端训练方法，将语音、视觉和文本统一在同一个模型中。这种架构使得模型能够更好地理解跨模态的上下文信息。</p>

            <blockquote>根据OpenAI官方数据，GPT-4o在语音识别准确率上达到97.8%，接近人类水平。</blockquote>

            <h3>应用场景</h3>
            <p>新模型在以下场景表现尤为出色：</p>
            <ul>
                <li>实时语音翻译和对话</li>
                <li>复杂图像分析和描述</li>
                <li>视频内容理解和总结</li>
                <li>多语言实时交互</li>
            </ul>

            <h3>市场影响</h3>
            <p>发布后，OpenAI股价上涨15%，市场对多模态AI的前景持续看好。分析师预测，GPT-4o将推动AI助手市场在2025年达到500亿美元规模。</p>
        `
    },
    {
        id: 2,
        title: 'Claude 3.5 Sonnet发布：编程能力超越GPT-4',
        excerpt: 'Anthropic推出Claude 3.5 Sonnet，在编程基准测试中首次超越GPT-4，成为开发者新宠。',
        category: 'news',
        categoryName: '行业新闻',
        cover: 'https://images.unsplash.com/photo-1676299081847-8c9b1ed3e6f7?w=800&q=80',
        date: '2025-05-12',
        views: 9870,
        tags: ['Claude', 'Anthropic', '编程AI'],
        content: `
            <h2>Claude 3.5 Sonnet：编程AI新王者</h2>
            <p>Anthropic公司发布的Claude 3.5 Sonnet模型在多项编程基准测试中首次超越GPT-4，标志着AI编程助手领域迎来新的竞争格局。</p>

            <h3>基准测试表现</h3>
            <ul>
                <li><strong>HumanEval</strong>：92.3%准确率（GPT-4为87.1%）</li>
                <li><strong>MBPP</strong>：89.7%准确率</li>
                <li><strong>SWE-bench</strong>：解决真实GitHub问题的能力提升40%</li>
            </ul>

            <h3>核心特性</h3>
            <p>Claude 3.5 Sonnet在以下方面表现突出：</p>
            <ul>
                <li>200K token超长上下文窗口</li>
                <li>更准确的代码生成和调试能力</li>
                <li>对复杂代码库的理解能力增强</li>
                <li>支持多种编程语言，包括Python、JavaScript、Go、Rust等</li>
            </ul>

            <h3>开发者反馈</h3>
            <blockquote>在Stack Overflow 2025开发者调查中，67%的开发者表示Claude 3.5 Sonnet帮助他们提高了30%以上的编码效率。</blockquote>

            <h3>定价策略</h3>
            <p>Anthropic采用更具竞争力的定价策略，每百万token输入价格仅为$3，输出价格为$15，比GPT-4便宜约30%。</p>
        `
    },
    {
        id: 3,
        title: 'Google Gemini 2.0发布：原生多模态能力领先',
        excerpt: 'Google发布Gemini 2.0，原生多模态架构使其在图像理解、视频分析等领域表现卓越。',
        category: 'news',
        categoryName: '行业新闻',
        cover: 'https://images.unsplash.com/photo-1684487747720-1ba29f9c0a01?w=800&q=80',
        date: '2025-05-10',
        views: 8540,
        tags: ['Gemini', 'Google', '多模态'],
        content: `
            <h2>Gemini 2.0：Google的AI反击战</h2>
            <p>Google DeepMind发布的Gemini 2.0模型，采用原生多模态架构设计，在图像理解、视频分析等任务上展现出领先优势。</p>

            <h3>技术架构</h3>
            <p>与GPT-4o的后期融合多模态不同，Gemini 2.0从设计之初就是多模态模型：</p>
            <ul>
                <li>统一的视觉-语言编码器</li>
                <li>原生支持任意分辨率图像输入</li>
                <li>视频帧级别的时序理解能力</li>
                <li>多语言原生支持（100+语言）</li>
            </ul>

            <h3>性能对比</h3>
            <p>在多模态基准测试MMMU中，Gemini 2.0达到86.4%的准确率，超越GPT-4o的83.7%。</p>

            <h3>企业应用</h3>
            <p>Gemini 2.0已深度集成到Google Workspace：</p>
            <ul>
                <li>Google Docs：智能写作助手</li>
                <li>Google Sheets：数据分析自动化</li>
                <li>Google Meet：实时会议摘要</li>
                <li>Google Photos：智能图片搜索</li>
            </ul>
        `
    },
    {
        id: 4,
        title: 'DeepSeek-V3开源：中国AI大模型新里程碑',
        excerpt: 'DeepSeek发布V3版本，6710亿参数模型完全开源，性能媲美GPT-4。',
        category: 'news',
        categoryName: '行业新闻',
        cover: 'https://images.unsplash.com/photo-1677442135703-1787eea3ce01?w=800&q=80',
        date: '2025-05-08',
        views: 11230,
        tags: ['DeepSeek', '开源', '国产AI'],
        content: `
            <h2>DeepSeek-V3：开源AI的新高度</h2>
            <p>深度求索公司发布的DeepSeek-V3模型，以6710亿参数的规模和完全开源的策略，成为中国AI大模型发展的重要里程碑。</p>

            <h3>模型规格</h3>
            <ul>
                <li><strong>参数规模</strong>：6710亿参数（激活370亿）</li>
                <li><strong>训练数据</strong>：14.8万亿token高质量数据</li>
                <li><strong>上下文长度</strong>：128K token</li>
                <li><strong>开源协议</strong>：MIT许可证，完全免费商用</li>
            </ul>

            <h3>性能表现</h3>
            <p>在多项基准测试中，DeepSeek-V3展现出与GPT-4相当的能力：</p>
            <ul>
                <li>MMLU：88.5%（GPT-4：86.4%）</li>
                <li>HumanEval：82.6%</li>
                <li>MATH：76.2%</li>
            </ul>

            <h3>行业影响</h3>
            <blockquote>DeepSeek-V3的开源将推动中国AI产业快速发展，预计将催生超过1000个基于该模型的创新应用。</blockquote>
        `
    },
    {
        id: 5,
        title: 'Midjourney V7发布：照片级真实感图像生成',
        excerpt: 'Midjourney V7带来革命性的真实感提升，人像生成几乎无法辨别真伪。',
        category: 'news',
        categoryName: '行业新闻',
        cover: 'https://images.unsplash.com/photo-1686191128892-3b37add4c844?w=800&q=80',
        date: '2025-05-05',
        views: 15680,
        tags: ['Midjourney', 'AI绘画', '图像生成'],
        content: `
            <h2>Midjourney V7：AI绘画进入照片时代</h2>
            <p>Midjourney V7的发布标志着AI图像生成进入了一个新纪元——生成的图像已经达到照片级别的真实感。</p>

            <h3>核心升级</h3>
            <ul>
                <li><strong>真实感提升</strong>：人像皮肤纹理、光影效果达到照片级别</li>
                <li><strong>文字渲染</strong>：首次支持准确的文字生成</li>
                <li><strong>一致性控制</strong>：角色一致性保持提升80%</li>
                <li><strong>速度优化</strong>：生成时间缩短至15秒</li>
            </ul>

            <h3>新功能</h3>
            <p>V7版本引入了多项创新功能：</p>
            <ul>
                <li>3D空间理解：准确生成透视和空间关系</li>
                <li>风格迁移：一键应用特定艺术风格</li>
                <li>局部编辑：精准修改图像特定区域</li>
                <li>视频生成：支持5秒短视频输出</li>
            </ul>

            <h3>伦理讨论</h3>
            <p>随着真实感提升，AI生成图像的伦理问题引发广泛讨论。Midjourney宣布将添加隐形水印和C2PA认证。</p>
        `
    },
    {
        id: 6,
        title: 'Sora正式公测：AI视频生成进入新时代',
        excerpt: 'OpenAI的Sora视频生成模型正式向公众开放，1分钟高清视频生成仅需等待2分钟。',
        category: 'news',
        categoryName: '行业新闻',
        cover: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80',
        date: '2025-05-03',
        views: 18920,
        tags: ['Sora', 'OpenAI', 'AI视频'],
        content: `
            <h2>Sora公测：AI视频创作的革命</h2>
            <p>经过数月的内测，OpenAI的Sora视频生成模型终于向公众开放，这标志着AI视频创作进入了一个全新的时代。</p>

            <h3>核心能力</h3>
            <ul>
                <li><strong>视频长度</strong>：最长支持60秒连续视频</li>
                <li><strong>分辨率</strong>：最高支持1080p输出</li>
                <li><strong>物理模拟</strong>：真实的光影和物理效果</li>
                <li><strong>角色一致性</strong>：视频中角色保持稳定</li>
            </ul>

            <h3>创作场景</h3>
            <p>Sora在以下领域展现出巨大潜力：</p>
            <ul>
                <li>广告和营销视频制作</li>
                <li>电影预览和概念设计</li>
                <li>教育内容可视化</li>
                <li>社交媒体内容创作</li>
            </ul>

            <h3>定价方案</h3>
            <p>OpenAI公布了Sora的订阅方案：</p>
            <ul>
                <li>基础版：$20/月，50个视频</li>
                <li>专业版：$50/月，200个视频</li>
                <li>企业版：定制方案</li>
            </ul>
        `
    },
    {
        id: 7,
        title: '字节跳动豆包大模型日活突破5000万',
        excerpt: '豆包大模型用户规模持续增长，成为国内最受欢迎的AI助手之一。',
        category: 'news',
        categoryName: '行业新闻',
        cover: 'https://images.unsplash.com/photo-1684487747720-1ba29f9c0a01?w=800&q=80',
        date: '2025-05-01',
        views: 7890,
        tags: ['豆包', '字节跳动', '国产AI'],
        content: `
            <h2>豆包：国民AI助手的崛起</h2>
            <p>字节跳动旗下的豆包大模型日活跃用户突破5000万，成为中国市场最受欢迎的AI助手产品之一。</p>

            <h3>成功因素分析</h3>
            <ul>
                <li><strong>免费策略</strong>：核心功能完全免费使用</li>
                <li><strong>场景丰富</strong>：覆盖学习、工作、生活等多个场景</li>
                <li><strong>体验优化</strong>：响应速度快，中文理解准确</li>
                <li><strong>生态整合</strong>：与抖音、飞书等产品深度整合</li>
            </ul>

            <h3>用户画像</h3>
            <p>数据显示，豆包用户主要分布在：</p>
            <ul>
                <li>学生群体：35%</li>
                <li>职场白领：40%</li>
                <li>自由职业者：15%</li>
                <li>其他：10%</li>
            </ul>
        `
    },
    {
        id: 8,
        title: 'AI编程助手Cursor完成B轮融资估值达40亿美元',
        excerpt: 'Cursor凭借出色的AI编程体验获得资本青睐，估值一年内增长10倍。',
        category: 'news',
        categoryName: '行业新闻',
        cover: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
        date: '2025-04-28',
        views: 6780,
        tags: ['Cursor', 'AI编程', '融资'],
        content: `
            <h2>Cursor：AI编程工具的明星独角兽</h2>
            <p>AI编程助手Cursor宣布完成B轮融资，估值达到40亿美元，成为AI开发者工具领域增长最快的公司之一。</p>

            <h3>产品优势</h3>
            <ul>
                <li><strong>代码补全</strong>：基于上下文的智能代码补全</li>
                <li><strong>代码解释</strong>：一键解释复杂代码逻辑</li>
                <li><strong>重构建议</strong>：自动提出代码优化建议</li>
                <li><strong>多语言支持</strong>：支持50+编程语言</li>
            </ul>

            <h3>用户增长</h3>
            <p>Cursor用户数据：</p>
            <ul>
                <li>月活开发者：超过200万</li>
                <li>付费用户：超过30万</li>
                <li>代码生成量：日均超过1亿行</li>
            </ul>
        `
    },
    {
        id: 9,
        title: 'Stable Diffusion 3开源：AI绘画进入新纪元',
        excerpt: 'Stability AI发布SD3开源版本，性能大幅提升，社区迎来创作热潮。',
        category: 'news',
        categoryName: '行业新闻',
        cover: 'https://images.unsplash.com/photo-1683009427666-736824f8009d?w=800&q=80',
        date: '2025-04-25',
        views: 12340,
        tags: ['Stable Diffusion', '开源', 'AI绘画'],
        content: `
            <h2>Stable Diffusion 3：开源AI绘画的新标杆</h2>
            <p>Stability AI正式开源Stable Diffusion 3，为AI绘画社区带来了性能更强、效果更好的开源选择。</p>

            <h3>技术升级</h3>
            <ul>
                <li><strong>模型架构</strong>：采用全新的DiT架构</li>
                <li><strong>文字理解</strong>：支持复杂文本描述解析</li>
                <li><strong>多主题生成</strong>：单张图像支持多个主体</li>
                <li><strong>分辨率提升</strong>：原生支持4K输出</li>
            </ul>

            <h3>开源影响</h3>
            <p>SD3开源后，社区迅速响应：</p>
            <ul>
                <li>首周下载量超过500万次</li>
                <li>衍生模型超过1000个</li>
                <li>教程和插件大量涌现</li>
            </ul>
        `
    },
    {
        id: 10,
        title: '苹果AI功能Apple Intelligence即将登陆中国',
        excerpt: '苹果宣布Apple Intelligence将在中国市场推出，与百度合作提供本地化服务。',
        category: 'news',
        categoryName: '行业新闻',
        cover: 'https://images.unsplash.com/photo-1611186871348-b77ce23c79cb?w=800&q=80',
        date: '2025-04-22',
        views: 9870,
        tags: ['Apple', 'Apple Intelligence', '端侧AI'],
        content: `
            <h2>Apple Intelligence：苹果AI的中国之路</h2>
            <p>苹果公司宣布其AI功能Apple Intelligence将在中国市场推出，并与百度达成合作，提供符合本地法规的AI服务。</p>

            <h3>核心功能</h3>
            <ul>
                <li><strong>写作助手</strong>：智能改写、摘要、校对</li>
                <li><strong>图像生成</strong>：Genmoji表情和图像创作</li>
                <li><strong>Siri升级</strong>：更智能的语音助手</li>
                <li><strong>照片管理</strong>：智能搜索和编辑</li>
            </ul>

            <h3>隐私保护</h3>
            <p>Apple Intelligence的核心优势在于端侧处理，用户数据不上传云端，保护隐私安全。</p>
        `
    },
    {
        id: 11,
        title: '微软Copilot全面升级：GPT-4o加持办公体验',
        excerpt: '微软将GPT-4o集成到Copilot中，Office办公套件迎来智能化革命。',
        category: 'news',
        categoryName: '行业新闻',
        cover: 'https://images.unsplash.com/photo-1633419461186-7d40c38de13d?w=800&q=80',
        date: '2025-04-20',
        views: 8650,
        tags: ['Copilot', '微软', '办公AI'],
        content: `
            <h2>Copilot + GPT-4o：办公AI的终极形态</h2>
            <p>微软宣布将GPT-4o集成到Copilot中，为Office办公套件带来革命性的AI体验升级。</p>

            <h3>功能升级</h3>
            <ul>
                <li><strong>Word</strong>：智能写作、格式化、引用生成</li>
                <li><strong>Excel</strong>：数据分析、图表生成、公式建议</li>
                <li><strong>PowerPoint</strong>：一键生成演示文稿</li>
                <li><strong>Outlook</strong>：邮件摘要、自动回复</li>
            </ul>

            <h3>企业采用</h3>
            <p>财富500强企业中，超过60%已部署Copilot，平均效率提升35%。</p>
        `
    },
    {
        id: 12,
        title: 'AI芯片市场爆发：英伟达市值突破3万亿美元',
        excerpt: 'AI算力需求持续增长，英伟达成为全球市值最高的芯片公司。',
        category: 'news',
        categoryName: '行业新闻',
        cover: 'https://images.unsplash.com/photo-1591488320449-0a704b629e4e?w=800&q=80',
        date: '2025-04-18',
        views: 7230,
        tags: ['英伟达', 'AI芯片', 'GPU'],
        content: `
            <h2>英伟达：AI时代的芯片霸主</h2>
            <p>受益于AI算力需求的爆发式增长，英伟达市值突破3万亿美元，成为全球市值最高的芯片公司。</p>

            <h3>产品线布局</h3>
            <ul>
                <li><strong>H100</strong>：数据中心主力，供不应求</li>
                <li><strong>H200</strong>：新一代旗舰产品</li>
                <li><strong>Blackwell</strong>：下一代架构，性能提升4倍</li>
                <li><strong>Jetson</strong>：边缘AI计算平台</li>
            </ul>

            <h3>市场预测</h3>
            <p>分析师预测，2025年AI芯片市场规模将达到1500亿美元，英伟达将占据80%以上的市场份额。</p>
        `
    },
    {
        id: 13,
        title: 'AI监管法案落地：欧盟AI法案正式生效',
        excerpt: '全球首部全面AI监管法规在欧盟生效，对高风险AI应用实施严格限制。',
        category: 'news',
        categoryName: '行业新闻',
        cover: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80',
        date: '2025-04-15',
        views: 5670,
        tags: ['AI监管', '欧盟', '政策'],
        content: `
            <h2>欧盟AI法案：AI监管的新时代</h2>
            <p>欧盟AI法案正式生效，这是全球首部全面的AI监管法规，将对全球AI产业产生深远影响。</p>

            <h3>监管框架</h3>
            <ul>
                <li><strong>禁止类</strong>：社会评分、实时人脸识别等</li>
                <li><strong>高风险</strong>：医疗、教育、招聘等领域AI</li>
                <li><strong>有限风险</strong>：聊天机器人、内容生成</li>
                <li><strong>最小风险</strong>：游戏、垃圾邮件过滤</li>
            </ul>

            <h3>企业应对</h3>
            <p>主要科技公司已开始调整产品策略以符合法规要求。</p>
        `
    },
    {
        id: 14,
        title: 'AI医疗诊断获FDA批准：首个AI癌症筛查系统上市',
        excerpt: 'AI辅助癌症诊断系统获得FDA批准，准确率超过人类医生。',
        category: 'news',
        categoryName: '行业新闻',
        cover: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
        date: '2025-04-12',
        views: 8901,
        tags: ['AI医疗', 'FDA', '癌症诊断'],
        content: `
            <h2>AI医疗：癌症诊断的新突破</h2>
            <p>首个AI辅助癌症诊断系统获得FDA批准上市，标志着AI医疗应用进入新阶段。</p>

            <h3>系统特点</h3>
            <ul>
                <li><strong>准确率</strong>：乳腺癌筛查准确率达96.5%</li>
                <li><strong>速度</strong>：分析时间从30分钟缩短至3分钟</li>
                <li><strong>覆盖范围</strong>：支持肺癌、乳腺癌、皮肤癌筛查</li>
                <li><strong>辅助决策</strong>：提供诊断建议和置信度</li>
            </ul>

            <h3>临床应用</h3>
            <p>预计该系统将在2025年底前覆盖美国500家医院。</p>
        `
    },
    {
        id: 15,
        title: '自动驾驶里程碑：Waymo无人出租车突破1000万次行程',
        excerpt: 'Waymo无人驾驶出租车服务规模持续扩大，安全记录优于人类驾驶。',
        category: 'news',
        categoryName: '行业新闻',
        cover: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80',
        date: '2025-04-10',
        views: 6780,
        tags: ['自动驾驶', 'Waymo', '无人车'],
        content: `
            <h2>Waymo：自动驾驶的商业化成功</h2>
            <p>Waymo无人驾驶出租车服务累计完成1000万次行程，证明自动驾驶技术的商业化可行性。</p>

            <h3>运营数据</h3>
            <ul>
                <li><strong>服务城市</strong>：旧金山、洛杉矶、凤凰城</li>
                <li><strong>车队规模</strong>：超过3000辆无人车</li>
                <li><strong>安全记录</strong>：事故率比人类驾驶低85%</li>
                <li><strong>用户满意度</strong>：4.8/5星评分</li>
            </ul>
        `
    },
    {
        id: 16,
        title: 'AI生成音乐引发版权争议：环球音乐起诉AI公司',
        excerpt: 'AI音乐生成技术引发版权纠纷，音乐行业与AI公司博弈加剧。',
        category: 'news',
        categoryName: '行业新闻',
        cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80',
        date: '2025-04-08',
        views: 7650,
        tags: ['AI音乐', '版权', '法律'],
        content: `
            <h2>AI音乐：版权之争</h2>
            <p>环球音乐集团起诉多家AI音乐生成公司，指控其使用受版权保护的音乐训练模型。</p>

            <h3>争议焦点</h3>
            <ul>
                <li>训练数据是否侵犯版权</li>
                <li>AI生成音乐的版权归属</li>
                <li>音乐人权益保护</li>
            </ul>
        `
    },
    {
        id: 17,
        title: 'AI教育应用爆发：全球AI教育市场规模达200亿美元',
        excerpt: 'AI正在重塑教育行业，个性化学习、智能辅导成为新趋势。',
        category: 'news',
        categoryName: '行业新闻',
        cover: 'https://images.unsplash.com/photo-1501504905253-8a154d4c6626?w=800&q=80',
        date: '2025-04-05',
        views: 8230,
        tags: ['AI教育', '在线学习', '个性化'],
        content: `
            <h2>AI教育：个性化学习的新时代</h2>
            <p>全球AI教育市场规模达到200亿美元，AI正在深刻改变教育行业。</p>

            <h3>应用场景</h3>
            <ul>
                <li><strong>个性化学习</strong>：AI根据学生能力定制学习路径</li>
                <li><strong>智能辅导</strong>：24/7在线答疑解惑</li>
                <li><strong>自动批改</strong>：作业和考试自动评分</li>
                <li><strong>语言学习</strong>：AI口语陪练</li>
            </ul>
        `
    },
    {
        id: 18,
        title: 'AI客服全面普及：80%企业已部署AI客服系统',
        excerpt: 'AI客服成为企业标配，客户满意度和效率双提升。',
        category: 'news',
        categoryName: '行业新闻',
        cover: 'https://images.unsplash.com/photo-1553877522-43269d4e9877?w=800&q=80',
        date: '2025-04-02',
        views: 5670,
        tags: ['AI客服', '企业服务', '自动化'],
        content: `
            <h2>AI客服：企业服务的新标准</h2>
            <p>调查显示，80%的企业已部署AI客服系统，平均客户满意度提升25%。</p>

            <h3>核心优势</h3>
            <ul>
                <li>24/7不间断服务</li>
                <li>响应时间缩短至秒级</li>
                <li>成本降低60%</li>
                <li>多语言支持</li>
            </ul>
        `
    },
    {
        id: 19,
        title: 'AI游戏NPC革命：英伟达ACE技术让NPC拥有智能对话',
        excerpt: 'AI驱动的游戏NPC能够进行自然对话，游戏体验迎来革命性升级。',
        category: 'news',
        categoryName: '行业新闻',
        cover: 'https://images.unsplash.com/photo-1538481033959-990748ee8e30?w=800&q=80',
        date: '2025-03-30',
        views: 9870,
        tags: ['AI游戏', '英伟达', 'NPC'],
        content: `
            <h2>AI NPC：游戏交互的新纪元</h2>
            <p>英伟达ACE技术让游戏NPC具备智能对话能力，玩家可以与NPC进行自然语言交互。</p>

            <h3>技术特点</h3>
            <ul>
                <li>实时语音识别和合成</li>
                <li>个性化对话风格</li>
                <li>记忆和情感系统</li>
                <li>动态任务生成</li>
            </ul>
        `
    },
    {
        id: 20,
        title: 'AI翻译突破：实时翻译准确率达到99%',
        excerpt: 'AI翻译技术取得重大突破，跨语言沟通障碍即将成为历史。',
        category: 'news',
        categoryName: '行业新闻',
        cover: 'https://images.unsplash.com/photo-1546410531-ce863a4f8b9d?w=800&q=80',
        date: '2025-03-28',
        views: 6540,
        tags: ['AI翻译', '语言', '沟通'],
        content: `
            <h2>AI翻译：语言障碍的终结者</h2>
            <p>最新AI翻译模型的准确率达到99%，实时翻译延迟低于100毫秒。</p>

            <h3>应用场景</h3>
            <ul>
                <li>国际会议实时翻译</li>
                <li>跨境电商客服</li>
                <li>旅游出行助手</li>
                <li>多语言内容创作</li>
            </ul>
        `
    },
    {
        id: 21,
        title: 'AI写作工具冲击内容创作行业：记者会被AI取代吗？',
        excerpt: 'AI写作能力持续提升，内容创作行业面临变革。',
        category: 'news',
        categoryName: '行业新闻',
        cover: 'https://images.unsplash.com/photo-1455390584762-9813c886e8c3?w=800&q=80',
        date: '2025-03-25',
        views: 11230,
        tags: ['AI写作', '内容创作', '媒体'],
        content: `
            <h2>AI写作：记者职业的挑战与机遇</h2>
            <p>AI写作工具的能力持续提升，引发了关于记者职业未来的讨论。</p>

            <h3>AI写作优势</h3>
            <ul>
                <li>快速生成初稿</li>
                <li>多语言内容创作</li>
                <li>数据新闻自动化</li>
                <li>SEO优化建议</li>
            </ul>

            <h3>人类记者价值</h3>
            <ul>
                <li>深度调查报道</li>
                <li>独家采访能力</li>
                <li>观点和评论</li>
                <li>伦理判断</li>
            </ul>
        `
    },
    {
        id: 22,
        title: 'AI虚拟人市场规模达100亿美元：数字人走进日常生活',
        excerpt: 'AI虚拟主播、虚拟客服、虚拟偶像应用广泛，市场规模快速增长。',
        category: 'news',
        categoryName: '行业新闻',
        cover: 'https://images.unsplash.com/photo-1485827404703-89b55fcc5950?w=800&q=80',
        date: '2025-03-22',
        views: 8760,
        tags: ['虚拟人', '数字人', 'AI主播'],
        content: `
            <h2>AI虚拟人：数字世界的新居民</h2>
            <p>AI虚拟人市场规模达到100亿美元，应用场景不断扩展。</p>

            <h3>主要应用</h3>
            <ul>
                <li><strong>虚拟主播</strong>：24/7直播带货</li>
                <li><strong>虚拟客服</strong>：银行、电商客服</li>
                <li><strong>虚拟偶像</strong>：音乐、娱乐产业</li>
                <li><strong>虚拟教师</strong>：在线教育</li>
            </ul>
        `
    },
    {
        id: 23,
        title: 'AI芯片竞争加剧：AMD、英特尔全力追赶英伟达',
        excerpt: 'AI芯片市场竞争白热化，AMD和英特尔推出新一代AI加速卡。',
        category: 'news',
        categoryName: '行业新闻',
        cover: 'https://images.unsplash.com/photo-1591799264318-7e6b820d8e82?w=800&q=80',
        date: '2025-03-20',
        views: 6540,
        tags: ['AI芯片', 'AMD', '英特尔'],
        content: `
            <h2>AI芯片大战：挑战者崛起</h2>
            <p>AMD和英特尔推出新一代AI加速卡，试图挑战英伟达的统治地位。</p>

            <h3>新产品对比</h3>
            <ul>
                <li><strong>AMD MI300X</strong>：192GB HBM3内存</li>
                <li><strong>Intel Gaudi3</strong>：性价比优势</li>
                <li><strong>英伟达H200</strong>：生态优势明显</li>
            </ul>
        `
    },
    {
        id: 24,
        title: 'AI安全引发关注：前沿AI模型风险评估成为焦点',
        excerpt: 'AI安全研究成为热点，专家呼吁加强对前沿AI模型的风险评估。',
        category: 'news',
        categoryName: '行业新闻',
        cover: 'https://images.unsplash.com/photo-1563986768609-322da4e0f935?w=800&q=80',
        date: '2025-03-18',
        views: 5430,
        tags: ['AI安全', '风险评估', '伦理'],
        content: `
            <h2>AI安全：不可忽视的议题</h2>
            <p>随着AI能力增强，安全问题引发广泛关注。</p>

            <h3>主要风险</h3>
            <ul>
                <li>AI被恶意利用</li>
                <li>虚假信息传播</li>
                <li>隐私泄露</li>
                <li>自动化攻击</li>
            </ul>
        `
    },
    {
        id: 25,
        title: 'AI投资热潮：2025年AI领域融资额突破1000亿美元',
        excerpt: '资本持续涌入AI领域，创业公司和巨头都在加大投入。',
        category: 'news',
        categoryName: '行业新闻',
        cover: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
        date: '2025-03-15',
        views: 7890,
        tags: ['AI投资', '融资', '资本市场'],
        content: `
            <h2>AI投资：资本的狂欢</h2>
            <p>2025年AI领域融资额突破1000亿美元，创历史新高。</p>

            <h3>投资热点</h3>
            <ul>
                <li>大模型基础设施</li>
                <li>AI应用层</li>
                <li>AI芯片</li>
                <li>AI安全</li>
            </ul>
        `
    },
    // 教程指南类 (26-55)
    {
        id: 26,
        title: 'ChatGPT完全使用指南：从入门到精通',
        excerpt: '全面介绍ChatGPT的使用技巧，帮助你充分发挥AI助手的能力。',
        category: 'tutorial',
        categoryName: '教程指南',
        cover: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
        date: '2025-05-14',
        views: 23450,
        tags: ['ChatGPT', '教程', '入门'],
        content: `
            <h2>ChatGPT使用完全指南</h2>
            <p>ChatGPT是目前最流行的AI助手，本指南将帮助你掌握其全部功能。</p>

            <h3>基础使用</h3>
            <ul>
                <li><strong>注册账号</strong>：访问chat.openai.com注册</li>
                <li><strong>选择模型</strong>：GPT-4o免费使用，GPT-4需要订阅</li>
                <li><strong>开始对话</strong>：直接输入问题即可</li>
            </ul>

            <h3>高级技巧</h3>
            <ul>
                <li><strong>提示词优化</strong>：明确、具体、有上下文</li>
                <li><strong>多轮对话</strong>：利用上下文进行深入讨论</li>
                <li><strong>文件上传</strong>：让AI分析文档、图片</li>
                <li><strong>自定义指令</strong>：设置个性化偏好</li>
            </ul>

            <h3>实用场景</h3>
            <ul>
                <li>写作辅助：文章、邮件、报告</li>
                <li>编程帮助：代码生成、调试、解释</li>
                <li>学习辅导：概念解释、题目解答</li>
                <li>创意生成：头脑风暴、创意写作</li>
            </ul>
        `
    },
    {
        id: 27,
        title: 'Midjourney绘画教程：从零开始学习AI绘画',
        excerpt: '手把手教你使用Midjourney创作惊艳的AI艺术作品。',
        category: 'tutorial',
        categoryName: '教程指南',
        cover: 'https://images.unsplash.com/photo-1686191128892-3b37add4c844?w=800&q=80',
        date: '2025-05-12',
        views: 18760,
        tags: ['Midjourney', 'AI绘画', '教程'],
        content: `
            <h2>Midjourney入门教程</h2>
            <p>Midjourney是目前最受欢迎的AI绘画工具之一，本教程将带你从零开始。</p>

            <h3>准备工作</h3>
            <ul>
                <li>注册Discord账号</li>
                <li>加入Midjourney服务器</li>
                <li>订阅会员计划（基础版$10/月起）</li>
            </ul>

            <h3>基础命令</h3>
            <ul>
                <li><strong>/imagine</strong>：生成图像的主命令</li>
                <li><strong>/describe</strong>：让AI描述图片</li>
                <li><strong>/blend</strong>：混合多张图片</li>
                <li><strong>/shorten</strong>：简化提示词</li>
            </ul>

            <h3>提示词技巧</h3>
            <p>好的提示词是成功的关键：</p>
            <ul>
                <li>主体描述：清晰描述你想要的内容</li>
                <li>风格指定：如"oil painting"、"anime style"</li>
                <li>参数控制：--ar 宽高比、--q 质量、--s 风格化程度</li>
            </ul>
        `
    },
    {
        id: 28,
        title: 'Claude使用技巧：如何获得最佳回答',
        excerpt: '掌握Claude的使用技巧，让AI助手更好地为你服务。',
        category: 'tutorial',
        categoryName: '教程指南',
        cover: 'https://images.unsplash.com/photo-1676299081847-8c9b1ed3e6f7?w=800&q=80',
        date: '2025-05-10',
        views: 12340,
        tags: ['Claude', '技巧', 'AI助手'],
        content: `
            <h2>Claude使用技巧指南</h2>
            <p>Claude以其长文本处理能力和安全性著称，以下技巧帮你发挥其最大价值。</p>

            <h3>核心优势</h3>
            <ul>
                <li>200K token超长上下文</li>
                <li>更安全的回答策略</li>
                <li>出色的代码能力</li>
                <li>文档分析能力强</li>
            </ul>

            <h3>最佳实践</h3>
            <ul>
                <li>上传大文档进行分析</li>
                <li>要求结构化输出</li>
                <li>使用Artifacts功能查看代码</li>
                <li>利用Projects组织工作</li>
            </ul>
        `
    },
    {
        id: 29,
        title: 'Stable Diffusion本地部署教程',
        excerpt: '详细讲解如何在本地电脑部署Stable Diffusion，实现免费AI绘画。',
        category: 'tutorial',
        categoryName: '教程指南',
        cover: 'https://images.unsplash.com/photo-1683009427666-736824f8009d?w=800&q=80',
        date: '2025-05-08',
        views: 15670,
        tags: ['Stable Diffusion', '本地部署', '开源'],
        content: `
            <h2>Stable Diffusion本地部署指南</h2>
            <p>在本地部署Stable Diffusion可以免费、无限制地使用AI绘画功能。</p>

            <h3>硬件要求</h3>
            <ul>
                <li><strong>GPU</strong>：NVIDIA显卡，8GB显存以上</li>
                <li><strong>内存</strong>：16GB以上</li>
                <li><strong>硬盘</strong>：50GB以上SSD空间</li>
            </ul>

            <h3>部署方式</h3>
            <ul>
                <li><strong>WebUI</strong>：最流行的图形界面</li>
                <li><strong>ComfyUI</strong>：节点式工作流</li>
                <li><strong>DiffusionBee</strong>：Mac用户首选</li>
            </ul>

            <h3>模型推荐</h3>
            <ul>
                <li>SDXL Base：高质量基础模型</li>
                <li>Realistic Vision：真实风格</li>
                <li>DreamShaper：通用模型</li>
            </ul>
        `
    },
    {
        id: 30,
        title: 'Cursor AI编程完全指南',
        excerpt: '学习如何使用Cursor提升编程效率，让AI成为你的编程搭档。',
        category: 'tutorial',
        categoryName: '教程指南',
        cover: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
        date: '2025-05-06',
        views: 14560,
        tags: ['Cursor', 'AI编程', '开发工具'],
        content: `
            <h2>Cursor AI编程指南</h2>
            <p>Cursor是专为开发者设计的AI编程助手，可以大幅提升编码效率。</p>

            <h3>核心功能</h3>
            <ul>
                <li><strong>代码补全</strong>：智能预测你的下一行代码</li>
                <li><strong>Chat</strong>：在编辑器内与AI对话</li>
                <li><strong>Composer</strong>：多文件编辑模式</li>
                <li><strong>代码解释</strong>：一键理解复杂代码</li>
            </ul>

            <h3>快捷键</h3>
            <ul>
                <li><strong>Cmd+K</strong>：行内编辑</li>
                <li><strong>Cmd+L</strong>：打开Chat</li>
                <li><strong>Cmd+I</strong>：Composer模式</li>
            </ul>
        `
    },
    {
        id: 31,
        title: 'Python AI编程入门教程',
        excerpt: '从零开始学习Python AI编程，掌握机器学习基础。',
        category: 'tutorial',
        categoryName: '教程指南',
        cover: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&q=80',
        date: '2025-05-04',
        views: 18920,
        tags: ['Python', '机器学习', '入门'],
        content: `
            <h2>Python AI编程入门</h2>
            <p>Python是AI开发的首选语言，本教程带你入门机器学习。</p>

            <h3>环境搭建</h3>
            <ul>
                <li>安装Anaconda或Miniconda</li>
                <li>创建虚拟环境</li>
                <li>安装核心库：numpy、pandas、scikit-learn</li>
            </ul>

            <h3>核心库介绍</h3>
            <ul>
                <li><strong>NumPy</strong>：数值计算基础</li>
                <li><strong>Pandas</strong>：数据处理分析</li>
                <li><strong>Scikit-learn</strong>：机器学习算法</li>
                <li><strong>PyTorch/TensorFlow</strong>：深度学习框架</li>
            </ul>
        `
    },
    {
        id: 32,
        title: 'Prompt Engineering：提示词工程完全指南',
        excerpt: '掌握提示词工程技巧，让AI输出更符合你的预期。',
        category: 'tutorial',
        categoryName: '教程指南',
        cover: 'https://images.unsplash.com/photo-1677442135703-1787eea3ce01?w=800&q=80',
        date: '2025-05-02',
        views: 21340,
        tags: ['Prompt', '提示词', '技巧'],
        content: `
            <h2>提示词工程指南</h2>
            <p>好的提示词是获得高质量AI输出的关键。</p>

            <h3>基本原则</h3>
            <ul>
                <li><strong>明确具体</strong>：清晰描述你的需求</li>
                <li><strong>提供上下文</strong>：给AI足够的背景信息</li>
                <li><strong>指定格式</strong>：说明你想要的输出格式</li>
                <li><strong>迭代优化</strong>：根据结果调整提示词</li>
            </ul>

            <h3>高级技巧</h3>
            <ul>
                <li>角色扮演：让AI扮演特定角色</li>
                <li>少样本学习：提供示例</li>
                <li>思维链：引导AI逐步思考</li>
                <li>结构化输出：要求JSON、表格等格式</li>
            </ul>
        `
    },
    {
        id: 33,
        title: 'AI绘画提示词大全：风格关键词汇总',
        excerpt: '收集整理AI绘画常用的风格提示词，助你创作各种风格的作品。',
        category: 'tutorial',
        categoryName: '教程指南',
        cover: 'https://images.unsplash.com/photo-1684487747720-1ba29f9c0a01?w=800&q=80',
        date: '2025-04-30',
        views: 25670,
        tags: ['AI绘画', '提示词', '风格'],
        content: `
            <h2>AI绘画风格提示词大全</h2>
            <p>不同风格的关键词可以帮你快速获得想要的视觉效果。</p>

            <h3>艺术风格</h3>
            <ul>
                <li><strong>油画</strong>：oil painting, impasto, thick brushstrokes</li>
                <li><strong>水彩</strong>：watercolor, soft edges, flowing</li>
                <li><strong>素描</strong>：pencil sketch, charcoal drawing</li>
                <li><strong>动漫</strong>：anime style, manga, cel shading</li>
            </ul>

            <h3>摄影风格</h3>
            <ul>
                <li><strong>人像</strong>：portrait, bokeh, studio lighting</li>
                <li><strong>风景</strong>：landscape, golden hour, HDR</li>
                <li><strong>微距</strong>：macro photography, shallow depth of field</li>
            </ul>
        `
    },
    {
        id: 34,
        title: 'GitHub Copilot使用教程',
        excerpt: '学习如何使用GitHub Copilot加速编程工作。',
        category: 'tutorial',
        categoryName: '教程指南',
        cover: 'https://images.unsplash.com/photo-1618401471353-b5e0b0b0c7e4?w=800&q=80',
        date: '2025-04-28',
        views: 13450,
        tags: ['Copilot', 'GitHub', '编程'],
        content: `
            <h2>GitHub Copilot使用指南</h2>
            <p>GitHub Copilot是最早的AI编程助手之一，深度集成到VS Code。</p>

            <h3>安装配置</h3>
            <ul>
                <li>在VS Code扩展商店安装Copilot</li>
                <li>登录GitHub账号授权</li>
                <li>选择订阅计划</li>
            </ul>

            <h3>使用技巧</h3>
            <ul>
                <li>编写注释让AI生成代码</li>
                <li>使用快捷键接受/拒绝建议</li>
                <li>Copilot Chat进行对话式编程</li>
            </ul>
        `
    },
    {
        id: 35,
        title: 'AI视频制作教程：从文字到视频',
        excerpt: '学习使用AI工具制作视频，从脚本到成片全流程。',
        category: 'tutorial',
        categoryName: '教程指南',
        cover: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80',
        date: '2025-04-26',
        views: 16780,
        tags: ['AI视频', '制作', '教程'],
        content: `
            <h2>AI视频制作全流程</h2>
            <p>AI工具正在改变视频制作方式，让普通人也能创作专业级视频。</p>

            <h3>工具推荐</h3>
            <ul>
                <li><strong>脚本</strong>：ChatGPT/Claude</li>
                <li><strong>视频生成</strong>：Sora、Runway、Pika</li>
                <li><strong>配音</strong>：ElevenLabs、Fish Audio</li>
                <li><strong>剪辑</strong>：CapCut AI、Descript</li>
            </ul>

            <h3>制作流程</h3>
            <ul>
                <li>用AI生成脚本</li>
                <li>生成或选择素材</li>
                <li>AI配音和配乐</li>
                <li>智能剪辑和调色</li>
            </ul>
        `
    },
    {
        id: 36,
        title: 'AI写作实战：如何用AI高效写作',
        excerpt: '掌握AI写作技巧，提升内容创作效率。',
        category: 'tutorial',
        categoryName: '教程指南',
        cover: 'https://images.unsplash.com/photo-1455390584762-9813c886e8c3?w=800&q=80',
        date: '2025-04-24',
        views: 14560,
        tags: ['AI写作', '内容创作', '效率'],
        content: `
            <h2>AI写作实战技巧</h2>
            <p>AI可以成为写作的得力助手，但不能完全替代人类创作。</p>

            <h3>最佳实践</h3>
            <ul>
                <li>用AI生成初稿和框架</li>
                <li>让AI帮助润色和修改</li>
                <li>AI辅助研究资料整理</li>
                <li>人工审核和添加观点</li>
            </ul>

            <h3>注意事项</h3>
            <ul>
                <li>核实AI生成的事实信息</li>
                <li>添加个人观点和风格</li>
                <li>避免过度依赖AI</li>
            </ul>
        `
    },
    {
        id: 37,
        title: 'AI翻译工具对比评测',
        excerpt: '对比主流AI翻译工具的优缺点，帮你选择合适的翻译助手。',
        category: 'tutorial',
        categoryName: '教程指南',
        cover: 'https://images.unsplash.com/photo-1546410531-ce863a4f8b9d?w=800&q=80',
        date: '2025-04-22',
        views: 9870,
        tags: ['AI翻译', '对比', '工具'],
        content: `
            <h2>AI翻译工具对比</h2>
            <p>选择合适的AI翻译工具可以大幅提升跨语言工作效率。</p>

            <h3>工具对比</h3>
            <ul>
                <li><strong>DeepL</strong>：翻译质量最高，支持文档翻译</li>
                <li><strong>Google翻译</strong>：免费、语言多、实时翻译</li>
                <li><strong>ChatGPT/Claude</strong>：理解上下文，适合专业翻译</li>
                <li><strong>有道翻译</strong>：中文翻译优化，免费使用</li>
            </ul>
        `
    },
    {
        id: 38,
        title: 'AI语音合成教程：让AI为你配音',
        excerpt: '学习使用AI语音合成工具，生成自然流畅的语音。',
        category: 'tutorial',
        categoryName: '教程指南',
        cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80',
        date: '2025-04-20',
        views: 11230,
        tags: ['AI语音', '配音', 'TTS'],
        content: `
            <h2>AI语音合成教程</h2>
            <p>AI语音合成技术已经非常成熟，可以生成接近真人的语音。</p>

            <h3>工具推荐</h3>
            <ul>
                <li><strong>ElevenLabs</strong>：最自然的语音合成</li>
                <li><strong>讯飞听见</strong>：中文语音优秀</li>
                <li><strong>Azure TTS</strong>：企业级解决方案</li>
                <li><strong>Edge TTS</strong>：免费好用</li>
            </ul>
        `
    },
    {
        id: 39,
        title: 'AI图像编辑教程：智能修图技巧',
        excerpt: '学习使用AI工具进行图像编辑，一键完成复杂修图。',
        category: 'tutorial',
        categoryName: '教程指南',
        cover: 'https://images.unsplash.com/photo-1683009427619-a0a04aef5e24?w=800&q=80',
        date: '2025-04-18',
        views: 13450,
        tags: ['AI修图', '图像编辑', '教程'],
        content: `
            <h2>AI图像编辑技巧</h2>
            <p>AI让图像编辑变得简单，普通人也能做出专业级修图效果。</p>

            <h3>常用功能</h3>
            <ul>
                <li><strong>背景移除</strong>：Remove.bg、Adobe Firefly</li>
                <li><strong>智能扩图</strong>：Photoshop Generative Fill</li>
                <li><strong>人像美化</strong>：美图秀秀AI、Lensa</li>
                <li><strong>老照片修复</strong>：Remini、Topaz Photo AI</li>
            </ul>
        `
    },
    {
        id: 40,
        title: 'AI数据分析教程：让AI帮你分析数据',
        excerpt: '学习使用AI工具进行数据分析，无需编程基础。',
        category: 'tutorial',
        categoryName: '教程指南',
        cover: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
        date: '2025-04-16',
        views: 12340,
        tags: ['数据分析', 'AI', '教程'],
        content: `
            <h2>AI数据分析入门</h2>
            <p>AI让数据分析变得触手可及，无需编程也能进行专业分析。</p>

            <h3>工具推荐</h3>
            <ul>
                <li><strong>ChatGPT Advanced Data Analysis</strong>：上传文件直接分析</li>
                <li><strong>Julius AI</strong>：可视化数据分析</li>
                <li><strong>Tableau AI</strong>：商业智能AI功能</li>
                <li><strong>Excel Copilot</strong>：Office内置AI</li>
            </ul>
        `
    },
    {
        id: 41,
        title: 'AI PPT制作教程：一键生成专业演示文稿',
        excerpt: '学习使用AI工具快速制作PPT，节省大量时间。',
        category: 'tutorial',
        categoryName: '教程指南',
        cover: 'https://images.unsplash.com/photo-1557804506-669a67965ba6?w=800&q=80',
        date: '2025-04-14',
        views: 16780,
        tags: ['AI PPT', '演示文稿', '效率'],
        content: `
            <h2>AI PPT制作指南</h2>
            <p>AI可以帮你快速生成专业的演示文稿，大幅提升工作效率。</p>

            <h3>工具推荐</h3>
            <ul>
                <li><strong>Gamma</strong>：AI原生PPT工具</li>
                <li><strong>Beautiful.ai</strong>：智能设计模板</li>
                <li><strong>Tome</strong>：故事化演示</li>
                <li><strong>Microsoft Copilot</strong>：PowerPoint AI功能</li>
            </ul>
        `
    },
    {
        id: 42,
        title: 'AI思维导图教程：智能整理思路',
        excerpt: '学习使用AI工具创建思维导图，高效整理和展示想法。',
        category: 'tutorial',
        categoryName: '教程指南',
        cover: 'https://images.unsplash.com/photo-1512758017274-2c9a0c6d8e0e?w=800&q=80',
        date: '2025-04-12',
        views: 9870,
        tags: ['思维导图', 'AI', '效率'],
        content: `
            <h2>AI思维导图教程</h2>
            <p>AI可以帮你快速创建结构清晰的思维导图。</p>

            <h3>工具推荐</h3>
            <ul>
                <li><strong>Xmind AI</strong>：一键生成思维导图</li>
                <li><strong>GitMind</strong>：免费AI思维导图</li>
                <li><strong>Boardmix</strong>：协作白板+AI</li>
            </ul>
        `
    },
    {
        id: 43,
        title: 'AI简历制作教程：打造吸睛简历',
        excerpt: '使用AI工具优化简历，提高求职成功率。',
        category: 'tutorial',
        categoryName: '教程指南',
        cover: 'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=800&q=80',
        date: '2025-04-10',
        views: 14560,
        tags: ['AI简历', '求职', '教程'],
        content: `
            <h2>AI简历制作指南</h2>
            <p>AI可以帮你优化简历内容，提高面试机会。</p>

            <h3>使用技巧</h3>
            <ul>
                <li>让AI优化简历措辞</li>
                <li>针对职位定制简历</li>
                <li>AI模拟面试练习</li>
            </ul>
        `
    },
    {
        id: 44,
        title: 'AI英语学习教程：智能语言学习',
        excerpt: '利用AI工具提升英语水平，个性化学习体验。',
        category: 'tutorial',
        categoryName: '教程指南',
        cover: 'https://images.unsplash.com/photo-1501504905253-8a154d4c6626?w=800&q=80',
        date: '2025-04-08',
        views: 12340,
        tags: ['AI学习', '英语', '语言'],
        content: `
            <h2>AI英语学习指南</h2>
            <p>AI为语言学习带来了革命性的变化。</p>

            <h3>学习方法</h3>
            <ul>
                <li>AI口语陪练：与ChatGPT对话练习</li>
                <li>AI写作批改：语法和表达优化</li>
                <li>AI词汇学习：个性化记忆曲线</li>
            </ul>
        `
    },
    {
        id: 45,
        title: 'AI代码审查教程：提升代码质量',
        excerpt: '学习使用AI进行代码审查，发现潜在问题。',
        category: 'tutorial',
        categoryName: '教程指南',
        cover: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
        date: '2025-04-06',
        views: 8760,
        tags: ['代码审查', 'AI', '编程'],
        content: `
            <h2>AI代码审查指南</h2>
            <p>AI可以帮助发现代码中的潜在问题，提升代码质量。</p>

            <h3>工具推荐</h3>
            <ul>
                <li><strong>GitHub Copilot</strong>：实时代码建议</li>
                <li><strong>SonarQube AI</strong>：代码质量分析</li>
                <li><strong>CodeRabbit</strong>：AI代码审查工具</li>
            </ul>
        `
    },
    {
        id: 46,
        title: 'AI API调用教程：接入AI能力',
        excerpt: '学习如何调用OpenAI、Claude等AI API。',
        category: 'tutorial',
        categoryName: '教程指南',
        cover: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
        date: '2025-04-04',
        views: 15670,
        tags: ['API', '开发', '集成'],
        content: `
            <h2>AI API调用入门</h2>
            <p>学习调用AI API，将AI能力集成到你的应用中。</p>

            <h3>主要API</h3>
            <ul>
                <li><strong>OpenAI API</strong>：GPT系列模型</li>
                <li><strong>Anthropic API</strong>：Claude模型</li>
                <li><strong>Google AI</strong>：Gemini模型</li>
            </ul>
        `
    },
    {
        id: 47,
        title: 'AI聊天机器人搭建教程',
        excerpt: '从零搭建一个AI聊天机器人，应用于客服、咨询等场景。',
        category: 'tutorial',
        categoryName: '教程指南',
        cover: 'https://images.unsplash.com/photo-1531746790731-6c087f14b4c2?w=800&q=80',
        date: '2025-04-02',
        views: 13450,
        tags: ['聊天机器人', 'AI', '开发'],
        content: `
            <h2>AI聊天机器人搭建</h2>
            <p>搭建一个AI聊天机器人比你想象的更简单。</p>

            <h3>平台选择</h3>
            <ul>
                <li><strong>OpenAI Assistants API</strong>：快速集成</li>
                <li><strong>Dify</strong>：无代码平台</li>
                <li><strong>Coze</strong>：字节跳动AI平台</li>
            </ul>
        `
    },
    {
        id: 48,
        title: 'AI知识库搭建教程',
        excerpt: '学习搭建企业AI知识库，让AI基于你的数据回答问题。',
        category: 'tutorial',
        categoryName: '教程指南',
        cover: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80',
        date: '2025-03-30',
        views: 11230,
        tags: ['知识库', 'RAG', '企业AI'],
        content: `
            <h2>AI知识库搭建指南</h2>
            <p>RAG技术让AI能够基于你的私有数据回答问题。</p>

            <h3>技术架构</h3>
            <ul>
                <li>文档处理和分块</li>
                <li>向量化存储</li>
                <li>检索和生成</li>
            </ul>
        `
    },
    {
        id: 49,
        title: 'AI自动化工作流教程',
        excerpt: '学习使用AI自动化工具，提升工作效率。',
        category: 'tutorial',
        categoryName: '教程指南',
        cover: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
        date: '2025-03-28',
        views: 9870,
        tags: ['自动化', '工作流', '效率'],
        content: `
            <h2>AI自动化工作流</h2>
            <p>AI自动化可以帮你处理重复性工作。</p>

            <h3>工具推荐</h3>
            <ul>
                <li><strong>Zapier AI</strong>：无代码自动化</li>
                <li><strong>Make</strong>：复杂工作流</li>
                <li><strong>n8n</strong>：开源自动化平台</li>
            </ul>
        `
    },
    {
        id: 50,
        title: 'AI社交媒体运营教程',
        excerpt: '利用AI工具提升社交媒体运营效率。',
        category: 'tutorial',
        categoryName: '教程指南',
        cover: 'https://images.unsplash.com/photo-1611162617474-5b21e879e7d1?w=800&q=80',
        date: '2025-03-26',
        views: 12340,
        tags: ['社交媒体', 'AI', '运营'],
        content: `
            <h2>AI社交媒体运营</h2>
            <p>AI可以帮你高效管理社交媒体。</p>

            <h3>应用场景</h3>
            <ul>
                <li>内容创作和排期</li>
                <li>评论自动回复</li>
                <li>数据分析报告</li>
            </ul>
        `
    },
    // 产品评测类 (51-75)
    {
        id: 51,
        title: 'ChatGPT vs Claude vs Gemini：三大AI助手深度对比',
        excerpt: '全面对比三大AI助手的能力、价格、适用场景。',
        category: 'review',
        categoryName: '产品评测',
        cover: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
        date: '2025-05-13',
        views: 34560,
        tags: ['对比', 'ChatGPT', 'Claude', 'Gemini'],
        content: `
            <h2>三大AI助手深度对比</h2>
            <p>ChatGPT、Claude和Gemini是目前最强大的三大AI助手，各有优势。</p>

            <h3>能力对比</h3>
            <table>
                <tr><th>项目</th><th>ChatGPT</th><th>Claude</th><th>Gemini</th></tr>
                <tr><td>对话能力</td><td>⭐⭐⭐⭐⭐</td><td>⭐⭐⭐⭐⭐</td><td>⭐⭐⭐⭐</td></tr>
                <tr><td>代码能力</td><td>⭐⭐⭐⭐</td><td>⭐⭐⭐⭐⭐</td><td>⭐⭐⭐⭐</td></tr>
                <tr><td>长文本</td><td>⭐⭐⭐</td><td>⭐⭐⭐⭐⭐</td><td>⭐⭐⭐⭐</td></tr>
                <tr><td>多模态</td><td>⭐⭐⭐⭐⭐</td><td>⭐⭐⭐⭐</td><td>⭐⭐⭐⭐⭐</td></tr>
            </table>

            <h3>价格对比</h3>
            <ul>
                <li><strong>ChatGPT</strong>：免费版可用，Plus $20/月</li>
                <li><strong>Claude</strong>：免费版可用，Pro $20/月</li>
                <li><strong>Gemini</strong>：免费版可用，Advanced $20/月</li>
            </ul>
        `
    },
    {
        id: 52,
        title: 'Midjourney vs DALL-E 3 vs Stable Diffusion：AI绘画工具对比',
        excerpt: '三大AI绘画工具全面对比，帮你选择最适合的工具。',
        category: 'review',
        categoryName: '产品评测',
        cover: 'https://images.unsplash.com/photo-1686191128892-3b37add4c844?w=800&q=80',
        date: '2025-05-11',
        views: 28760,
        tags: ['AI绘画', '对比', '评测'],
        content: `
            <h2>AI绘画工具对比</h2>
            <p>三大主流AI绘画工具各有特点，选择适合自己的最重要。</p>

            <h3>特点对比</h3>
            <ul>
                <li><strong>Midjourney</strong>：艺术感最强，付费使用</li>
                <li><strong>DALL-E 3</strong>：文字理解最好，ChatGPT集成</li>
                <li><strong>Stable Diffusion</strong>：开源免费，可本地部署</li>
            </ul>
        `
    },
    {
        id: 53,
        title: 'AI编程助手横评：Cursor vs Copilot vs Codeium',
        excerpt: '对比三大AI编程助手的功能和体验。',
        category: 'review',
        categoryName: '产品评测',
        cover: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
        date: '2025-05-09',
        views: 19870,
        tags: ['AI编程', '对比', '评测'],
        content: `
            <h2>AI编程助手对比</h2>
            <p>AI编程助手已成为开发者的标配工具。</p>

            <h3>对比结果</h3>
            <ul>
                <li><strong>Cursor</strong>：体验最佳，深度集成</li>
                <li><strong>Copilot</strong>：生态完善，VS Code原生</li>
                <li><strong>Codeium</strong>：免费好用，多IDE支持</li>
            </ul>
        `
    },
    {
        id: 54,
        title: 'AI视频生成工具评测：Sora vs Runway vs Pika',
        excerpt: 'AI视频生成工具对比，哪个更适合你？',
        category: 'review',
        categoryName: '产品评测',
        cover: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80',
        date: '2025-05-07',
        views: 16780,
        tags: ['AI视频', '对比', '评测'],
        content: `
            <h2>AI视频生成工具对比</h2>
            <p>AI视频生成正在快速发展，各工具各有优势。</p>

            <h3>能力对比</h3>
            <ul>
                <li><strong>Sora</strong>：质量最高，60秒视频</li>
                <li><strong>Runway</strong>：功能丰富，Gen-3很强</li>
                <li><strong>Pika</strong>：易用性好，性价比高</li>
            </ul>
        `
    },
    {
        id: 55,
        title: '国产AI大模型评测：DeepSeek vs 豆包 vs 文心一言',
        excerpt: '国产AI大模型能力对比，谁更胜一筹？',
        category: 'review',
        categoryName: '产品评测',
        cover: 'https://images.unsplash.com/photo-1677442135703-1787eea3ce01?w=800&q=80',
        date: '2025-05-05',
        views: 21340,
        tags: ['国产AI', '对比', '评测'],
        content: `
            <h2>国产AI大模型对比</h2>
            <p>国产AI大模型进步显著，各有特色。</p>

            <h3>特点分析</h3>
            <ul>
                <li><strong>DeepSeek</strong>：开源最强，编程能力突出</li>
                <li><strong>豆包</strong>：用户最多，免费好用</li>
                <li><strong>文心一言</strong>：百度生态，搜索整合</li>
            </ul>
        `
    },
    {
        id: 56,
        title: 'AI语音合成工具评测：ElevenLabs vs 讯飞听见',
        excerpt: '对比主流AI语音合成工具的语音质量。',
        category: 'review',
        categoryName: '产品评测',
        cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80',
        date: '2025-05-03',
        views: 12340,
        tags: ['AI语音', '对比', '评测'],
        content: `
            <h2>AI语音合成对比</h2>
            <p>AI语音合成已接近真人水平。</p>

            <h3>对比结果</h3>
            <ul>
                <li><strong>ElevenLabs</strong>：最自然，多语言</li>
                <li><strong>讯飞听见</strong>：中文最佳</li>
            </ul>
        `
    },
    {
        id: 57,
        title: 'AI翻译工具评测：DeepL vs Google vs ChatGPT',
        excerpt: '对比AI翻译工具的翻译质量。',
        category: 'review',
        categoryName: '产品评测',
        cover: 'https://images.unsplash.com/photo-1546410531-ce863a4f8b9d?w=800&q=80',
        date: '2025-05-01',
        views: 14560,
        tags: ['AI翻译', '对比', '评测'],
        content: `
            <h2>AI翻译工具对比</h2>
            <p>选择合适的翻译工具很重要。</p>

            <h3>推荐场景</h3>
            <ul>
                <li><strong>DeepL</strong>：专业文档翻译</li>
                <li><strong>Google</strong>：日常快速翻译</li>
                <li><strong>ChatGPT</strong>：需要上下文理解的翻译</li>
            </ul>
        `
    },
    {
        id: 58,
        title: 'AI PPT工具评测：Gamma vs Tome vs Beautiful.ai',
        excerpt: 'AI PPT工具对比，哪个更好用？',
        category: 'review',
        categoryName: '产品评测',
        cover: 'https://images.unsplash.com/photo-1557804506-669a67965ba6?w=800&q=80',
        date: '2025-04-29',
        views: 13450,
        tags: ['AI PPT', '对比', '评测'],
        content: `
            <h2>AI PPT工具对比</h2>
            <p>AI让PPT制作变得简单。</p>

            <h3>推荐</h3>
            <ul>
                <li><strong>Gamma</strong>：最推荐，功能全面</li>
                <li><strong>Tome</strong>：故事化演示</li>
                <li><strong>Beautiful.ai</strong>：设计模板丰富</li>
            </ul>
        `
    },
    {
        id: 59,
        title: 'AI写作工具评测：Jasper vs Copy.ai vs ChatGPT',
        excerpt: 'AI写作工具对比评测。',
        category: 'review',
        categoryName: '产品评测',
        cover: 'https://images.unsplash.com/photo-1455390584762-9813c886e8c3?w=800&q=80',
        date: '2025-04-27',
        views: 11230,
        tags: ['AI写作', '对比', '评测'],
        content: `
            <h2>AI写作工具对比</h2>
            <p>AI写作工具各有侧重。</p>

            <h3>特点</h3>
            <ul>
                <li><strong>Jasper</strong>：营销文案专业</li>
                <li><strong>Copy.ai</strong>：快速生成</li>
                <li><strong>ChatGPT</strong>：通用性强</li>
            </ul>
        `
    },
    {
        id: 60,
        title: 'AI图像编辑工具评测：Adobe Firefly vs Canva AI',
        excerpt: 'AI图像编辑工具对比。',
        category: 'review',
        categoryName: '产品评测',
        cover: 'https://images.unsplash.com/photo-1683009427619-a0a04aef5e24?w=800&q=80',
        date: '2025-04-25',
        views: 9870,
        tags: ['AI修图', '对比', '评测'],
        content: `
            <h2>AI图像编辑对比</h2>
            <p>AI让图像编辑更简单。</p>

            <h3>推荐</h3>
            <ul>
                <li><strong>Adobe Firefly</strong>：专业级</li>
                <li><strong>Canva AI</strong>：易用性好</li>
            </ul>
        `
    },
    {
        id: 61,
        title: 'AI客服平台评测：对比主流AI客服解决方案',
        excerpt: 'AI客服平台功能对比。',
        category: 'review',
        categoryName: '产品评测',
        cover: 'https://images.unsplash.com/photo-1553877522-43269d4e9877?w=800&q=80',
        date: '2025-04-23',
        views: 8760,
        tags: ['AI客服', '对比', '评测'],
        content: `
            <h2>AI客服平台对比</h2>
            <p>AI客服已成为企业标配。</p>

            <h3>平台推荐</h3>
            <ul>
                <li><strong>Intercom AI</strong>：功能全面</li>
                <li><strong>Zendesk AI</strong>：企业级</li>
                <li><strong>智齿科技</strong>：国产选择</li>
            </ul>
        `
    },
    {
        id: 62,
        title: 'AI学习平台评测：Coursera AI vs Udacity AI',
        excerpt: 'AI学习平台对比评测。',
        category: 'review',
        categoryName: '产品评测',
        cover: 'https://images.unsplash.com/photo-1501504905253-8a154d4c6626?w=800&q=80',
        date: '2025-04-21',
        views: 7650,
        tags: ['AI学习', '对比', '评测'],
        content: `
            <h2>AI学习平台对比</h2>
            <p>在线学习平台纷纷加入AI功能。</p>

            <h3>特点</h3>
            <ul>
                <li><strong>Coursera AI</strong>：个性化推荐</li>
                <li><strong>Udacity AI</strong>：AI课程丰富</li>
            </ul>
        `
    },
    {
        id: 63,
        title: 'AI笔记工具评测：Notion AI vs Obsidian AI',
        excerpt: 'AI笔记工具对比。',
        category: 'review',
        categoryName: '产品评测',
        cover: 'https://images.unsplash.com/photo-1512758017274-2c9a0c6d8e0e?w=800&q=80',
        date: '2025-04-19',
        views: 12340,
        tags: ['AI笔记', '对比', '评测'],
        content: `
            <h2>AI笔记工具对比</h2>
            <p>AI让笔记更智能。</p>

            <h3>推荐</h3>
            <ul>
                <li><strong>Notion AI</strong>：功能全面</li>
                <li><strong>Obsidian AI</strong>：本地优先</li>
            </ul>
        `
    },
    {
        id: 64,
        title: 'AI会议工具评测：Zoom AI vs Teams Copilot',
        excerpt: 'AI会议工具对比。',
        category: 'review',
        categoryName: '产品评测',
        cover: 'https://images.unsplash.com/photo-1557804506-669a67965ba6?w=800&q=80',
        date: '2025-04-17',
        views: 9870,
        tags: ['AI会议', '对比', '评测'],
        content: `
            <h2>AI会议工具对比</h2>
            <p>AI让会议更高效。</p>

            <h3>功能对比</h3>
            <ul>
                <li><strong>Zoom AI</strong>：摘要、翻译</li>
                <li><strong>Teams Copilot</strong>：深度Office整合</li>
            </ul>
        `
    },
    {
        id: 65,
        title: 'AI邮件工具评测：对比主流AI邮件助手',
        excerpt: 'AI邮件工具对比评测。',
        category: 'review',
        categoryName: '产品评测',
        cover: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&q=80',
        date: '2025-04-15',
        views: 8760,
        tags: ['AI邮件', '对比', '评测'],
        content: `
            <h2>AI邮件工具对比</h2>
            <p>AI帮你高效处理邮件。</p>

            <h3>推荐</h3>
            <ul>
                <li><strong>Gmail AI</strong>：免费好用</li>
                <li><strong>Outlook Copilot</strong>：企业级</li>
            </ul>
        `
    },
    // 趋势分析类 (76-100)
    {
        id: 66,
        title: '2025年AI行业十大趋势预测',
        excerpt: '深度分析2025年AI行业发展趋势。',
        category: 'trend',
        categoryName: '趋势分析',
        cover: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
        date: '2025-05-14',
        views: 28760,
        tags: ['AI趋势', '2025', '预测'],
        content: `
            <h2>2025年AI趋势预测</h2>
            <p>2025年将是AI应用爆发的一年。</p>

            <h3>十大趋势</h3>
            <ol>
                <li>多模态AI成为标配</li>
                <li>AI Agent自主能力增强</li>
                <li>端侧AI快速发展</li>
                <li>AI视频生成成熟</li>
                <li>AI编程助手普及</li>
                <li>AI监管框架完善</li>
                <li>企业AI应用深化</li>
                <li>AI芯片竞争加剧</li>
                <li>开源AI生态繁荣</li>
                <li>AI安全成为焦点</li>
            </ol>
        `
    },
    {
        id: 67,
        title: 'AI Agent：下一代AI应用形态',
        excerpt: 'AI Agent将改变我们与AI交互的方式。',
        category: 'trend',
        categoryName: '趋势分析',
        cover: 'https://images.unsplash.com/photo-1677442135703-1787eea3ce01?w=800&q=80',
        date: '2025-05-12',
        views: 21340,
        tags: ['AI Agent', '趋势', '未来'],
        content: `
            <h2>AI Agent：AI的下一站</h2>
            <p>AI Agent是能够自主完成复杂任务的AI系统。</p>

            <h3>核心能力</h3>
            <ul>
                <li>自主规划和执行</li>
                <li>工具调用能力</li>
                <li>记忆和学习</li>
                <li>多Agent协作</li>
            </ul>
        `
    },
    {
        id: 68,
        title: '端侧AI：AI计算的新范式',
        excerpt: '端侧AI正在崛起，隐私和效率兼得。',
        category: 'trend',
        categoryName: '趋势分析',
        cover: 'https://images.unsplash.com/photo-1611186871348-b77ce23c79cb?w=800&q=80',
        date: '2025-05-10',
        views: 16780,
        tags: ['端侧AI', '趋势', '隐私'],
        content: `
            <h2>端侧AI的崛起</h2>
            <p>端侧AI让AI计算在本地设备完成，保护隐私。</p>

            <h3>优势</h3>
            <ul>
                <li>隐私保护</li>
                <li>低延迟</li>
                <li>离线可用</li>
                <li>成本降低</li>
            </ul>
        `
    },
    {
        id: 69,
        title: 'AI芯片市场格局分析',
        excerpt: 'AI芯片市场竞争格局深度分析。',
        category: 'trend',
        categoryName: '趋势分析',
        cover: 'https://images.unsplash.com/photo-1591488320449-0a704b629e4e?w=800&q=80',
        date: '2025-05-08',
        views: 14560,
        tags: ['AI芯片', '市场', '分析'],
        content: `
            <h2>AI芯片市场格局</h2>
            <p>AI芯片市场正在经历激烈竞争。</p>

            <h3>主要玩家</h3>
            <ul>
                <li><strong>英伟达</strong>：市场领导者</li>
                <li><strong>AMD</strong>：挑战者</li>
                <li><strong>英特尔</strong>：追赶者</li>
                <li><strong>苹果/谷歌</strong>：自研芯片</li>
            </ul>
        `
    },
    {
        id: 70,
        title: 'AI就业市场分析：机遇与挑战',
        excerpt: 'AI对就业市场的影响分析。',
        category: 'trend',
        categoryName: '趋势分析',
        cover: 'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=800&q=80',
        date: '2025-05-06',
        views: 19870,
        tags: ['AI就业', '趋势', '分析'],
        content: `
            <h2>AI与就业</h2>
            <p>AI正在重塑就业市场。</p>

            <h3>受影响行业</h3>
            <ul>
                <li>客服：高度自动化</li>
                <li>翻译：部分替代</li>
                <li>写作：辅助增强</li>
                <li>编程：效率提升</li>
            </ul>
        `
    },
    {
        id: 71,
        title: 'AI投资趋势：资本看好哪些方向',
        excerpt: 'AI领域投资趋势分析。',
        category: 'trend',
        categoryName: '趋势分析',
        cover: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
        date: '2025-05-04',
        views: 12340,
        tags: ['AI投资', '资本', '趋势'],
        content: `
            <h2>AI投资趋势</h2>
            <p>资本持续涌入AI领域。</p>

            <h3>热门赛道</h3>
            <ul>
                <li>大模型基础设施</li>
                <li>AI应用层</li>
                <li>AI芯片</li>
                <li>AI安全</li>
            </ul>
        `
    },
    {
        id: 72,
        title: 'AI监管趋势：全球政策走向',
        excerpt: '全球AI监管政策趋势分析。',
        category: 'trend',
        categoryName: '趋势分析',
        cover: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80',
        date: '2025-05-02',
        views: 9870,
        tags: ['AI监管', '政策', '趋势'],
        content: `
            <h2>AI监管趋势</h2>
            <p>各国正在加快AI监管立法。</p>

            <h3>主要法规</h3>
            <ul>
                <li>欧盟AI法案</li>
                <li>美国AI行政令</li>
                <li>中国AI管理办法</li>
            </ul>
        `
    },
    {
        id: 73,
        title: 'AI开源生态发展趋势',
        excerpt: 'AI开源生态正在快速发展。',
        category: 'trend',
        categoryName: '趋势分析',
        cover: 'https://images.unsplash.com/photo-1683009427666-736824f8009d?w=800&q=80',
        date: '2025-04-30',
        views: 11230,
        tags: ['开源', 'AI生态', '趋势'],
        content: `
            <h2>AI开源生态</h2>
            <p>开源AI正在改变行业格局。</p>

            <h3>重要项目</h3>
            <ul>
                <li>DeepSeek开源</li>
                <li>Llama系列</li>
                <li>Stable Diffusion</li>
            </ul>
        `
    },
    {
        id: 74,
        title: 'AI教育变革趋势',
        excerpt: 'AI正在改变教育行业。',
        category: 'trend',
        categoryName: '趋势分析',
        cover: 'https://images.unsplash.com/photo-1501504905253-8a154d4c6626?w=800&q=80',
        date: '2025-04-28',
        views: 13450,
        tags: ['AI教育', '变革', '趋势'],
        content: `
            <h2>AI教育变革</h2>
            <p>AI正在重塑教育方式。</p>

            <h3>变化趋势</h3>
            <ul>
                <li>个性化学习</li>
                <li>智能辅导</li>
                <li>自动评估</li>
            </ul>
        `
    },
    {
        id: 75,
        title: 'AI医疗应用前景分析',
        excerpt: 'AI在医疗领域的应用前景。',
        category: 'trend',
        categoryName: '趋势分析',
        cover: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
        date: '2025-04-26',
        views: 15670,
        tags: ['AI医疗', '前景', '分析'],
        content: `
            <h2>AI医疗前景</h2>
            <p>AI在医疗领域潜力巨大。</p>

            <h3>应用方向</h3>
            <ul>
                <li>影像诊断</li>
                <li>药物研发</li>
                <li>个性化治疗</li>
            </ul>
        `
    },
    {
        id: 76,
        title: 'AI与创意产业：机遇与挑战',
        excerpt: 'AI对创意产业的影响分析。',
        category: 'trend',
        categoryName: '趋势分析',
        cover: 'https://images.unsplash.com/photo-1686191128892-3b37add4c844?w=800&q=80',
        date: '2025-04-24',
        views: 12340,
        tags: ['AI创意', '产业', '分析'],
        content: `
            <h2>AI与创意产业</h2>
            <p>AI正在改变创意产业。</p>

            <h3>影响分析</h3>
            <ul>
                <li>设计效率提升</li>
                <li>创作门槛降低</li>
                <li>版权问题凸显</li>
            </ul>
        `
    },
    {
        id: 77,
        title: 'AI自动驾驶发展现状与展望',
        excerpt: '自动驾驶技术发展现状分析。',
        category: 'trend',
        categoryName: '趋势分析',
        cover: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80',
        date: '2025-04-22',
        views: 14560,
        tags: ['自动驾驶', 'AI', '趋势'],
        content: `
            <h2>自动驾驶现状</h2>
            <p>自动驾驶正在走向商业化。</p>

            <h3>进展</h3>
            <ul>
                <li>L4级别运营</li>
                <li>Robotaxi服务</li>
                <li>法规完善</li>
            </ul>
        `
    },
    {
        id: 78,
        title: 'AI安全研究前沿',
        excerpt: 'AI安全研究最新进展。',
        category: 'trend',
        categoryName: '趋势分析',
        cover: 'https://images.unsplash.com/photo-1563986768609-322da4e0f935?w=800&q=80',
        date: '2025-04-20',
        views: 9870,
        tags: ['AI安全', '研究', '前沿'],
        content: `
            <h2>AI安全前沿</h2>
            <p>AI安全研究日益重要。</p>

            <h3>研究方向</h3>
            <ul>
                <li>对齐问题</li>
                <li>可解释性</li>
                <li>鲁棒性</li>
            </ul>
        `
    },
    {
        id: 79,
        title: 'AI与物联网融合趋势',
        excerpt: 'AI与IoT融合创造新价值。',
        category: 'trend',
        categoryName: '趋势分析',
        cover: 'https://images.unsplash.com/photo-1558346490-a72e53c2d3f1?w=800&q=80',
        date: '2025-04-18',
        views: 8760,
        tags: ['AIoT', '物联网', '趋势'],
        content: `
            <h2>AI与IoT融合</h2>
            <p>AI让物联网更智能。</p>

            <h3>应用场景</h3>
            <ul>
                <li>智能家居</li>
                <li>工业物联网</li>
                <li>智慧城市</li>
            </ul>
        `
    },
    {
        id: 80,
        title: 'AI机器人产业发展趋势',
        excerpt: 'AI机器人产业发展分析。',
        category: 'trend',
        categoryName: '趋势分析',
        cover: 'https://images.unsplash.com/photo-1485827404703-89b55fcc5950?w=800&q=80',
        date: '2025-04-16',
        views: 11230,
        tags: ['AI机器人', '产业', '趋势'],
        content: `
            <h2>AI机器人产业</h2>
            <p>AI让机器人更智能。</p>

            <h3>发展方向</h3>
            <ul>
                <li>人形机器人</li>
                <li>服务机器人</li>
                <li>工业机器人</li>
            </ul>
        `
    },
    {
        id: 81,
        title: 'AI语音技术发展趋势',
        excerpt: 'AI语音技术发展分析。',
        category: 'trend',
        categoryName: '趋势分析',
        cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80',
        date: '2025-04-14',
        views: 9870,
        tags: ['AI语音', '技术', '趋势'],
        content: `
            <h2>AI语音技术</h2>
            <p>AI语音技术日趋成熟。</p>

            <h3>进展</h3>
            <ul>
                <li>语音合成接近真人</li>
                <li>实时翻译</li>
                <li>情感识别</li>
            </ul>
        `
    },
    {
        id: 82,
        title: 'AI电商应用趋势',
        excerpt: 'AI在电商领域的应用趋势。',
        category: 'trend',
        categoryName: '趋势分析',
        cover: 'https://images.unsplash.com/photo-1556742049-0cf7542e8e1e?w=800&q=80',
        date: '2025-04-12',
        views: 12340,
        tags: ['AI电商', '应用', '趋势'],
        content: `
            <h2>AI电商应用</h2>
            <p>AI正在改变电商体验。</p>

            <h3>应用场景</h3>
            <ul>
                <li>个性化推荐</li>
                <li>智能客服</li>
                <li>商品图片生成</li>
            </ul>
        `
    },
    {
        id: 83,
        title: 'AI金融科技发展趋势',
        excerpt: 'AI在金融领域的应用趋势。',
        category: 'trend',
        categoryName: '趋势分析',
        cover: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
        date: '2025-04-10',
        views: 13450,
        tags: ['AI金融', '科技', '趋势'],
        content: `
            <h2>AI金融科技</h2>
            <p>AI正在改变金融行业。</p>

            <h3>应用</h3>
            <ul>
                <li>智能投顾</li>
                <li>风控模型</li>
                <li>反欺诈</li>
            </ul>
        `
    },
    {
        id: 84,
        title: 'AI内容创作趋势分析',
        excerpt: 'AI内容创作发展趋势。',
        category: 'trend',
        categoryName: '趋势分析',
        cover: 'https://images.unsplash.com/photo-1455390584762-9813c886e8c3?w=800&q=80',
        date: '2025-04-08',
        views: 15670,
        tags: ['AI创作', '内容', '趋势'],
        content: `
            <h2>AI内容创作</h2>
            <p>AI正在改变内容创作方式。</p>

            <h3>趋势</h3>
            <ul>
                <li>AI辅助创作普及</li>
                <li>多模态内容生成</li>
                <li>个性化内容</li>
            </ul>
        `
    },
    {
        id: 85,
        title: 'AI企业应用成熟度分析',
        excerpt: '企业AI应用成熟度评估。',
        category: 'trend',
        categoryName: '趋势分析',
        cover: 'https://images.unsplash.com/photo-1557804506-669a67965ba6?w=800&q=80',
        date: '2025-04-06',
        views: 11230,
        tags: ['企业AI', '应用', '成熟度'],
        content: `
            <h2>企业AI应用成熟度</h2>
            <p>企业AI应用正在深化。</p>

            <h3>阶段</h3>
            <ul>
                <li>试点阶段</li>
                <li>扩展阶段</li>
                <li>成熟阶段</li>
            </ul>
        `
    },
    {
        id: 86,
        title: 'AI算力需求趋势分析',
        excerpt: 'AI算力需求增长趋势。',
        category: 'trend',
        categoryName: '趋势分析',
        cover: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
        date: '2025-04-04',
        views: 9870,
        tags: ['AI算力', '需求', '趋势'],
        content: `
            <h2>AI算力需求</h2>
            <p>AI算力需求持续增长。</p>

            <h3>预测</h3>
            <ul>
                <li>2025年增长100%</li>
                <li>数据中心扩容</li>
                <li>绿色计算需求</li>
            </ul>
        `
    },
    {
        id: 87,
        title: 'AI多模态发展趋势',
        excerpt: '多模态AI发展趋势分析。',
        category: 'trend',
        categoryName: '趋势分析',
        cover: 'https://images.unsplash.com/photo-1684487747720-1ba29f9c0a01?w=800&q=80',
        date: '2025-04-02',
        views: 14560,
        tags: ['多模态', 'AI', '趋势'],
        content: `
            <h2>多模态AI趋势</h2>
            <p>多模态AI成为主流。</p>

            <h3>发展方向</h3>
            <ul>
                <li>统一模型架构</li>
                <li>跨模态理解增强</li>
                <li>实时交互能力</li>
            </ul>
        `
    },
    {
        id: 88,
        title: 'AI伦理研究进展',
        excerpt: 'AI伦理研究最新进展。',
        category: 'trend',
        categoryName: '趋势分析',
        cover: 'https://images.unsplash.com/photo-1563986768609-322da4e0f935?w=800&q=80',
        date: '2025-03-30',
        views: 8760,
        tags: ['AI伦理', '研究', '进展'],
        content: `
            <h2>AI伦理研究</h2>
            <p>AI伦理研究日益重要。</p>

            <h3>焦点</h3>
            <ul>
                <li>公平性</li>
                <li>透明度</li>
                <li>责任归属</li>
            </ul>
        `
    },
    {
        id: 89,
        title: 'AI人才培养趋势',
        excerpt: 'AI人才市场发展趋势。',
        category: 'trend',
        categoryName: '趋势分析',
        cover: 'https://images.unsplash.com/photo-1501504905253-8a154d4c6626?w=800&q=80',
        date: '2025-03-28',
        views: 12340,
        tags: ['AI人才', '培养', '趋势'],
        content: `
            <h2>AI人才培养</h2>
            <p>AI人才需求持续旺盛。</p>

            <h3>需求方向</h3>
            <ul>
                <li>算法工程师</li>
                <li>AI产品经理</li>
                <li>AI运维工程师</li>
            </ul>
        `
    },
    {
        id: 90,
        title: 'AI云服务发展趋势',
        excerpt: 'AI云服务市场发展趋势。',
        category: 'trend',
        categoryName: '趋势分析',
        cover: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
        date: '2025-03-26',
        views: 9870,
        tags: ['AI云服务', '市场', '趋势'],
        content: `
            <h2>AI云服务趋势</h2>
            <p>AI云服务市场快速增长。</p>

            <h3>主要玩家</h3>
            <ul>
                <li>AWS Bedrock</li>
                <li>Azure AI</li>
                <li>Google Cloud AI</li>
            </ul>
        `
    },
    {
        id: 91,
        title: 'AI低代码平台发展趋势',
        excerpt: 'AI低代码平台发展分析。',
        category: 'trend',
        categoryName: '趋势分析',
        cover: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
        date: '2025-03-24',
        views: 11230,
        tags: ['低代码', 'AI', '趋势'],
        content: `
            <h2>AI低代码平台</h2>
            <p>AI让开发更简单。</p>

            <h3>趋势</h3>
            <ul>
                <li>自然语言编程</li>
                <li>智能代码生成</li>
                <li>可视化开发</li>
            </ul>
        `
    },
    {
        id: 92,
        title: 'AI数据标注行业趋势',
        excerpt: 'AI数据标注行业发展趋势。',
        category: 'trend',
        categoryName: '趋势分析',
        cover: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
        date: '2025-03-22',
        views: 8760,
        tags: ['数据标注', 'AI', '趋势'],
        content: `
            <h2>数据标注行业</h2>
            <p>数据标注正在智能化。</p>

            <h3>变化</h3>
            <ul>
                <li>自动标注比例提升</li>
                <li>质量要求提高</li>
                <li>专业领域标注增长</li>
            </ul>
        `
    },
    {
        id: 93,
        title: 'AI模型压缩技术趋势',
        excerpt: 'AI模型压缩技术发展。',
        category: 'trend',
        categoryName: '趋势分析',
        cover: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
        date: '2025-03-20',
        views: 7650,
        tags: ['模型压缩', 'AI', '技术'],
        content: `
            <h2>模型压缩技术</h2>
            <p>模型压缩让AI更轻量。</p>

            <h3>方法</h3>
            <ul>
                <li>量化</li>
                <li>剪枝</li>
                <li>蒸馏</li>
            </ul>
        `
    },
    {
        id: 94,
        title: 'AI边缘计算趋势',
        excerpt: 'AI边缘计算发展趋势。',
        category: 'trend',
        categoryName: '趋势分析',
        cover: 'https://images.unsplash.com/photo-1558346490-a72e53c2d3f1?w=800&q=80',
        date: '2025-03-18',
        views: 9870,
        tags: ['边缘计算', 'AI', '趋势'],
        content: `
            <h2>AI边缘计算</h2>
            <p>边缘AI正在崛起。</p>

            <h3>应用</h3>
            <ul>
                <li>智能制造</li>
                <li>智慧零售</li>
                <li>自动驾驶</li>
            </ul>
        `
    },
    {
        id: 95,
        title: 'AI可解释性研究趋势',
        excerpt: 'AI可解释性研究进展。',
        category: 'trend',
        categoryName: '趋势分析',
        cover: 'https://images.unsplash.com/photo-1563986768609-322da4e0f935?w=800&q=80',
        date: '2025-03-16',
        views: 8760,
        tags: ['可解释性', 'AI', '研究'],
        content: `
            <h2>AI可解释性</h2>
            <p>可解释AI越来越重要。</p>

            <h3>方法</h3>
            <ul>
                <li>注意力可视化</li>
                <li>特征归因</li>
                <li>概念激活</li>
            </ul>
        `
    },
    {
        id: 96,
        title: 'AI元宇宙融合趋势',
        excerpt: 'AI与元宇宙融合发展趋势。',
        category: 'trend',
        categoryName: '趋势分析',
        cover: 'https://images.unsplash.com/photo-1686191128892-3b37add4c844?w=800&q=80',
        date: '2025-03-14',
        views: 12340,
        tags: ['元宇宙', 'AI', '趋势'],
        content: `
            <h2>AI与元宇宙</h2>
            <p>AI是元宇宙的核心技术。</p>

            <h3>应用</h3>
            <ul>
                <li>虚拟人生成</li>
                <li>场景生成</li>
                <li>智能交互</li>
            </ul>
        `
    },
    {
        id: 97,
        title: 'AI网络安全应用趋势',
        excerpt: 'AI在网络安全领域的应用。',
        category: 'trend',
        categoryName: '趋势分析',
        cover: 'https://images.unsplash.com/photo-1563986768609-322da4e0f935?w=800&q=80',
        date: '2025-03-12',
        views: 9870,
        tags: ['网络安全', 'AI', '应用'],
        content: `
            <h2>AI网络安全</h2>
            <p>AI正在改变网络安全。</p>

            <h3>应用</h3>
            <ul>
                <li>威胁检测</li>
                <li>异常识别</li>
                <li>自动响应</li>
            </ul>
        `
    },
    {
        id: 98,
        title: 'AI供应链优化趋势',
        excerpt: 'AI在供应链优化中的应用。',
        category: 'trend',
        categoryName: '趋势分析',
        cover: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
        date: '2025-03-10',
        views: 8760,
        tags: ['供应链', 'AI', '优化'],
        content: `
            <h2>AI供应链优化</h2>
            <p>AI让供应链更智能。</p>

            <h3>应用</h3>
            <ul>
                <li>需求预测</li>
                <li>库存优化</li>
                <li>路径规划</li>
            </ul>
        `
    },
    {
        id: 99,
        title: 'AI可持续发展趋势',
        excerpt: 'AI助力可持续发展。',
        category: 'trend',
        categoryName: '趋势分析',
        cover: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac29?w=800&q=80',
        date: '2025-03-08',
        views: 11230,
        tags: ['可持续发展', 'AI', '绿色'],
        content: `
            <h2>AI与可持续发展</h2>
            <p>AI助力实现可持续发展目标。</p>

            <h3>应用</h3>
            <ul>
                <li>能源优化</li>
                <li>气候预测</li>
                <li>资源管理</li>
            </ul>
        `
    },
    {
        id: 100,
        title: 'AI未来十年展望',
        excerpt: 'AI未来十年发展展望。',
        category: 'trend',
        categoryName: '趋势分析',
        cover: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
        date: '2025-03-06',
        views: 18760,
        tags: ['AI未来', '展望', '十年'],
        content: `
            <h2>AI未来十年展望</h2>
            <p>未来十年AI将深刻改变世界。</p>

            <h3>预测</h3>
            <ul>
                <li>AGI可能实现</li>
                <li>AI无处不在</li>
                <li>人机协作成为常态</li>
                <li>AI监管体系完善</li>
                <li>AI伦理成为共识</li>
            </ul>
        `
    }
];

// 文章相关变量
let currentArticlePage = 1;
const articlesPerPage = 12;
let currentArticleFilter = 'all';

// 渲染文章列表
function renderArticles() {
    const grid = document.getElementById('articlesGrid');
    if (!grid) return;

    let filteredArticles = articlesData;
    if (currentArticleFilter !== 'all') {
        filteredArticles = articlesData.filter(a => a.category === currentArticleFilter);
    }

    const startIndex = (currentArticlePage - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    const displayArticles = filteredArticles.slice(startIndex, endIndex);

    grid.innerHTML = displayArticles.map(article => `
        <article class="article-card" onclick="openArticleDetail(${article.id})">
            <div class="article-cover">
                <img src="${article.cover}" alt="${article.title}" loading="lazy">
                <span class="article-category-badge">${article.categoryName}</span>
            </div>
            <div class="article-content">
                <h3 class="article-title">${article.title}</h3>
                <p class="article-excerpt">${article.excerpt}</p>
                <div class="article-meta">
                    <div class="article-meta-left">
                        <span class="article-date">📅 ${article.date}</span>
                        <span class="article-views">👁 ${formatViews(article.views)}</span>
                    </div>
                </div>
            </div>
        </article>
    `).join('');

    // 渲染分页
    renderArticlesPagination(filteredArticles.length);
}

// 渲染文章分页
function renderArticlesPagination(total) {
    const pagination = document.getElementById('articlesPagination');
    if (!pagination) return;

    const totalPages = Math.ceil(total / articlesPerPage);

    let html = '';

    // 上一页
    html += `<button class="page-btn" onclick="goToArticlePage(${currentArticlePage - 1})" ${currentArticlePage === 1 ? 'disabled' : ''}>上一页</button>`;

    // 页码
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentArticlePage - 2 && i <= currentArticlePage + 2)) {
            html += `<button class="page-btn ${i === currentArticlePage ? 'active' : ''}" onclick="goToArticlePage(${i})">${i}</button>`;
        } else if (i === currentArticlePage - 3 || i === currentArticlePage + 3) {
            html += `<span style="color: var(--text-muted);">...</span>`;
        }
    }

    // 下一页
    html += `<button class="page-btn" onclick="goToArticlePage(${currentArticlePage + 1})" ${currentArticlePage === totalPages ? 'disabled' : ''}>下一页</button>`;

    pagination.innerHTML = html;
}

// 跳转到文章页面
function goToArticlePage(page) {
    currentArticlePage = page;
    renderArticles();
    document.getElementById('articlesGrid').scrollIntoView({ behavior: 'smooth' });
}

// 筛选文章
function filterArticles(filter) {
    currentArticleFilter = filter;
    currentArticlePage = 1;

    // 更新按钮状态
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === filter);
    });

    renderArticles();
}

// 打开文章详情
function openArticleDetail(id) {
    const article = articlesData.find(a => a.id === id);
    if (!article) return;

    const modal = document.getElementById('articleDetailModal');

    document.getElementById('articleDetailCategory').textContent = article.categoryName;
    document.getElementById('articleDetailDate').textContent = `📅 ${article.date}`;
    document.getElementById('articleDetailViews').textContent = `👁 ${formatViews(article.views)}次阅读`;
    document.getElementById('articleDetailTitle').textContent = article.title;
    document.getElementById('articleDetailCover').innerHTML = `<img src="${article.cover}" alt="${article.title}">`;
    document.getElementById('articleDetailBody').innerHTML = article.content;
    document.getElementById('articleDetailTags').innerHTML = article.tags.map(tag => `<span class="article-tag">#${tag}</span>`).join('');

    // 相关文章
    const relatedArticles = articlesData
        .filter(a => a.id !== id && a.category === article.category)
        .slice(0, 4);

    document.getElementById('relatedArticles').innerHTML = relatedArticles.map(a => `
        <div class="related-item" onclick="openArticleDetail(${a.id})">
            <img src="${a.cover}" alt="${a.title}">
            <div class="related-item-content">
                <h4>${a.title}</h4>
                <span>${a.date}</span>
            </div>
        </div>
    `).join('');

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// 关闭文章详情
function closeArticleDetail() {
    const modal = document.getElementById('articleDetailModal');
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

// 分享文章
function shareArticle(platform) {
    const url = window.location.href;
    const title = document.getElementById('articleDetailTitle').textContent;

    let shareUrl = '';
    switch (platform) {
        case 'weibo':
            shareUrl = `https://service.weibo.com/share/share.php?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
            break;
        case 'wechat':
            showToast('请截图分享到微信');
            return;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
            break;
    }

    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
    }
}

// 格式化阅读数
function formatViews(views) {
    if (views >= 10000) {
        return (views / 10000).toFixed(1) + '万';
    }
    return views.toString();
}
