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
  $('#game-display').html('<p>You are signed in!</p>')

  $('form').trigger('reset')
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
}

const onSignOutFailure = function () {
  $('#game-display').html('<p>Sign out failed...</p>')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
