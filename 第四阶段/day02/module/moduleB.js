//这是 模块B
//引入 moduleA.js
import {a} from './meduleA.js';
import fun from './meduleA.js';
//暴露的名字多且长时
import * as obj from './meduleA.js';
//使用
obj.fun1();
obj.fun2();
//注意：在模块B中不要随意修改 模块A中的接口

let sum = fun(30);
console.log(a);