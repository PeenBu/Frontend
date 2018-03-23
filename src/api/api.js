import Vue from 'vue'
export default {

  getUserMember (callback) {
    Vue.$http.get('http://localhost:3000/users')
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (response) {
    })
  },
  login (user, pass, callback) {
    console.log('login')
    var loginParams = {
      email: user,
      password: pass
    }
    Vue.$http.post('http://localhost:3000/login', loginParams)
      .then(function (response) {
        console.log(response.data)
        callback(response.data)
      })
      .catch(function (response) {

      })
  }
}
