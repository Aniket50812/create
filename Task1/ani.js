function reverseWords(input) {
    let words = input.split(' ');   
    let reversedWords = words.reverse();
    let output = reversedWords.join(' ');
    
    return output;
}
let input = 'Hi all welcome';          ##welcome all Hi
let output = reverseWords(input);
console.log(output);
