"use strict";
/**
 * 可选参数：就是在形参后边添加问号‘？’
 * function 函数名(形参?:类型):返回值类型{
 *  }
 * 此时这里的实参可传可不传
 */
function anyPar(city) {
    console.log("\u6211\u60F3\u53BB" + city);
}
anyPar('郑州');
anyPar();
/**
 * 使用默认参数
 * function 函数名(形参1:类型,形参2:类型=默认值2):返回值类型{
 *  }
 */
function anyPar2(city, doSom) {
    console.log("\u6211\u60F3\u53BB" + city + "\u7136\u540E" + (doSom || '写代码'));
}
anyPar2('杭州');
