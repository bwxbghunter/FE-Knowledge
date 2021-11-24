module.exports = {
    title: '娜个小部点的前端总结~',
    description: '前端知识点总结',
    base: '/javascript/',
    themeConfig: {
        nav: [
          { text: 'Javascript', link: '/javascript/theory' },
          { text: 'NodeJs', link: '/nodejs/test1' },
          { text: 'Http', link: '/http/' },
        ],
        sidebar: {
            '/javascript/': [
                {
                    title: 'JavaScript学习',
                    children: [ 'theory', 'handwritten']
                }
            ],
            '/nodejs/': [
                {
                    title: 'NodeJs学习',
                    sidebarDepth: 2,
                    children: [ 'test1', 'test2']
                }
            ],
            '/http/': [
                ''
            ]
        }
    }
}