// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '哈哈哈'
  },
  handlePushDetail() {
    // 通过代码实现页面跳转
    // 每一种open-type，都有对应的api
    wx.navigateTo({
      url: '/pages/detail/detail?title=你好啊'
    });
    // wx.redirectTo({
    //   url: 'url',
    // })
  }
})