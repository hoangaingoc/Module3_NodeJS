// let arr = [2, 5, 8, 4];
// let brr = arr;
// let crr = [...arr];
// // brr = [2, 5, 8, 4];
// // brr.push(10);
// arr.push(10);
// console.log(arr);
// console.log(brr);
// console.log(crr);

let o1 = {
    name: "A",
    age: 20
}

let o2 = o1;
let o3 = {...o1};
o2.age = 21;

console.log(o1);
console.log(o2);
console.log(o3);



// let sum = 0;
// let brr = arr.filter(e => {
//     sum += e;
//     return e > 5;
// })
// console.log(sum);
// console.log(brr);
//
// // let sum = arr.reduce((e,tong) => tong + e, 5)
// // console.log(sum);
//
// let xyz = arr.find(x => x > 5);
// console.log(xyz)
//
// let abc = arr.filter(x => x > 5)
// console.log(abc)