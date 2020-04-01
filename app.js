App({
  // 生命周期函数: 后台存活两个小时
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    // 1.在这里可以发送一些网络请求
    console.log('小程序初始化完成了: onLaunch');
    // wx.request({
    //   url: '',
    // })

    // 2.也可以获取用户的信息
    // 获取用户信息是异步调用的
    wx.getUserInfo({
      // 数据拿到之后再进行回调的
      success: function (res) {
        console.log(res);
      }
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    // 小程序界面显示出来之后执行的声明周期函数
    console.log('界面显示出来: onShow');
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log('界面被隐藏时会执行: onHide');
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log('小程序中发生一些错误时会执行: onError');
  }
})
