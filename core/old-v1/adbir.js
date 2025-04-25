function inputStream(input) {
    var pos = 0, line = 1, col = 0
    return {
        next : next, 
        future : future, 
        eol : eol,
        ctx : ctx
    };
    function next() { // looks at the next character, but also increments the position
        var ch = input.charAt(pos++)
        if (ch == '\n') line++, col = 0; else col++;
        return ch;
    }
    function future() { // looks at the next character, without increment the position
        return input.charAt(pos);
    }
    function eol() { // checks if the end of the input has been reached
        return future() == "";
    }
    function ctx(msg) { // throws an error with a message, line and column number
        throw new Error(msg + " (" + line + ":" + col + ")")
    }
}

var sampleCode = inputStream("hello world")
while (!sampleCode.eol()) {
    console.log(sampleCode.next());
}

