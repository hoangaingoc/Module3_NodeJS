// 1.Viết một hàm arrow có tên là sumArray, nhận vào một mảng số nguyên và trả về tổng của các phần tử trong mảng.
// 2.Viết một hàm arrow có tên là squareArray, nhận vào một mảng số nguyên và trả về một mảng mới với các phần tử là bình phương của các phần tử trong mảng ban đầu.
// 3.Viết một hàm arrow có tên là filterGreaterThan, nhận vào một mảng số nguyên và một giá trị nguyên, trả về một mảng mới chứa các phần tử lớn hơn giá trị được đưa vào.
// 4.Viết một hàm arrow có tên là maxInArray, nhận vào một mảng và trả về một giá tại lớn nhất trong mảng ban đầu.
// 5.Viết một hàm arrow có tên là avgArray, nhận vào một mảng và trả về trung bình các giá trị trong mảng ban đầu.
// 6.Sử dụng map để chuyển đổi một mảng các số thành một mảng mới chứa bình phương của các số.
// 7.Sử dụng map để chuyển đổi một mảng các chuỗi thành một mảng mới chứa độ dài của mỗi chuỗi.
// 8.Sử dụng map để chuyển đổi một mảng các đối tượng thành một mảng mới chứa giá trị của một thuộc tính cụ thể.
// 9.Sử dụng map để chuyển đổi một mảng các số thành một mảng mới chứa chuỗi "even" hoặc "odd" tương ứng với mỗi số.
// 10.Sử dụng map để chuyển đổi một mảng các từ thành một mảng mới chứa các từ viết hoa.

let arr = [2, 5, 8, 4, 3, 7, 8, 10];
let sumArray = arr.reduce((num, e) => num + e, 0); // bài 1
let squareArray = arr => arr.map(e => e * e); // bài 2
let filterGreaterThan = (arr, value) => arr.filter(num => num > value); // bài 3
let maxInArray = arr => Math.max(...arr); // bài 4
let avgArray = arr => sumArray/arr.length; // bài 5

let newArr = []; // bài 6
arr.map(e => {
    newArr.push(e * e);
})

console.log(sumArray);
console.log(squareArray(arr));
console.log(filterGreaterThan(arr, 5));
console.log(maxInArray(arr));
console.log(avgArray(arr));
console.log(newArr);

let strings = ["db,mca kd;", "dkjsja", "uhncal"]
let getLengths = arr => arr.map(str => str.length); // bài 7

console.log(getLengths(strings));

let obj = [
    { ten: "Nga", tuoi: 43 },
    { ten: "Lan", tuoi: 41 },
    { ten: "Thong", tuoi: 44 }
];
let getObj = (arr, prop) => arr.map(obj => obj[prop]); // bài 8

console.log(getObj(obj, "ten"));
console.log(getObj(obj, "tuoi"));

let evenOdd = arr => arr.map(num => (num % 2 === 0 ? "even" : "odd")); // bài 9

console.log(evenOdd(arr));

let upper = arr => arr.map(str => str.toUpperCase()); // bài 10

console.log(upper(strings));
