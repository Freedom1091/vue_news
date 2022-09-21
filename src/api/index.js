import request from '@/utils/request'

export const registerAPI = () => {
  request({
    url: '/api/reg',
    method: 'POST',
    data: {
      username: 'lixiaolong',
      password: '123456',
      repassword: '123456'
    }
  })
}
