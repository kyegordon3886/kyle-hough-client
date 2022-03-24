const gameUi = require('./ui.js')
const gameApi = require('./api.js')
const getFormFields = require('../../lib/get-form-fields.js')

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

module.exports = {
  onSignIn,
  onChangePassword,
  onSignUp,
  onSignOut
}
