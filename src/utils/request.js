import axios from 'axios'

const MyAxios = axios.create({
  baseURL: 'http://big-event-vue-api-t.itheima.net'
})

export default MyAxios
