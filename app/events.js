
const gameUi = require('./ui.js')
const gameApi = require('./api.js')
const store = require('./store.js')
const getFormFields = require('../lib/get-form-fields.js')

let board = ['', '', '', '', '', '', '', '', '']
// let over = store.game.over
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
    .catch(() => gameUi.onSignOutFailure())
}

const gameOver = function () {
  $('.box').off('click')
  // store.game.over = 'true'
  document.getElementById('game-over').innerHTML = 'Game Over Amigos.'
}

const onStartNewGame = function (event) {
  event.preventDefault()
  $('.box').on('click', onBoxClick)
  document.getElementById('winner').innerHTML = ' '
  document.getElementById('game-over').innerHTML = ' '
  board = ['', '', '', '', '', '', '', '', '']
  store.currentPlayer = store.playerOne
  // store.game.over = 'false'

  gameApi
    .startNewGame()
    .then((response) => gameUi.startNewGameSuccess(response))
    .then((response) => console.log(response))
}

const checkForWin = function (board) {
  if ((
    board[0] === 'X' && (board[1] === 'X') && (board[2] === 'X')) || (
    board[3] === 'X' && (board[4] === 'X') && (board[5] === 'X')) || (
    board[6] === 'X' && (board[7] === 'X') && (board[8] === 'X')) || (
    board[0] === 'X' && (board[3] === 'X') && (board[6] === 'X')) || (
    board[1] === 'X' && (board[4] === 'X') && (board[7] === 'X')) || (
    board[2] === 'X' && (board[5] === 'X') && (board[8] === 'X')) || (
    board[0] === 'X' && (board[4] === 'X') && (board[8] === 'X')) || (
    board[2] === 'X' && (board[4] === 'X') && (board[6] === 'X'))
  ) {
    // let (store.game.over = true)
    document.getElementById('winner').innerHTML = 'X wins!'
    gameOver()
  }
  if ((
    board[0] === 'O' && (board[1] === 'O') && (board[2] === 'O')) || (
    board[3] === 'O' && (board[4] === 'O') && (board[5] === 'O')) || (
    board[6] === 'O' && (board[7] === 'O') && (board[8] === 'O')) || (
    board[0] === 'O' && (board[3] === 'O') && (board[6] === 'O')) || (
    board[1] === 'O' && (board[4] === 'O') && (board[7] === 'O')) || (
    board[2] === 'O' && (board[5] === 'O') && (board[8] === 'O')) || (
    board[0] === 'O' && (board[4] === 'O') && (board[8] === 'O')) || (
    board[2] === 'O' && (board[4] === 'O') && (board[6] === 'O'))
  ) {
    // let (store.game.over = true)
    document.getElementById('winner').innerHTML = 'O wins!'
    gameOver()
  } else if (board.every(value => value === 'X' || value === 'O')) {
    // let (store.game.over = true)
    document.getElementById('winner').innerHTML = 'The game is a draw'
    gameOver()
  }
}

const onBoxClick = function (event) {
  const index = event.target.getAttribute('data-cell-index')
  // this below conditional statement is saying: start the game board at playerOne, on click, if it is playerOne = true, make it playerTwo, if not, make it playerOne
  if (board[index] === '') {
    board[index] = store.currentPlayer
    $(this).text(store.currentPlayer)
    store.currentPlayer = (store.currentPlayer === store.playerOne) ? store.playerTwo : store.playerOne
  }
  // if (board[index].forEach === ('X' || 'O')) {
  //   console.log('game over')
  // }
  console.log(board)
  console.log(store.game)

  gameApi
    .updateGame(index, board[index], false)
    .then((response) => gameUi.updateGameSuccess(response))
  checkForWin(board)
}

module.exports = {
  onSignIn,
  onChangePassword,
  onSignUp,
  onSignOut,
  onStartNewGame,
  onBoxClick,
  checkForWin,
  gameOver
}
