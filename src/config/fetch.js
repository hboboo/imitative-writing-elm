import { baseUrl } from './env';

export default async(url = '', data = {}, type = 'GET', method = 'fetch') => {
  type = type.toUpperCase()                                       //转换大写
  url = baseUrl + url                                             //拼接域名和端口

  if (type == 'GET') {
    let dataStr = ''                                              //数据拼接字符串
    Object.keys(data).forEach(key => {
      dataStr += key + '=' + data[key] + '&'                      //遍历并拼接数据加上'&'符号
    })
  
    if (dataStr !== '') {
      dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))    //去掉最后一个'&'符号
      url = url + '?' + dataStr                                   //'?'符号拼接数据
    }
  }

  if (window.fetch && method == 'fetch') {                        //检查浏览器是否支持 Fetch API，并且请求方法为 'fetch'
    let requestConfig = {
      credentials: 'include',                                     //包含凭证信息
      method: type,                                               //请求方法类型
      headers: {
        'Accept': 'application/json',                             //请求头部为 JSON 格式
        'Content-Type': 'application/json'                        //请求体为 JSON 格式
      },
      medo: "cors",                                               //请求模式为跨域请求
      cache: "force-cache"                                        //请求的缓存模式为强制缓存
    }

    if (type == 'POST') {
      Object.defineProperty(requestConfig, 'body', {              //定义 requestConfig 对象的 'body' 属性
        value: JSON.stringify(data)                               //'body' 属性的值为 data转换 JSON的结果      
      })
    }

    try {
      const response = await fetch(url, requestConfig)            //尝试发送请求并获取响应  
      const responseJson =await response.json()                   //把响应内容解析为 JSON 格式      
      return responseJson                                       
    } catch (error) {
      throw new Error(error)                                      //捕获解析后的 JSON 并抛出错误 
    }
  } else {
    return new Promise((resolve, reject) => {
      let requestObj
      if (window.XMLHttpRequest) {                                //如果浏览器支持 XMLHttpRequest，则创建一个新的 XMLHttpRequest 对象
        requestObj = new XMLHttpRequest()                         
      } else {
        requestObj = new ActiveXObject                            //如果浏览器不支持 XMLHttpRequest，则尝试创建 ActiveXObject
      }

      let sendDate = ''
      if (type == 'POST') {
        sendDate = JSON.stringify(data)                           //将数据转换为 JSON 字符串
      }

      requestObj.open(type, url, true)                                                        //异步方式发送请求
      requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded")        //设置请求头字段名、请求体内容以URL 编码形式
      requestObj.send(sendDate)                                                               //发送请求
      
      requestObj.onreadystatechange = () => {                     //事件处理
        if (requestObj.readyState == 4) {                         //请求状态为完成
          if (requestObj.status == 200) {                         //请求成功，解析响应数据
            let obj = requestObj.response                         //储存响应的数据
            if (typeof obj !== 'object') {
              obj = JSON.parse(obj)                               //解析为 JSON 对象
            }
            resolve(obj)                                          //解析后的数据传递给 Promise 的 resolve 函数
          } else {
            reject(requestObj)                                    //请求失败，将 XMLHttpRequest 对象传递给 Promise 的 reject 函数  
          }
        }
      }
    })
  }
}