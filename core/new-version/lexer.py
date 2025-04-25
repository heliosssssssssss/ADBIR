from enum import Enum
from typing import List, Dict

class TokenType(Enum):
    Number = 0
    Identifier = 1
    Let = 2
    BinaryOperator = 3
    Equals = 4
    OpenParen = 5
    CloseParen = 6

KEYWORDS: Dict[str, TokenType] = {
    "let": TokenType.Let,
}


class Token:
    def __init__(self, value: str, type: TokenType):
        self.value = value  # contains the raw value as seen inside the source code.
        self.type = type    # tagged structure.

    def __repr__(self):
        return f"Token(value={self.value}, type={self.type})"


def token(value: str = "", type: TokenType = None) -> Token:
    return Token(value, type)


def isalpha(src: str) -> bool:
    return src.upper() != src.lower()


def isskippable(str: str) -> bool:
    return str == " " or str == "\n" or str == "\t"

# Returns whether the character is a valid integer -> [0-9]
def isint(str: str) -> bool:
    c = ord(str[0])
    bounds = [ord("0"), ord("9")]
    return bounds[0] <= c <= bounds[1]

# Returns a list of tokens.
def tokenize(source_code: str) -> List[Token]:
    tokens: List[Token] = []
    src = list(source_code)

    # produce tokens until the EOF is reached.
    while len(src) > 0:
        if src[0] == "(":
            tokens.append(token(src.pop(0), TokenType.OpenParen))
        elif src[0] == ")":
            tokens.append(token(src.pop(0), TokenType.CloseParen))
        elif src[0] in ["+", "-", "*", "/"]:
            tokens.append(token(src.pop(0), TokenType.BinaryOperator))
        elif src[0] == "=":
            tokens.append(token(src.pop(0), TokenType.Equals))
        else:
            if isint(src[0]):
                num = ""
                while len(src) > 0 and isint(src[0]):
                    num += src.pop(0)
                # append new numeric token.
                tokens.append(token(num, TokenType.Number))
            elif isalpha(src[0]):
                ident = ""
                while len(src) > 0 and isalpha(src[0]):
                    ident += src.pop(0)

                # CHECK FOR RESERVED KEYWORDS
                reserved = KEYWORDS.get(ident)
                if reserved:
                    tokens.append(token(ident, reserved))
                else:
                    # Unrecognized name must mean user-defined symbol.
                    tokens.append(token(ident, TokenType.Identifier))
            elif isskippable(src[0]):
                src.pop(0)
            else:
                print(
                    "Unrecognized character found in source: ",
                    ord(src[0]),
                    src[0]
                )
                exit(1)

    return tokens


if __name__ == "__main__":
    source_code = "hello world sigmas"
    
    tokens = tokenize(source_code)
    for token in tokens:
        print(token)

#testing adam new branch