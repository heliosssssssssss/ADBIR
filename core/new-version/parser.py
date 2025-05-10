from ast import Stmt, Program, Expr, BinaryExpr, NumericLiteral, Identifier
from lexer import tokenize, Token, TokenType


class Parser:
    def __init__(self):
        self.tokens: list[Token] = []

    def not_eof(self) -> bool:
        return self.tokens[0]["type"] != TokenType.EOF

    def _at(self) -> "Token":
        return self.tokens[0]

    def _eat(self) -> "Token":
        prev = self.tokens.pop(0)
        return prev

    def _expect(self, type: TokenType, err: str) -> "Token":
        prev = self.tokens.pop(0)
        if not prev or prev["type"] != type:
            raise SyntaxError(f"Parser Error: {err}, Found: {prev}, Expected: {type}")
        return prev

    def produceAST(self, sourceCode: str) -> Program:
        self.tokens = tokenize(sourceCode)
        program: Program = {
            "kind": "Program",
            "body": [],
        }
        while self.not_eof():
            program["body"].append(self._parse_stmt())
        return program

    def _parse_stmt(self) -> "Stmt":
        return self._parse_expr()

    def _parse_expr(self) -> "Expr":
        return self._parse_additive_expr()

    def _parse_additive_expr(self) -> "Expr":
        left = self._parse_multiplicative_expr()
        while self._at().value in ["+", "-"]:
            operator = self._eat().value
            right = self._parse_multiplicative_expr()
            left = {
                "kind": "BinaryExpr",
                "left": left,
                "right": right,
                "operator": operator,
            }
        return left

    def _parse_multiplicative_expr(self) -> "Expr":
        left = self._parse_primary_expr()
        while self._at().value in ["/", "*", "%"]:
            operator = self._eat().value
            right = self._parse_primary_expr()
            left = {
                "kind": "BinaryExpr",
                "left": left,
                "right": right,
                "operator": operator,
            }
        return left

    



    
