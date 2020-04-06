// pages/detail/detail.js
Page({
  onLoad: function (options) {
    console.log(options);
  },
  onUnload() {
    // 页面退出时候执行该生命周期
    // 详情页传递数据给首页
    // 1.获取首页的页面对象
    // getCurrentPages当前所有栈的页面
    const pages = getCurrentPages();
    const home = pages[pages.length - 2]; // 拿到最后一个的前一个
    // 2.调用页面对象的方法
    home.setData({
      title: '呵呵呵'
    })
  },
  handleBackHome() {
    // 通过代返回到首页
    wx.navigateBack({
      delta: 1 // 决定返回层级
    })
  }
})