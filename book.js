module.exports = {
    "title": "个人笔记",
    "author": "ChenxiWong",
    "description": "文档",
    "keywords": "学习,笔记,编程,代码,博客,文章,github",
    "introduction": {
        "path": "README.md",
        "title": "导航首页",
    },
    "variables": {
        "themeColor": "#3884ff",
        "themeLou": {
            // 顶部导航栏配置
            "nav": [
                {
                    "target": "_blank", // 跳转方式: 打开新页面
                    "url": "https://www.baidu.com",  // 跳转页面
                    "name": "百度"  // 导航名称
                }
            ]
        }
    },
    "plugins": [
        "highlight",
        "-lunr",
        "sharing",
        "-livereload",
        "chapter-fold",
        "sitemap",
        "theme-lou",
        "back-to-top-button",
        "code",
        "prism",
        "search-pro",
        "-search"
    ],
    "pluginsConfig": {
        "chapter-fold": {},
        "theme-lou": {
            "color": "#5F9EA0", // 主题色
            "favicon": "static/zhuque.jpg", // favicon图标
            "logo": "static/zhuque.jpg", // 顶部左侧图标
            "forbidCopy": false, // 页面是否禁止复制
            "search-placeholder": "全局搜索", // 搜索框默认文本
            "book-summary-title": "导航", // 目录标题
            "book-anchor-title": "本章目录标题", // 本章目录标题
            "hide-elements": [".summary .gitbook-link"],
            "imgStyle": {
                "isCenter": true, // 是否居中(默认为true)
                "isBox": false, // 是否有边框(默认为true)
                "otherStyle": 'max-width: 80%;', // 图片其他自定义CSS样式
            }
        },
        "sitemap": {
            "hostname": "https://chenxiwong.github.io/gitbook"
        },
        "prism": {
            "css": [
                "prismjs/themes/prism-okaidia.css"
            ],
            "lang": {
                "flow": "typescript"
            }
        }
    },
    "pdf":
        {
            "toc":
                true,
            "pageNumbers":
                true,
            "fontSize":
                12,
            "paperSize":
                "a4",
            "margin":
                {
                    "right":
                        62,
                    "left":
                        62,
                    "top":
                        36,
                    "bottom":
                        36
                }
        }
}
;
