
var print = function () {
    console.log(a);
    // var a = 6;
}
print()
var a = 5;

print();
let counter = 0

const count = () => {
    counter++
    console.log(counter)
}

const throttle = function (fn, delay) {
    let flag = true;
    return function () {
        if(flag) {
            fn()
            flag= false;
            setTimeout(() => {
                flag = true
            }, delay) 
        }
    }
}

const debounce = function (fn, delay) {
    let timer
    return function (...args) {
        const context = this;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args)
        }, delay)
    }
}

const thr = debounce(count, 1000)


let  obj = {
    f :"k",
    l : "l",
    g : function (arg1, arg2) {
        console.log(this.f, this.l, arg1, arg2)
    }
}

let obj2 = {
    f : "k1",
    l : "l1"
}

let f = obj.g.bind(obj2, 2, 3);
f();
