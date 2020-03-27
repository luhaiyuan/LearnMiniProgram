// pages/home/home.js
Page({
  data: {
    name: 'Coderwhy',
    age: 19,
    students: [
      { id: 110, name: 'kobe', age: 30 },
      { id: 111, name: 'james', age: 29 },
      { id: 112, name: 'curry', age: 36 },
      { id: 113, name: 'coderwhy', age: 18 }
    ],
    counter: 0
  },
  handleBtnClick() {
    // 1.错误的做法，界面是不会刷新的
    // this.data.counter += 1;
    // console.log(this.data.counter);

    // 2.this.setData()
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleSubtraction() {
    this.setData({
      counter: this.data.counter - 1
    })
  }
})