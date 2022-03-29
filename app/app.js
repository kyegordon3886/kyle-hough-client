// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const gameEvents = require('./events.js')
// const gameUi = require('./ui.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-in-form').on('submit', gameEvents.onSignIn)
  $('#change-password-form').on('submit', gameEvents.onChangePassword)
  $('#sign-up-form').on('submit', gameEvents.onSignUp)
  $('#sign-out-button').on('click', gameEvents.onSignOut)
  $('#start-new-game').on('click', gameEvents.onStartNewGame)
  $('.box').on('click', gameEvents.onBoxClick)
  $('#game-board, #so-button, #start-new-game, #change-password-form').hide()
  // $('.box').on('click', gameUi.startNewGameSuccess)
})
