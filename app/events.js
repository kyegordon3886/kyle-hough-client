const gameUi = require('./ui.js')
const gameApi = require('./api.js')
const getFormFields = require('../lib/get-form-fields.js')

const onSignIn = function (event) {
  event.preventDefault()
  console.log('Sign in button works')

  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  gameApi
    .signIn(data)
    .then((response) => gameUi.onSignInSuccess(response))
    .catch(() => gameUi.onSignInFailure())
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('Password change button works')

  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  gameApi
    .changePassword(data)
    .then(() => gameUi.onChangePasswordSuccess())
  // is all of the above a function within a function?
    .catch(() => gameUi.onChangePasswordFailure())
}

const onSignUp = function (event) {
  event.preventDefault()
  console.log('Button works')

  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  gameApi.signUp(data)
    .then(() => gameUi.onSignUpSuccess())
    .catch(() => gameUi.onSignUpFailure())
}

const onSignOut = function () {
  gameApi
    .signOut()
    .then(() => gameUi.onSignOutSuccess())
  // is all of the above a function within a function?
    .catch(() => gameUi.onSignOutFailure())
}

let clicked = false
const onBoxClick = function () {
  if (!clicked) {
    $(this).text('X').off()
    clicked = true
  } else {
    $(this).text('O').off()
    clicked = false
  }
  console.log('Box click works!')
  $(this).css('background', 'red')
}

console.log('Box click works!')
$(this).css('background', 'red')

const restart = function (event) {
  $('.box').text('')
  $('.box').bind('click', onBoxClick)
}

module.exports = {
  onSignIn,
  onChangePassword,
  onSignUp,
  onSignOut,
  onBoxClick,
  restart
}
