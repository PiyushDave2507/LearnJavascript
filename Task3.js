const input = ["racecar", "apple", "madam", "banana", "civic"];


const classifyPalindromes = (input) => {
  const result = {
    palindrome: { count: 0, record: [] },
    nonPalindrome: { count: 0, record: [] }
  };

  for (let i = 0; i < input.length; i++) {
    const arr = input[i];
    const reversed = arr.split('').reverse().join('');
    const isPalindrome = arr == reversed;
    // use also ternary opration
    // const type = isPalindrome ? 'palindrome' : 'nonPalindrome';
    //    result[type].count++;
    //    result[type].record.push(arr);
   if (isPalindrome) {
      result.palindrome.count++;
      result.palindrome.record.push(arr);
  } else {
      result.nonPalindrome.count++;
      result.nonPalindrome.record.push(arr);
  }
  }

  return result;
};

console.log(classifyPalindromes(input));