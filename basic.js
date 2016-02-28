"use strict"

// State A always transitions to State B
// State B randomly chooses State C or D

const stateA = () => {
  console.log("In state A")

  return stateB
}

const stateB = () => {
  console.log("In state B")

  const choice = Math.floor(Math.random() * 2) + 1
  if (choice === 1) {
    return stateC
  } else {
    return stateD
  }
}

const stateC = () => {
  console.log("In state C")
}

const stateD = () => {
  console.log("In state D")
}

// The fsm can only be in one state at a time
let state = stateA
while (state) {
  state = state()
}
