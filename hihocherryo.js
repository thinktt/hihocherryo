let trees = {
  purple: 10,
  red: 10,
}

trees['purple']

function getSpin() {
  const options = [1, 2, 3 , 4, -2, -2, 'b']
  const spin = Math.floor(Math.random() * 6)
  return options[spin]
}

function getNewTreeNum(treeNum, spin) {

  if (spin === 'b') return 10

  if (treeNum - spin > 10) return 10

  if (treeNum - spin < 0 ) return treeNum
  

  return treeNum - spin
}

// function playRound(trees) {
//   for (color in trees) {
//     trees[color] = getNewTreeNum(trees[color])
//     if (trees[color] === 0) break
//   }
//   return trees
// }

function playGame() {
  let winner = '' 
  for(let i = 1; !winner; i++) {
    console.log(`...... Round ${i} ......`)
    for (const color in trees) {
      const spin = getSpin()
      trees[color] = getNewTreeNum(trees[color], spin)
      console.log(`${color} spun a ${spin}`)
      console.log(`${color} now has ${trees[color]} cherries`)
      if (trees[color] === 0) winner = color 
    }
    console.log()
  }
  console.log(`${winner} wins!`)
}

playGame()