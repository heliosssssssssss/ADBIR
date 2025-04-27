from ast import Stmt, Program, Expr, BinaryExpr, NumericLiteral, Identifier
from lexer import tokenize, Token, TokenType

class Parser:
    def __init__(self):
        self.tokens: list[Token] = []

    def not_eof(self)-> bool:
        return self.tokens[0]["type"] != TokenType.EOF

    def produceAST(self,sourceCode: str)-> Program:
        self.tokens = tokenize(sourceCode)
        program: Program = {
            "kind":"Program",
            "body": [], 
        }
        #parse until end of file
        while self.not_eof():
            program["body"].append(self.parse_stmt())

        return program
    
    def _parse_stmt(self) -> "Stmt":
        return self._parse_expr()
    

    
