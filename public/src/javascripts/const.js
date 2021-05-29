let nav = [
  {
    name:'文章',
    link:'/main/essayTimeList',
    icon:'essay'
  },
  {
    name:'新建',
    link:'/edit',
    icon:'add'
  },
  {
    name:'标签',
    link:'/main/essayTagList',
    icon:'tag'
  },
  {
    name:'作品',
    link:'/main/works',
    icon:'works'
  }
]

const homeNav = [
  {
    name: 'Github',
    link: 'https://github.com/kano233333',
    icon: 'github'
  },
  {
    name: 'blog',
    link: '/main/essayTimeList',
    icon: 'blog'
  },
  {
    name: 'qq',
    link: '',
    icon: 'qq',
    code: 'http://47.100.243.94:3011/uploads/1582521859516.jpg'
  },
  {
    name: 'email',
    link: '',
    icon: 'email',
    code: 'http://47.100.243.94:3011/uploads/1582522074984.png'
  }
]

const moreNav = {
  essay: [
    {
      name: '修改',
      link: '/edit',
      icon: 'revise',
      param: true
    },
    {
      name: '删除',
      icon: 'cut',
      action: {
        type: 'Confirm',
        text: '默默打出个？确定了🏇'
      }
    }
  ]
}

const monthData = [
  {
    en:'January',
    zh:'一月',
    _zh:'水仙',
    color:'#f1c4cd',
    font_color:'#fff'
  },
  {
    en:'February',
    zh:'二月',
    _zh:'杏',
    color:'#f0a1a8',
    font_color:'#fff'
  },
  {
    en:'March',
    zh:'三月',
    _zh:'桃',
    color:'#f07c82',
    font_color:'#fff'
  },
  {
    en:'April',
    zh:'四月',
    _zh:'槐',
    color:'#55bb8a',
    font_color:'#fff'
  },
  {
    en:'May',
    zh:'五月',
    _zh:'榴',
    color:'#20a162',
    font_color:'#fff'
  },
  {
    en:'June',
    zh:'六月',
    _zh:'荷',
    color:'#1a6840',
    font_color:'#fff'
  },
  {
    en:'July',
    zh:'七月',
    _zh:'栀子',
    color:'#eed045',
    font_color:'#fff'
  },
  {
    en:'August',
    zh:'八月',
    _zh:'桂',
    color:'#ffd111',
    font_color:'#fff'
  },
  {
    en:'September',
    zh:'九月',
    _zh:'菊',
    color:'#f8df70',
    font_color:'#fff'
  },
  {
    en:'October',
    zh:'十月',
    _zh:'芙蓉',
    color:'#dad4cb',
    font_color:'#333'
  },
  {
    en:'November',
    zh:'十一月',
    _zh:'山茶',
    color:'#e4dfd7',
    font_color:'#333'
  },
  {
    en:'December',
    zh:'十二月',
    _zh:'梅',
    color:'#f8f4ed',
    font_color:'#333'
  }
]
export { nav, monthData, moreNav, homeNav }