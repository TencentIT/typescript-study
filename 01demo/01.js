var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var num = 123;
num = 9999;
console.log(num);
// 第一种定义数组方式
var arr = [1, 1, 1, 1, 1, 1, 2];
console.log(arr);
// 第二种定义数组方式
var arr2 = [1, 3, 3, 4, 5,];
console.log(arr2);
// 第三种定义数组方式
var arr4 = [1, 3, 3, 'strrrr', true];
console.log(arr4);
// 元祖数据类型  属于数组的一种
var arr3 = [123, '4444'];
console.log(arr3);
//枚举类型 
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["false"] = 2] = "false";
})(Flag || (Flag = {}));
;
var s = Flag.success;
console.log(s);
// 如果枚举没有赋值 那么它的值是下标
var Color;
(function (Color) {
    Color[Color["blue"] = 0] = "blue";
    Color[Color["red"] = 1] = "red";
    Color[Color["orange"] = 2] = "orange";
})(Color || (Color = {}));
;
var s2 = Color.red;
console.log(s2);
var Error1;
(function (Error1) {
    Error1[Error1["undefined"] = -1] = "undefined";
    Error1[Error1["null"] = -2] = "null";
    Error1[Error1["success"] = 1] = "success";
})(Error1 || (Error1 = {}));
var err1 = Error1["null"];
console.log(err1);
// 任意类型 any 的用处
var d1 = 1;
var oBox = document.getElementById('box');
oBox.style.color = 'red';
// null 和 undefined  其他类型 （never类型）的子类型
// 定义未赋值 就是undefined
var num2;
console.log(num2);
var num3;
num3 = 1111;
console.log(num3);
// 这么写 ts 报错
// var num4 : null
// num4 = 133
// console.log(num4);
// 一个元素可以设置多个类型
// 一个元素可能是 number类型，也可能是null类型，也可能是undefined类型
var num5;
// num5 = 333
console.log(num5);
// ==============================
// 方法
// void类型 ：typescript 的void表示没有任何类型，一般用于定义方法的时候没有返回值
// 正确写法
function run() {
    console.log('run');
}
// 错误写法  因为函数里面没有返回值， 除了 void外，其他的都要有返回值，包括undefined
// function run (): number{
//     console.log('run');
// }
// 正确写法
// function run () :number {
//     return 123;
// }
run();
// never类型： 是其他类型 （包括 null 和undefined）的子类型，戴白你从不会出现的值
// 这意味着 声明never的 变量只能被never类型所赋值
// 具体 例如 
var n1;
// n1 = 2 // 这么写报错，因为n1是never类型；里面的undefined类型，所以只能赋值undefined
// var n2:never
// n2 = (() => {
//     throw new Error('错误')
// })()
// ==============================
// 函数
// 函数声明方式
function fn1() {
    return 111;
}
console.log(fn1());
// 匿名函数方式
var fn2 = function () {
    return 456;
};
console.log(fn2());
// ts中定义方法传参
function fn3(name, age) {
    return name + "," + age;
}
// 这么传  会报错
// console.log(fn3('damon', 'jdls;ajdflkjasl'))
console.log(fn3('damon', 9));
var fn4 = function (name, age) {
    return name + ", " + age;
};
console.log(fn4('damon2', 8));
// 没有返回值的方法
function fn5() {
    console.log('void====');
}
console.log(fn5());
// 可选参数 ?
//注意可选参数配置到参数的最后面
function fn6(name, age) {
    if (age) {
        return name + ", " + age;
    }
    else {
        return name + ",\u5E74\u9F84\u4FDD\u5BC6";
    }
}
console.log(fn6('damon3', 18));
//默认参数
// es5 没法设置，es6和ts可以设置 
function fn7(name, age) {
    if (age === void 0) { age = 20; }
    if (age) {
        return name + ", " + age;
    }
    else {
        return name + ",\u5E74\u9F84\u4FDD\u5BC6";
    }
}
console.log(fn7('damon4', 30));
// 剩余参数   三点运算符
function fn8() {
    var result = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}
console.log(fn8(1, 2, 3, 4, 5, 6, 7));
function getInfo(str) {
    if (typeof (str) === 'string') {
        return "name: " + str;
    }
    else if (typeof (str) === 'number') {
        return "number:" + str;
    }
    else {
        return 'error';
    }
}
console.log(getInfo(99999));
console.log(getInfo('stringooooooo'));
// console.log(getInfo(true)) //错误写法
// 箭头函数
// this指向问题，指向上下文 
// 构造函数
function Person() {
    this.name = 'damon'; // 属性
    this.age = 20;
    this.run = function () {
        console.log('Damon is run ');
    };
}
// 静态方法
Person.fetchInfo = function () {
    console.log('我是静态方法');
};
// 原型链上面的属性会被多个实例共享，构造函数不会
Person.prototype.sex = 'nan';
Person.prototype.work = function () {
    console.log('Damon is work');
};
var p1 = new Person();
console.log(p1.name);
console.log(p1.sex);
p1.run();
p1.work();
//调用静态方法
Person.fetchInfo();
// web类继承  Person类 原型链对象冒充组合继承模式
function Web() {
    Person.call(this); // 对象冒充继承 ，所以 Web上拥有了Person里面的属性和方法
}
var web1 = new Web();
console.log(web1.name);
// 对象冒充继承 能继承类上的属性和方法 ， 没法继承原型链上的方法 和属性
// console.log(web1.sex); // undefined 
// web1.work(); // 报错 
function Web2() {
}
Web2.prototype = new Person(); // 原型链实现基础
var web2 = new Web2();
web2.work(); // 执行成功
var p2 = {
    name: 'damon-person2',
    gender: 'man'
};
console.log('p2:', p2);
var arr5 = [1, 2, 3, 4, 5];
console.log('arr5', arr5);
// ts 里面定义类
var Person3 = /** @class */ (function () {
    function Person3(n) {
        this.name = n;
    }
    Person3.prototype.getName = function () {
        return this.name;
    };
    Person3.prototype.setName = function (name) {
        this.name = name;
    };
    Person3.prototype.run = function () {
        return this.name + " is run \u7236\u7C7B";
    };
    return Person3;
}());
var p3 = new Person3('张三');
console.log('p3.getName()', p3.getName());
p3.setName('李四');
console.log('p3 setName .getName()', p3.getName());
// ts中的继承 extends super
var Web3 = /** @class */ (function (_super) {
    __extends(Web3, _super);
    function Web3(name) {
        return _super.call(this, name) || this; // 初始化父类的构造函数
    }
    return Web3;
}(Person3));
var web_3 = new Web3('王五');
console.log('web_3', web_3.run());
