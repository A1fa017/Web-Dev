let calculator = {
    read : function(a, b) {
        this.a = +prompt('a?')
        this.b = +prompt('b?')
    },
    sum : function() {
        return this.a + this.b
    },
    mul : function() {
        return this.a * this.b
    }
};

calculator.read()
alert(calculator.sum())
alert(calculator.mul())