module.exports = {
    title: '娜个小部的前端总结~',
    description: '前端知识点总结',
    base: '/',
    themeConfig: {
        nav: [
          { text: 'Javascript', link: '/javascript/theory/1' },
          { text: 'NodeJs', link: '/nodejs/1' },
          { text: 'Http', link: '/http/' },
          { text: 'Vue', link: '/vue/1' },
          { text: 'webpack', link: '/webpack/1' },
        ],
        sidebar: {
            '/javascript/': [
                {
                    title: 'JavaScript学习',
                    children: [ 
                        {
                            title: '理论知识',
                            path: '/javascript/theory/1',
                            children: [
                                '/javascript/theory/1',
                                '/javascript/theory/2',
                                '/javascript/theory/3',
                            ]
                        },
                        {
                            title: '手写题',
                            path: '/javascript/handwritten/',
                            children: [
                                '/javascript/handwritten/category1',
                                '/javascript/handwritten/category2',
                                '/javascript/handwritten/category3',
                                '/javascript/handwritten/category4',
                                '/javascript/handwritten/category5',
                                '/javascript/handwritten/category6',
                                '/javascript/handwritten/category7',
                                '/javascript/handwritten/category8',
                                '/javascript/handwritten/category9',
                                '/javascript/handwritten/category10',
                                '/javascript/handwritten/category11',
                                '/javascript/handwritten/category12',
                                '/javascript/handwritten/category13',
                                '/javascript/handwritten/category14',
                                '/javascript/handwritten/category15',
                                '/javascript/handwritten/category16',
                                '/javascript/handwritten/category17',
                                '/javascript/handwritten/category18',
                                '/javascript/handwritten/category19',
                                '/javascript/handwritten/category20',
                                '/javascript/handwritten/category21',
                                '/javascript/handwritten/category22',
                                '/javascript/handwritten/category23',
                                '/javascript/handwritten/category24',
                                '/javascript/handwritten/category25',
                                '/javascript/handwritten/category26'
                            ]
                        }
                    ]
                }
            ],
            '/nodejs/': [
                {
                    title: 'NodeJs学习',
                    sidebarDepth: 2,
                    children: [ '1', 'test2']
                }
            ],
            '/vue/': [
                '/vue/1',
                '/vue/2',
                '/vue/3'
            ],
            '/http/': [
                ''
            ],
            '/webpack/': [
                '/webpack/1',
                '/webpack/2',
                '/webpack/3',
                '/webpack/4',
                '/webpack/5',
                '/webpack/6',
            ]
        }
    }
}