var calcul = {
    op1 : document.getElementById("op1"),
    op2 : document.getElementById("op2"),
    add : function () {
        return Number(this.op1.value) + Number(this.op2.value);
    },
    substruct : function () {
        return this.op1.value - this.op2.value;
    },
    multiply : function () {
        return this.op1.value * this.op2.value;
    },
    divide : function () {
        if (Number(this.op2.value) != 0) {
            return this.op1.value / this.op2.value;
        } else {
            alert("can't devide by zero");
        }
    },
    doMath : function (operation) {
        if (operation === "+") {
            return this.add();
        } else if (operation === "-") {
            return this.substruct();
        } else if (operation === "*") {
            return this.multiply();
        } else if (operation === "/") {
            return this.divide();
        } else if (operation === "cos") {
            return Math.cos(this.op1.value);
        } else if (operation === "sin") {
            return Math.sin(this.op1.value);
        } else if (operation === "exp") {
            return Math.exp(this.op1.value);
        } else if (operation === "pow") {
            return Math.pow(this.op1.value, this.op2.value);
        }
    }
};

var result = document.getElementById("result");
var buttons = document.querySelectorAll("input[type=button]");
buttons[0].onclick = function () {
    result.value = calcul.doMath(buttons[0].value);
};
buttons[1].onclick = function () {
    result.value = calcul.doMath(buttons[1].value);
};
buttons[2].onclick = function () {
    result.value = calcul.doMath(buttons[2].value);
};
buttons[3].onclick = function () {
    result.value = calcul.doMath(buttons[3].value);
};
buttons[4].onclick = function () {
    result.value = calcul.doMath(buttons[4].value);
};
buttons[5].onclick = function () {
    result.value = calcul.doMath(buttons[5].value);
};
buttons[6].onclick = function () {
    result.value = calcul.doMath(buttons[6].value);
};
buttons[7].onclick = function () {
    result.value = calcul.doMath(buttons[7].value);
};
