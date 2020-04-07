// pages/home/childCpns/w-recommend/w-recommend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    recommends: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isLoad: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 监听图片加载完触发
    handleImageLoad() {
      if (!this.data.isLoad) {
        // 做一个判断，这样向外发出事件，只会发出一次
        this.triggerEvent('imageload');
        this.data.isLoad = true;
      }
    }
  }
})
