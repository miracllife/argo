/* eslint-disable */
import axios from "axios";

// 创建axios实例
const service = axios.create({
  // baseURL: process.env.REACT_APP_BASE_API, // api的base_url
});

let sysValues = ["syslang", "sysdictionary", "sysparams"];

// let pending = []; //声明一个数组用于存储每个ajax请求的取消函数和ajax标识
// let cancelToken = axios.CancelToken;
// request拦截器
service.interceptors.request.use(
  (config) => {
    let _token = "";

    if (_token) {
      config.headers["Authorization"] = _token; // 让每个请求携带自定义token 请根据实际情况自行修改 // change by wen hao
      config.headers["Content-Type"] = "application/json";
      config.headers["Cache-Control"] = "no-cache";
    }
    let signs = localStorage.getItem("sign");

    if (signs) {
      config.headers["appkey"] = "platform";
      config.headers["sign"] = signs;
    }
    // let url = config.url;
    // if (dataName) {
    //   config.headers[dataName] = localStorage.getItem(dataName);
    // }
    // if (config.params) {
    //   config.params.time = +new Date().getTime();
    // } else {
    //   config.url =
    //     config.url +
    //     (config.url.includes('?') ? '&' : '?') +
    //     'time=' +
    //     new Date().getTime();
    // }

    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// respone拦截器
service.interceptors.response.use(
  (response) => {
    // removeRepeatUrl(response.config); //在一个ajax响应后再执行一下取消操作，把已经完成的请求从pending中移除
    const res = response.data;
    if (response.headers) {
      if (parseInt(res.code) == 2010) {
        return;
      }
      for (let i in response.headers) {
        if (response.headers.hasOwnProperty(i) && sysValues.includes(i)) {
          localStorage.setItem(i, response.headers[i]);
          return response.data;
        }
      }
    }
    if (parseInt(res.code) !== 2000) {
      // token过期
      if (parseInt(res.code) === 4030) {
        setTimeout(() => {
          window.location.href = window.location.origin + "/login";
        }, 1000);
      } else if (parseInt(res.code) === 4050) {
        return Promise.reject(res);
      }
    }
    return Promise.resolve(response.data);
  },
  (error) => {
    if (error.toString() !== "Cancel") {
    }
    return Promise.reject(error);
  }
);

export default service;
