
// SECTION Team One
let teamOne = {
  name: 'Red',
  Score: 0
}

function runRedScoreAdd() {
  teamOne.Score++
}

function runRedScoreAddThree() {
  teamOne.Score += 3
}

function drawRed() {
  document.getElementById('teamOneScore').innerHTML =
    `<div class="fs-1">Red Team's Score: ${teamOne.Score}</div>`
}

drawRed()

// SECTION  Team Two
let teamTwo = {
  name: 'Blu',
  Score: 0
}

function runBlueScoreAdd() {
  teamTwo.Score++
}

function runBlueScoreAddThree() {
  teamTwo.Score += 3
}

function drawBlue() {
  document.getElementById('teamTwoScore').innerHTML =
    `<div class="fs-1">Blu Team's Score: ${teamTwo.Score}</div>`
}

drawBlue()

function reset() {
  teamOne.Score = 0
  teamTwo.Score = 0
  drawBlue()
  drawRed()
}
