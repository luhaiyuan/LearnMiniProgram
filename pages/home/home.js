// 导入二次封装的home.js请求(注意: 只能写相对路径)
import { 
  getMultiData,
  getGoodsData
} from '../../service/home.js';

// 类型数组
const types = ['pop', 'new', 'sell'];
// 定义个常量，判断距离多少，显示回到顶部按钮
const TOP_DISTANCE = 1000;

Page({
  data: {
    banners: [],
    recommends: [],
    titles: ['流行', '新款', '精选'],
    goods: {
      'pop': { page: 0, list: [] },
      'new': { page: 0, list: [] },
      'sell': { page: 0, list: [] }
    },
    currentType: 'pop', // 记录当前类型
    showBackTop: false, // 默认不显示回到顶部按钮
    isTabFixed: false,   // 默认不是固定定位，滚动到一定程度固定定位
    tabScrollTop: 0
  },
  onLoad: function (options) {
    // 1.轮播图和推荐数据处理函数
    this._getMultiData();
    // 2.请求商品数据
    this._getGoodsData('pop');
    this._getGoodsData('sell');
    this._getGoodsData('new');
  },

  // -----------网络请求的函数-------------
  _getMultiData() {
    // 1.请求轮播图以及推荐数据
    getMultiData()
    .then(res => {
      // 取出轮播图和推荐的数据
      const banners = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list;
      
      // 将banners和recommends放到data中
      this.setData({
        banners,
        recommends
      })
    })
  },
  _getGoodsData(type) {
    // 1.获取页码
    const page = this.data.goods[type].page + 1;
    
    // 2.发送网络请求
    getGoodsData(type, page)
    .then(res => {
      // 2.1取出数据
      const list = res.data.data.list;
      // 2.2将数据设置到对应type的list中
      const oldList = this.data.goods[type].list;
      oldList.push(...list);
      // 2.3将数据设置到data中的goods中
      const typeKey = `goods.${type}.list`; // 类型对应的键
      const pageKey = `goods.${type}.page`
      this.setData({
        [typeKey]: oldList,
        [pageKey]: page // 直接使用上面的page
      })
    })
  },
  
  // -----------事件监听的函数-------------
  // 监听tab点击了哪一个(保存到了event.detail中)
  handleTabClick(event) {
    // 取出index, 后续根据index，加载对应的页面数据
    const index = event.detail.index;
    
    // 通过index，修改currentType
    this.setData({
      currentType: types[index]
    })
  },

  // --------监听页面滚动到底部---------
  onReachBottom() {
    // 上拉加载更多 -> 请求新的数据
    this._getGoodsData(this.data.currentType);
  },

  // -------监听页面的滚动-------
  onPageScroll(options) {
    // 1.取出scrollTop
    const scrollTop = options.scrollTop;

    // 2.优化写法
    const flag1 = scrollTop >= TOP_DISTANCE;
    if (flag1 != this.data.showBackTop) {
      this.setData({
        showBackTop: flag1
      })
    }
    
    // 2.根据scrollTop
    // 官方: 不要在滚动的函数中频繁调用this.setData
    // this.setData({
    //   showBackTop: scrollTop >= TOP_DISTANCE
    // })

    // 3.修改isTabFixed属性
    const flag2 = scrollTop >= this.data.tabScrollTop;
    if (flag2 != this.data.isTabFixed) { // 加个判断优化一下
      this.setData({
        isTabFixed: flag2
      })
    }
  },

  // ---------获取tab-control距离顶部的距离---------
  // onShow: 页面显示出来时回调的函数
  // 页面显示是否意味着所有的图片都加载完成
  // --不好的写法--
  // onShow() {
  //   setTimeout(() => {
  //     wx.createSelectorQuery().select('#tab-control').boundingClientRect(rect => {
  //       console.log(rect);
  //     }).exec()
  //   }, 1000)
  // }

  // 正确的写法是: 判断哪里影响高度了，就去监听那里的图片是否加载完成，加载完了获取一个最正确的高度
  handleImageLoad() {
    // console.log('图片加载完成');
    wx.createSelectorQuery().select('#tab-control').boundingClientRect(rect => {
      // console.log(rect);
      this.data.tabScrollTop = rect.top;
    }).exec()
  }
})