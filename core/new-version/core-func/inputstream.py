from utility.debug_manager import debug 

class inputStream(): 
        
    def __init__(self, _input):
        self._input = _input
        
        self.Position = 0
        self.Line = 1
        self.Column = 0



    def move(self): # looks at the next character, and incrememts position 
        ch = self._input[self.Position]
        self.Position += 1

        if (ch == '\n'):
            self.Line += 1
            self.Column = 0
        else: 
            self.Column += 1
        return ch
        
    def future(self): # looks at the next character without incrementing
        if self.Position >= len(self._input):
            return ""
        return self._input[self.Position]
        
    def eol(self): # checks if the end of input has been reached
        return self.future() == "" 
        
    def context(self, msg): # throws an error with a message, line and column number
        raise Exception(f"{msg} ({self.Line}:{self.Column})")


test = inputStream("hello world\n this is line 2 \n this is line 3 but also the EOF end of file")
while not test.eol():
    print(f"CHAR: {test.move()} @ LINE : {test.Line}")
