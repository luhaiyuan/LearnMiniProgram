// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter: 0,
    isShow: true
  },
  handleIncrement(event) {
    // 如果自定义组件传递一些数据过来，需要在event事件对象中获取
    console.log(event);
    this.setData({counter: this.data.counter + 1});
  },
  handleTabClick(event) {
    console.log(event);
  },
  // 处理组件内的方法
  handleIncrementCpn() {
    console.log('111');
    // 最终目的: 修改my-sel中的counter
    // 组件对象.setData
    // 任何的Page对象和Component对象，都有一个方法selectComponent('class/id')
    // 1.获取组件对象
    const my_sel = this.selectComponent('.sel-class');
    // 2.通过setData修改组件中的数据(但是这种直接修改变量不大合理)
    // my_sel.setData({
    //   counter: my_sel.data.counter + 20
    // });

    // 3.通过方法对数据进行修改
    my_sel.incrementCounter(100)
  },

  // 控制组件显示与隐藏
  handleChangeShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  }
})