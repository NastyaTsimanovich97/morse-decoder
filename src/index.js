const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let array_code;
    let array_code_10=[];
    let letter_morse='';
    let array_morse=[];
    let result=[];
    let letter='';

    array_code=expr.split("");
    for (let i = 0; i < array_code.length; i+=10) {
        array_code_10.push(array_code.slice(i, i + 10));
    }
    // console.log(array_code_10);
    
    for(let i=0; i<array_code_10.length; i++){
       for(let j=0; j<10; j++){
        //    console.log(array_code_10[i][j]);
            if(array_code_10[i][j]==1 && array_code_10[i][j+1]==0){
                letter_morse+='.';
                j++;
            }
            if(array_code_10[i][j]==1 && array_code_10[i][j+1]==1){
                letter_morse+='-';
                j++;
            }
            if(array_code_10[i][j]=="*"){
                letter_morse+='';
                j+=10;
            }
           
       }    
       array_morse.push(letter_morse);
       letter_morse='';
    //    console.log(array_morse);

    }
    for (let y=0; y<array_morse.length; y++){
        if(array_morse[y]!=''){
         letter=MORSE_TABLE[array_morse[y]];
         result.push(letter);
        }
        else{
            result.push(' ');
        }
    }
    result.join(',');
    // console.log(result.join(''));
    return result.join('');
}

module.exports = {
    decode
}