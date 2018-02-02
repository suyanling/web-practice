// this.valueOf() 和 this 都能取到调用者自身的值
// Number.prototype.add=function(num) {
//     return this.valueOf() + num;
// }
// Number.prototype.minus=function(num) {
//     return this.valueOf() - num;
// }
// Number.prototype.multi=function(num) {
//     return this * num;
// }
// Number.prototype.div=function(num) {
//     return this / num;
// }
// Number.prototype.pow=function(num) {
//     return Math.pow(this, num)
// }

let calculate= {
    add: function(num) {
        return this + num;
    },
    minus: function (num) {
        return this - num;
    },
    multi: function (num) {
        return this * num;
    },
    div: function (num) {
        return this / num;
    },
    pow: function (num) {
        return Math.pow(this, num)
    }
}
// function mixin(...objs){
//     return objs.reduce((dest, src) => {
//         for (let key in src) {
//             dest[key] = src[key]
//         }
//         return dest;    
//     });
// }
// mixin(Number.prototype, calculate)
Number.prototype = Object.assign(Number.prototype, calculate)

let test = (123).add(1).minus(2).multi(3).div(4).pow(2);
console.log(test)


