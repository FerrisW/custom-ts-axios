import axios from '../../src/index'

axios({
  method: 'post',
  url: '/simple/post',
  data: {
    a: 1,
    b: 2
  },
  // responseType: 'json',
  headers: {
    'content-type': 'application/json',
    'Accept': 'application/json,text-plain,*/*'
  }
}).then(res => {
  console.log(res)
})





