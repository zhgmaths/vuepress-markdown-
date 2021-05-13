module.exports = {
	title: "贵哥讲高中数学",
	descrition: "我的个人博客",
	themeConfig: {
		nav: [{
				text: '首页',
				link: '/'
			},

			{
				text: '高考',
				link: '/数学/'
			},

			{
				text: '百度',
				link: 'https://baidu.com'
			},
		],
		sidebar: {
			"/数学/": ["", "公式"],
		}
	},
	plugins: [
		[
			'vuepress-plugin-mathjax',
			{
				target: 'svg',
				macros: {
					'*': '\\times',
				},
			},
		],
	],
}
