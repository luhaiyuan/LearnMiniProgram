// 导入baseURL
import { baseURL } from './config.js';

export default function (options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseURL + options.url,
      method: options.method || 'GET',
      data: options.data || {},
      success: resolve,
      fail: reject
    })
  })
}