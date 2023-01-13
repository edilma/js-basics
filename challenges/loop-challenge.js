for (let index = 0; index < 10; index++) {
    console.log(`${index+1} I will never give up`);    
}
function numberVowels(word=""){
    const vowels =["a","e","i","o","u"];
    let count =0;
    const theWord = word.toLowerCase();
    for (let i = 0; i < theWord.length; i++) {
        if (vowels.includes(theWord[i])) {
            count++;
        } ;
    }
    return count;
}

//to finish function
function isVowel(letter=''){
    const vowels =["a","e","i","o","u"];
    if (vowels.includes(letter.toLowerCase)) {
        return true;
}

function numberVowels2(arr){
    let count = 0;
    count = arr.filter(x)
    
    

}
const sentence = "Me llamo Edilma";
const vowelsCount = numberVowels(sentence);
console.log(`${sentence} has ${vowelsCount} vowels`);