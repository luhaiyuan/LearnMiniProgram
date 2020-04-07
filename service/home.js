import request from './network.js';

// 首页轮播图和推荐数据
export function getMultiData() {
  return request({
    url: '/home/multidata'
  })
}

export function getGoodsData(type, page) {
  return request({
    url: '/home/data',
    data: {
      type: type,
      page: page
    }
  })
}