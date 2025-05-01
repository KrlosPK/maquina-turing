const form = document.getElementById('binaryForm');
const resultArticle = document.getElementById('resultArticle');
const invalidBinaryMessage = document.getElementById('invalidBinaryMessage');
const resultContainer = document.getElementById('resultContainer');

const input = document.getElementById('input');
const binaryInput = document.getElementById('binaryInput');
const decimalOutput = document.getElementById('decimalOutput');
const turingResult = document.getElementById('turingResult');

const convertBinaryToDecimal = (binary) => parseInt(binary, 2);
const convertDecimalToBinary = (decimal) => decimal.toString(2);

const resetUI = () => {
  resultArticle.classList.add('hidden');
  invalidBinaryMessage.classList.add('hidden');
  resultContainer.classList.add('hidden');
};

// Form handler
form.addEventListener('submit', (e) => {
  e.preventDefault();
  resetUI();

  const [first, second] = input.value.trim().split('#');

  if (!first || !second || isNaN(parseInt(first, 2)) || isNaN(parseInt(second, 2))) {
    invalidBinaryMessage.classList.remove('hidden');
    resultArticle.classList.remove('hidden');
    return;
  }

  const firstDec = convertBinaryToDecimal(first);
  const secondDec = convertBinaryToDecimal(second);
  const sumDec = firstDec + secondDec;
  const sumBin = convertDecimalToBinary(sumDec);

  binaryInput.textContent = `${first} + ${second}`;
  decimalOutput.textContent = `${firstDec} + ${secondDec} = ${sumDec}`;
  turingResult.textContent = sumBin;

  resultContainer.classList.remove('hidden');
  resultArticle.classList.remove('hidden');
});

// Solo se permiten los caracteres 0, 1 y #
input.addEventListener('input', (e) => {
  const value = e.target.value;
  const regex = /^[01#]*$/;
  if (!regex.test(value)) {
    e.target.value = value.slice(0, -1);
  }
});
