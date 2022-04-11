
const gameEvents = require('./events.js')

$(() => {
  $('#sign-in-form').on('submit', gameEvents.onSignIn)
  $('#change-password-form').on('submit', gameEvents.onChangePassword)
  $('#sign-up-form').on('submit', gameEvents.onSignUp)
  $('#sign-out-button').on('click', gameEvents.onSignOut)
  $('#start-new-game').on('click', gameEvents.onStartNewGame)
  $('.box').on('click', gameEvents.onBoxClick)
  $('#game-board, #so-button, #start-new-game, #change-password-form').hide()
})
