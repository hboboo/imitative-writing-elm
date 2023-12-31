import fetch from '../config/fetch';
import axios from 'axios';

/* 
* 获取首页默认地址
*/
export const cityGuess = () => fetch('/v1/cities', {
  type: 'guess'
})

/* 
* 获取首页热门城市
*/
export const hotcity = () => fetch('/v1/cities', {
  type: 'hot'
})

/* 
* 获取首页所有城市
*/
export const groupcity = () => fetch('/v1/cities', {
  type: 'group'
})

/* 
* 获取当前所在城市
*/
// export const currentcity = number => fetch('/v1/cities/' + number);

/* 
* 获取图片验证码
*/
export const getcaptchas = () => fetch('/v1/captchas', {}, 'POST');

/* 
* 账号密码登录
*/
export const accountLogin = (username, password, captcha_code) => fetch('/v2/login', {username, password, captcha_code}, 'POST')


/* 
* 获取msite页面食品分类列表
*/
// export const msiteFoodTypes = () => axios.get('http://localhost:3008/footType')

