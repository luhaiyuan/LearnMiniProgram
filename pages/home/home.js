// pages/home/home.js
Page({
  handleShowToast() {
    // 点击按钮展示出来一个弹框
    wx.showToast({
      title: '加载中',
      duration: 3000,
      icon: 'loading',
      // 使用自定义图标
      // image: '../../assets/img/loading.gif'

      // 不希望出来图标时，用户还可以点击，这是就需要一个蒙层(mask)
      mask: true,
      success: function () {
        console.log('展示弹框成功');
      },
      fail: function () {
        console.log('展示弹框失败');
      },
      complete: function () {
        // 点击的时候，只要弹框正常的弹出来就立刻触发complete函数，不会等到弹框显示完毕后触发
        console.log('完成函数的调用');
      }
    })
  },
  handleShowModal() {
    wx.showModal({
      title: '我是标题',
      content: '我是内容, 哈哈',
      showCancel: true, // 默认为true有取消按钮, 改为false就没有取消按钮了
      cancelText: '退出', // 修改取消的文本
      cancelColor: '#ccc', // 可写单词，可写16进制颜色
      success: function (res) {
        // 点击确定或者取消触发
        console.log(res);
        if (res.cancel) {
          console.log('用户点击了取消按钮');
        }
        if (res.confirm) {
          console.log('用户点击了确定按钮');
        }
      }
    })
  },
  handleShowLoading() {
    // 默认showLoading会一直显示，需要调用hideLoading手动关闭它
    wx.showLoading({
      title: '加载ing',
      mask: true
    })

    setTimeout(() => {
      // 必须手动调用hideLoading才会让loading消失
      wx.hideLoading()
    }, 1000)
  },
  handleShowAction() {
    wx.showActionSheet({
      itemList: ['相册', '拍照'],
      itemColor: 'red',
      success: function (res) {
        console.log(res);
      }
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (options) {
    return {
      title: '你好啊，李银河',
      path: '/pages/about/about', // 决定打开分享的小程序，进入到哪个页面(默认是首页)
      // imageUrl: '本地图片地址/网络图片地址'
      // 给别人分享过去显示的图片
      imageUrl: 'https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=783550970,2588991311&fm=179&app=42&f=JPEG?w=150&h=150'
    }
  }
})
