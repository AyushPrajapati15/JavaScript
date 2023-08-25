console.log(alert("Hello world!"));

function fact(num) {
    if (num == 0) {
        return 0;
    }
    else if (num == 1) {
        return 1;
    }
    else
        return num * fact(num - 1);
}

console.log(fact(5));
