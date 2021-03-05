/* eslint-disable */
import request from "./request";
import { ApiPrefix } from "./ApiConstants";

const BASE_API = ApiPrefix.PORTAL;
function sendHttpRequest(requests, showLoading = true) {
  return new Promise((resolve, reject) => {
    requests
      .then((response) => {
        if (response.code && parseInt(response.code) !== 2000) {
          // var message = response.message;
          reject(response); // 返回错误
        } else {
          resolve(response); // 返回成功
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
}

export function post(url, param, prefixUrl, showLoading = true) {
  if (arguments[2] === void 0) {
    prefixUrl = BASE_API;
  }
  return sendHttpRequest(
    request({
      url: prefixUrl + url,
      method: "post",
      data: param ? param : "",
    }),
    showLoading
  );
}

export function put(url, param, prefixUrl, showLoading = true) {
  if (arguments[2] === void 0) {
    prefixUrl = BASE_API;
  }
  return sendHttpRequest(
    request({
      url: prefixUrl + url,
      method: "put",
      data: param ? param : "",
    }),
    showLoading
  );
}

export function deletes(url, param, prefixUrl, showLoading = true) {
  if (arguments[2] === void 0) {
    prefixUrl = BASE_API;
  }
  return sendHttpRequest(
    request({
      url: prefixUrl + url,
      method: "delete",
      data: param ? param : "",
    }),
    showLoading
  );
}

export function get(url, param, prefixUrl = BASE_API, showLoading = true) {
  if (arguments[2] === void 0) {
    prefixUrl = BASE_API;
  }
  return sendHttpRequest(
    request({
      url: prefixUrl + url,
      method: "get",
      params: param ? param : "",
    }),
    showLoading
  );
}

export function post_param(url, param, prefixUrl, showLoading = true) {
  if (arguments[2] === void 0) {
    prefixUrl = BASE_API;
  }
  return sendHttpRequest(
    request({
      url: prefixUrl + url,
      method: "post",
      params: param ? param : "",
    }),
    showLoading
  );
}
