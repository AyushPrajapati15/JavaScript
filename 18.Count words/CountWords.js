// Count words
function countWords(sentence) {
  let wordCount = 0;
  let isInsideWord = false;

  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];


    if (/[a-zA-Z0-9]/.test(char)) {
      if (!isInsideWord) {

        wordCount++;
        isInsideWord = true;
      }
    } else {
      isInsideWord = false;
    }
  }

  return wordCount;
}


const inputSentence = "This is a sample sentence with several words.";
const wordCount = countWords(inputSentence);
console.log(`Word count: ${wordCount}`);
