const app = "I don't do much."


function destructivelyAppendKitten(name) {
   kittens.push(name)
   return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
   kittens.pop()
   return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  return [...kittens, name]
}

function prependKitten(name) {
  return [name, ...kittens]
}

function removeLastKitten() {
  var kitt = [...kittens]
  kitt.pop()
  return kitt
}

function removeFirstKitten() {
  var kit = kittens.slice(1)
  return kit
}
