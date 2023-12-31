import {
  RECORD_USERINFO,
} from './mutation-types'

import {setStore} from '../config/mUtils'

export default {
  //记录用户信息
  [RECORD_USERINFO](state, info) {
    state.userInfo = info
    state.login = true
    setStore('user_id', info.user_id)
  }
}