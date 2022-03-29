// const { gameIndex } = require('./api.js')
// const { checkForWin } = require('./events.js')
// const events = require('./events.js')
const store = require('./store.js')

const onSignUpSuccess = function () {
  $('#game-display').html(
    '<p>You signed up successfully! Go ahead and sign in to your account!</p>'
  )
  $('form').trigger('reset')
}

const onSignUpFailure = function () {
  $('#game-display').html('<p>Error while signing up</p>')
}

const onSignInSuccess = function (response) {
  $('#game-display').html('<p>You are signed in!</p>').hide(3000)
  $('form').trigger('reset')
  $('#so-button').show('fade-in')
  $('#start-new-game, #change-password-form').show('2000')
  $('#sign-in-form, #sign-up-form').hide('fade-out')
  store.user = response.user
}

const onSignInFailure = function () {
  $('#game-display').html('<p>Incorrect username or password</p>')
}

const onChangePasswordSuccess = function () {
  $('#game-display').html('<p>Your password has been successfully changed!</p>')

  $('form').trigger('reset')
}

const onChangePasswordFailure = function () {
  $('#game-display').html('<p>Password change failed</p>')
}
const onSignOutSuccess = function () {
  $('#game-display').html('<p>Signed out!</p>')
  $('#game-board, #so-button, #start-new-game, #change-password-form').hide()
  $('#sign-in-form, #sign-up-form').show()
}

const onSignOutFailure = function () {
  $('#game-display').html('<p>Sign out failed...</p>')
}

const startNewGameSuccess = function (response) {
  $('#game-board').show('fade-in')
  console.log('New game start works')
  store.game = response.game
  console.log(store.game)
  $('.box').empty()
  $('.box').on('click')
}

const updateGameSuccess = function (response) {
  store.game = response.game
  console.log(store.game)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
  startNewGameSuccess,
  updateGameSuccess
}
