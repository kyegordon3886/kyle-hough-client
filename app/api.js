const store = require('./store.js')
const config = require('./config.js')

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    // where to we get our url for this, use development url in project api
    data
  })
}

const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const startNewGame = function () {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    // where to we get our url for this, use development url in project api
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {}
  })
}

const updateGame = function () {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/id',
    // where to we get our url for this, use development url in project api
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// const gameIndex = function () {
//   return $.ajax({
//     method: 'GET',
//     url: config.apiUrl + '/games',
//     headers: {
//       Authorization: 'Bearer ' + store.user.token
//     }
//   })
// }

// const playerMove = function (data) {
//   return $.ajax({
//     method: 'PATCH',
//     url: config.apiUrl + '/games/id',
//     headers: {
//       Authorization: 'Bearer ' + store.user.token
//     }
//   })
// }
module.exports = {
  signUp,
  changePassword,
  signIn,
  signOut,
  startNewGame,
  updateGame
}
