var num: number  = 123;
num =  9999;
console.log(num)

// 第一种定义数组方式

var arr:number[] = [1,1,1,1,1,1,2]
console.log(arr)

// 第二种定义数组方式

var arr2:Array<number> = [1,3,3,4,5,]

console.log(arr2)


// 第三种定义数组方式

var arr4:any[] = [1,3,3,'strrrr', true]
console.log(arr4);

// 元祖数据类型  属于数组的一种

var arr3:[number, string] = [123,'4444'];
console.log(arr3); 

//枚举类型 
enum Flag {success = 1, false = 2};
let s : Flag = Flag.success;
console.log(s);

// 如果枚举没有赋值 那么它的值是下标
 enum Color {blue, red , 'orange'};
let s2: Color = Color.red
console.log(s2);

enum Error1 {'undefined' = -1, 'null' = -2, 'success' = 1}
var err1 : Error1 = Error1.null
console.log(err1);
 
// 任意类型 any 的用处
var d1 : any  = 1

var oBox  = document.getElementById('box');
oBox.style.color = 'red'

// null 和 undefined  其他类型 （never类型）的子类型

// 定义未赋值 就是undefined
var num2: number;
console.log(num2);

var num3: number | undefined
num3 = 1111
console.log(num3);


// 这么写 ts 报错
// var num4 : null
// num4 = 133
// console.log(num4);

// 一个元素可以设置多个类型
// 一个元素可能是 number类型，也可能是null类型，也可能是undefined类型
var num5:number | null | undefined
// num5 = 333
console.log(num5);



// ==============================

// 方法

// void类型 ：typescript 的void表示没有任何类型，一般用于定义方法的时候没有返回值
// 正确写法
function run (){
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
run()

// never类型： 是其他类型 （包括 null 和undefined）的子类型，戴白你从不会出现的值

// 这意味着 声明never的 变量只能被never类型所赋值
// 具体 例如 
var n1: undefined;
// n1 = 2 // 这么写报错，因为n1是never类型；里面的undefined类型，所以只能赋值undefined
 
// var n2:never
// n2 = (() => {
//     throw new Error('错误')
// })()


// ==============================

// 函数

// 函数声明方式
function fn1 ():number {
    return 111;
}
console.log(fn1());

// 匿名函数方式
var fn2 = function():number {
    return 456;
}
console.log(fn2());


// ts中定义方法传参

function fn3(name:string, age: number): string {
    return `${name},${age}`
}
// 这么传  会报错
// console.log(fn3('damon', 'jdls;ajdflkjasl'))
console.log(fn3('damon', 9))

var fn4 = function(name: string, age: number): string{
    return `${name}, ${age}`
}
console.log(fn4('damon2', 8))


// 没有返回值的方法
function fn5() :void{
    console.log('void====');
}
console.log(fn5());

// 可选参数 ?
//注意可选参数配置到参数的最后面

function fn6(name:string, age?:number):string{
    if(age) {
        return `${name}, ${age}`
    }else {
        return `${name},年龄保密`
    }
}
console.log(fn6('damon3', 18));

//默认参数
// es5 没法设置，es6和ts可以设置 

function fn7(name:string, age:number = 20):string{
    if(age) {
        return `${name}, ${age}`
    }else {
        return `${name},年龄保密`
    }
}
console.log(fn7('damon4',30));


// 剩余参数   三点运算符
function fn8(...result:number[]):number{
    var sum = 0;
    for(var i=0;i<result.length;i++){
        sum+=result[i]
    }
    return sum
}

console.log(fn8(1,2,3,4,5,6,7));

// ts 函数重载
// 重载：同名的函数，传入不同的参数，传出不同的结果 
// es5 中出现同名方法，下面的会替换上面的方法

// ts中方法的重载

function getInfo(name:string):string;

function getInfo(age: number):string;

function getInfo(str:any):string{
    if(typeof(str) === 'string') {
        return `name: ${str}`
    } else if (typeof(str) === 'number'){
        return `number:${str}`
    } else {
        return 'error'
    }
}

console.log(getInfo(99999))
console.log(getInfo('stringooooooo'))
// console.log(getInfo(true)) //错误写法

 
// 箭头函数
// this指向问题，指向上下文 

// 构造函数

function Person() {
    this.name = 'damon' // 属性
    this.age = 20
    this.run = function() { /* 实例方法*/
        console.log('Damon is run ')
    }
}
// 静态方法
Person.fetchInfo = function() {
    console.log('我是静态方法')
}


// 原型链上面的属性会被多个实例共享，构造函数不会
Person.prototype.sex = 'nan'

Person.prototype.work = function(){
    console.log('Damon is work')
}

var p1  = new Person()
console.log(p1.name);
console.log(p1.sex);
p1.run()
p1.work()

//调用静态方法
Person.fetchInfo()


// web类继承  Person类 原型链对象冒充组合继承模式
function Web(){
    Person.call(this) // 对象冒充继承 ，所以 Web上拥有了Person里面的属性和方法
}
var web1 = new Web()
console.log(web1.name);
// 对象冒充继承 能继承类上的属性和方法 ， 没法继承原型链上的方法 和属性
// console.log(web1.sex); // undefined 
// web1.work(); // 报错 
 
function Web2 () {

}
Web2.prototype = new Person () // 原型链实现基础
var web2 = new Web2()
web2.work() // 执行成功
//  说明原型链实现的继承既可以实现构造函数上的属性&方法，也可以实现构造函数原型链上的属性&方法
 

// 接口 interface
// 任意属性
// 有时候我们希望一个接口允许有任意的属性，可以使用如下方式：  
// 使用 [propName: string] 定义了任意属性取 string 类型的值。
// 需要注意的是，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：
// 例如，当propName 的类型为 string的时候，因为age的属性为number不是 string的子集  所以编译报错
interface Person2 {
    name: string;
    age? : number;
    [propName: string]: any;
}
let p2: Person2 = {
    name: 'damon-person2',
    gender: 'man'
}
console.log('p2:', p2);

// 用接口表示数组

interface numberArray {
    [index: number]: number
}
let arr5: numberArray = [1,2,3,4,5]
console.log('arr5', arr5);

// ts 里面定义类
class Person3 {
    name: string;
    constructor(n:string) {
        this.name = n
    }

   getName(): string {
       return this.name
   }
   setName(name): void {
      this.name = name
   }
   run():string {
        return `${this.name} is run 父类`
   }
}

var p3 = new Person3('张三')
console.log('p3.getName()', p3.getName());
p3.setName('李四')
console.log('p3 setName .getName()', p3.getName()); 

// ts中的继承 extends super  , 如果子类和父类有相同的属性和方法, 优先使用子类里面的
 
class Web3 extends Person3{
    constructor(name:string) {
        super(name) // 初始化父类的构造函数
    }
    // run():string{
    //     return `${this.name} is run 子类`
    // }
}
var web_3 = new Web3('王五')
console.log('web_3', web_3.run());


// 类里面的修饰符 
// typescript 里面定义属性的时候给我们提供了三种修饰符
/*
    public    公有      在类里面 子类 类外都可以访问
    protected 保护类型   在类里面 子类 里面都可以访问 类外无法访问
    private   私有类型   在类里面可以访问  子类 类外都无法访问
*/