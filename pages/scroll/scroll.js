// pages/scroll/scroll.js
Page({
  data: {

  },
  handleScroll(event) {
    console.log('正在滚动', event);
  },
  handleBottom() {
    console.log('滚动到底部了');
  }
})