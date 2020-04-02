// getApp()这个函数可以获取App()产生的示例对象
// const app = getApp();
// const name = app.globalData.name;
// const age = app.globalData.age;

// 注册一个页面
// 页面也有自己的生命周期函数
Page({
  // 2.初始化数据
  data: {
    message: '哈哈哈',
    list: []
  },
  
  // 3.监听wxml中的事件，绑定对应的事件函数
  handleGetUserInfo(event) {
    console.log(event);
  },
  handleViewClick() {
    console.log('哈哈哈被点击了');
  },

  // -----1.监听页面的生命周期-----
  // onLoad页面被加载出来
  onLoad() {
    console.log('onLoad');

    // 发送网络请求
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      success: (res) => {
        console.log(res);
        // 取出数据
        // const data = res.data.data.list;
        // 只有这样设置list属性，才能保证数据变，页面变
        // this.setData({
        //   list: data
        // })
      }
    })
  },
  // onShow页面显示出来时
  onShow() {
    console.log('onShow');
  },
  // 页面初次渲染完成时
  onReady() {
    console.log('onReady');
  },
  // 页面隐藏时
  onHide() {
    console.log('onHide');
  },
  // 页面卸载
  onUnload() {
    console.log('onUnload');
  },
  
  // -----------4.监听其他事件-----------
  // 监听页面的滚动
  onPageScroll(obj) {
    // console.log(obj);
  },
  // 监听页面滚动到底部
  onReachBottom() {
    console.log('页面滚动到底部');
  },
  // 监听页面下拉刷新
  onPullDownRefresh() {
    console.log('下拉刷新');
  }
})