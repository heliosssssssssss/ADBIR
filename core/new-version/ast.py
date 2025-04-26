from typing import Literal
from typing import TypedDict
from typing import List

NodeType = Literal[
    "Program",
    "NumericLiteral",
    "Identifier",
    "BinaryExpr"
]

class Stmt(TypedDict):
    kind: NodeType

class Program(Stmt):
    kind: Literal["Program"]
    body: List[Stmt]

class Expr(Stmt):
    pass

class BinaryExpr(Expr):
    kind: Literal["BinaryExpr"]
    left: Expr
    right: Expr
    operator: str

class Identifier(Expr):
    kind: Literal["Identifier"]
    symbol: str

class NumericLiteral(Expr):
    kind: Literal["NumericLiteral"]
    value: float