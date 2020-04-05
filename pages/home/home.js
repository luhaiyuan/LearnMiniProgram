// pages/home/home.js
// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {

//   },

//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad: function (options) {
//     // 发送网络请求
//     // 1.发送最简单的GET请求
//     // wx.request({
//     //   url: 'http://123.207.32.32:8000/recommend',
//     //   success: function (res) {
//     //     console.log(res);
//     //   }
//     // })

//     // 2.GET请求携带参数
//     // wx.request({
//     //   url: 'http://123.207.32.32:8000/home/data',
//     //   data: {
//     //     type: 'sell',
//     //     page: 1
//     //   },
//     //   success: function (res) {
//     //     console.log(res);
//     //   }
//     // })

//     // 3.POST请求并且携带参数
//     wx.request({
//       url: 'http://httpbin.org/post',
//       method: 'POST',
//       data: {
//         name: 'coderwhy',
//         age: 18
//       },
//       success: function (res) {
//         console.log(res);
//       },
//       fail: function (err) {
//         console.log(err);
//       },
//       complete() {
//         // 接口调用完成，触发这个函数，不管成功还是失败
//         console.log('接口调用完成');
//       }
//     })
//   }
// })



// ----------使用封装的request发送网络请求------------
// Promise最大的好处就是防止出现回调地狱
import request from '../../service/network.js';
Page({
  data: {

  },
  onLoad: function (options) {
    // 发送网络请求
    request({
      url: 'http://123.207.32.32:8000/recommend'
    })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
  }
})