// 定义一个token常量
const TOKEN = 'token';

App({
  globalData: {
    token: ''
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    // 1.先从缓存(Storage)中取出token
    const token = wx.getStorageSync(TOKEN);

    // 判断token是否有值
    if (token && token.length !== 0) {
      // 走到这里表示已经有token了，只需验证token是否过期就可以了
      // 验证token是否过期
      this.check_token(token);
    } else {
      // 这里是没有token，进行登录操作
      this.login();
    } 
  },
  // 登录逻辑
  login() {
    console.log('执行了登录操作');
    // 登录操作
    wx.login({
      // code只有5分钟的有效期
      success: (res) => {
        // 1.获取code
        const code = res.code;
        // 2.将code发送给我们的服务器
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'POST',
          data: {
            code
          },
          success: (res) => {
            // 1.取出token
            const token = res.data.token;
            // 2.将token保存在globalData中
            this.globalData.token = token;
            // 3.进行本地存储
            wx.setStorageSync(TOKEN, token);
          }
        })
      }
    })
  },
  // 验证token逻辑
  check_token(token) {
    console.log('执行了验证token操作');
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'POST',
      header: {
        token
      },
      success: (res) => {
        if (!res.data.errCode) {
          console.log('token有效');
          // 表示之前token是有效的，然后再把token保存到globalData中，方便其他页面获取token
          this.globalData.token = token;
        } else {
          // token有问题, 就重新执行登录操作
          this.login();
        }
        console.log(res.data);
      },
      fail: function (err) {
        console.log(err);
      }
    })
  }
})
