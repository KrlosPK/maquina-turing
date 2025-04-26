const form = document.getElementById('binaryForm')

const resultArticle = document.getElementById('resultArticle')
const invalidBinaryMessage = document.getElementById('invalidBinaryMessage')
const resultContainer = document.getElementById('resultContainer')

const $input = document.getElementById('input')
const $binaryInput = document.getElementById('binaryInput')
const $decimalOutput = document.getElementById('decimalOutput')
const $turingResult = document.getElementById('turingResult')

function convertBinaryToDecimal(binaryString) {
  return parseInt(binaryString, 2)
}

function convertDecimalToBinary(decimalNumber) {
  return decimalNumber.toString(2)
}

form.addEventListener('submit', (event) => {
  event.preventDefault()

  resetHiddenValues()

  resultArticle.classList.remove('hidden')

  const entries = $input.value.trim().split('#')

  if (
    entries.length !== 2 ||
    entries.some((entry) => isNaN(parseInt(entry, 2)))
  ) {
    invalidBinaryMessage.classList.remove('hidden')
    return
  }

  resultContainer.classList.remove('hidden')

  const [firstEntry, secondEntry] = entries

  $binaryInput.innerText = `${firstEntry} + ${secondEntry}`

  $decimalOutput.innerText = `${convertBinaryToDecimal(
    firstEntry
  )} + ${convertBinaryToDecimal(secondEntry)} = ${
    convertBinaryToDecimal(firstEntry) + convertBinaryToDecimal(secondEntry)
  }`

  $turingResult.innerText = `${convertDecimalToBinary(
    convertBinaryToDecimal(firstEntry) + convertBinaryToDecimal(secondEntry)
  )}`
})

function resetHiddenValues() {
  resultArticle.classList.add('hidden')
  invalidBinaryMessage.classList.add('hidden')
  resultContainer.classList.add('hidden')
}
