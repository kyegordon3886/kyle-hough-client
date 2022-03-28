
const gameUi = require('./ui.js')
const gameApi = require('./api.js')
const store = require('./store.js')
const getFormFields = require('../lib/get-form-fields.js')

// const over = false
let board = ['', '', '', '', '', '', '', '', '']

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

const onStartNewGame = function (event) {
  event.preventDefault()
  console.log('Start a game button works')
  board = ['', '', '', '', '', '', '', '', '']
  store.currentPlayer = store.playerOne

  gameApi
    .startNewGame()
    .then((response) => gameUi.startNewGameSuccess(response))
    .then((response) => console.log(response))
}

const checkForWin = function () {
  if (
    store.game.cells[0] === 'X' && (store.game.cells[1] === 'X') && (store.game.cells[2] === 'X')
  ) {
    console.log('X wins!')
    document.getElementById('winner').innerHTML = 'X wins!'
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
  console.log(board)
  console.log(store.game)

  gameApi
    .updateGame(index, board[index], false)
    .then((response) => gameUi.updateGameSuccess(response))

  checkForWin()
}

// const gameOver = function () {
//   if (board.every(onBoxClick) === ('X' || 'O')) {
//     console.log('game over')
//   }
// }

module.exports = {
  onSignIn,
  onChangePassword,
  onSignUp,
  onSignOut,
  onStartNewGame,
  onBoxClick,
  checkForWin
  // gameOver
  // restart
  // checkForWin
}

//   } else if(box.4.text === 'X' && box.5.text === 'X' & box.6.text === 'X')
//   print ('Player 1 Wins!')
//   } else if(box.7.text === 'X' && box.8.text === 'X' & box.9.text === 'X')
//   print ('Player 1 Wins!')
//   } else if(box.1.text === 'X' && box.4.text === 'X' & box.7.text === 'X')
//   print ('Player 1 Wins!')
//   } else if(box.2.text === 'X' && box.5.text === 'X' & box.8.text === 'X')
//   print ('Player 1 Wins!')
//   } else if(box.3.text === 'X' && box.6.text === 'X' & box.9.text === 'X')
//   print ('Player 1 Wins!')
//   } else if(box.1.text === 'X' && box.5.text === 'X' & box.9.text === 'X')
//   print ('Player 1 Wins!')
//   } else if(box.3.text === 'X' && box.5.text === 'X' & box.7.text === 'X')
//   print ('Player 1 Wins!')

//   if(box.1.text === 'O' && box.2.text === 'O' & box.3.text === 'O') {
//   print ('Player 2 Wins!')
//   } else if(box.4.text === 'O' && box.5.text === 'O' & box.6.text === 'O')
//   print ('Player 2 Wins!')
//   } else if(box.7.text === 'O' && box.8.text === 'O' & box.9.text === 'O')
//   print ('Player 2 Wins!')
//   } else if(box.1.text === 'O' && box.4.text === 'O' & box.7.text === 'O')
//   print ('Player 2 Wins!')
//   } else if(box.2.text === 'O' && box.5.text === 'O' & box.8.text === 'O')
//   print ('Player 2 Wins!')
//   } else if(box.3.text === 'O' && box.6.text === 'O' & box.9.text === 'O')
//   print ('Player 2 Wins!')
//   } else if(box.1.text === 'O' && box.5.text === 'O' & box.9.text === 'O')
//   print ('Player 2 Wins!')
//   } else if(box.3.text === 'O' && box.5.text === 'O' & box.7.text === 'O')
//   print ('Player 2 Wins!')

// if all boxes clicked
// } else {
//   print ('The game is a draw.')
// }
// }
