// components/my-prop/my-prop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // title: String
    // 页面传递数据给组件
    title: {
      type: String,
      value: '我是默认的标题',
      observer: function (newVal, oldVal) {
        console.log(newVal, oldVal);
      }
    }
  },

  // 页面传递样式给组件
  externalClasses: ['titleclass']
})
