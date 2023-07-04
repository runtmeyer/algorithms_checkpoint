
function analyzeSentence(sentence) {
    let length = 0;     // Counter for the length of the sentence
    let wordCount = 0;  // Counter for the number of words
    let vowelCount = 0; // Counter for the number of vowels
  
    for (let i = 0; i < sentence.length; i++) {
      const character = sentence[i];
  
      if (character !== ' ') {
        length++;
  
        if (character === '.') {
          // Subtract 1 from length to exclude the period from the sentence length
          length--;
          break;
        }
  
        if (isVowel(character)) {
          vowelCount++;
        }
      } else if (length > 0) {
        wordCount++;
      }
    }
  
    console.log('Sentence length:', length);
    console.log('Word count:', wordCount + 1); // Add 1 to include the last word after the period
    console.log('Vowel count:', vowelCount);
  }
  
  function isVowel(character) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    return vowels.includes(character);
  }
  
  // Example usage:
  const sentence = 'Hello Mr daniel';
  analyzeSentence(sentence);
  
