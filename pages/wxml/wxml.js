// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: '你好，小程序',
    firstName: 'kobe',
    lastName: 'bryant',
    age: 20,
    nowTime: new Date().toLocaleString(),
    isActive: false,
    isShow: true,
    score: 48,
    movies: ['星际穿越', '盗梦空间', '大话西游'],
    nums: [
      [10, 14, 11, 19],
      [22, 33, 44, 55],
      [66, 77, 88, 99]
    ],
    letters: ['a', 'b', 'c']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setInterval(() => {
      this.setData({nowTime: new Date().toLocaleString()})
    }, 1000)
  },
  handleSwitchColor() {
    this.setData({ isActive: !this.data.isActive })
  },
  handleSwitchShow() {
    this.setData({ isShow: !this.data.isShow })
  },
  handleIncrement() {
    this.setData({
      score: this.data.score + 6
    })
  }
})