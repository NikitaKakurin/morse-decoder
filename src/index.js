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
    let MorseTableDecodedToBin ={};
    let firstdigit = 0;
    let result = '';
    for(i in MORSE_TABLE){
        MorseTableDecodedToBin[i.replace(/\./g, '10').replace(/-/g, '11').padStart(10,'0')] = MORSE_TABLE[i];
    };
    MorseTableDecodedToBin['**********'] = ' ';
    while (firstdigit < expr.length){
        result +=  MorseTableDecodedToBin[expr.slice(firstdigit, firstdigit + 10)]
        firstdigit += 10;
    };
    return result;
}

module.exports = {
    decode
}