//THIS IS TOKENIZER


export const TokenType = {
    Number: 0,
    Identifier: 1,
    Equals: 2,
    OpenParen: 3,
    CloseParen: 4,
    BinaryOperator: 5,
    Let: 6,
} 


export const Token = { // token
    value: '',
    type: TokenType,
};

function token(value = "", type) {
    return {value, type};
  }

export function tokenize(sourceCode) {
    const tokens = new Array();
    const src = sourceCode.split(""); // split by whitespace
    
    //building each token until end of file
    while (src.length > 0) {
        if (src[0] == ")"){
            tokens.push(token(src.shift(), TokenType.OpenParen));
        } else if (src[0] == ")") {
            tokens.push(token(src.shift(), TokenType.CloseParen));
        } else if (src[0] == "+" || src[0] == "-" || src[0] == "*" || src[0] == "/"){
            tokens.push(token(src.shift(), TokenType.BinaryOperator));
        } else if (src[0] == "=") {
            tokens.push(token(src.shift(), TokenType.Equals));
        } else {

            
        }
    }

    return tokens
    
}

//so basically we are going to have a token for each of the following typess
//number, identifier, equals sign, open paren, close paren, binary operator, let keyword

// why do we refer them by integart for example number = 0, indefienr = 1 etc ?
// because we are going to use them in a swtich case statement and its easier and saves more memory
// alright i understand i am going to read n fimallizere with the logic n codebase u did here 
// cool let me know if there are any issues or if u have any questions
// push changes to the github btw peridodically so we can version control it 
// ok but i will join and teach me how to do it properly or else you will get mad and half the group alr hates me

// ok so go to source control under tab 