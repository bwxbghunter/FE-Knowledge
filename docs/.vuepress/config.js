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
                    children: [ 
                        'theory',
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
                                '/javascript/handwritten/category24'
                            ]
                        }
                    ]
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