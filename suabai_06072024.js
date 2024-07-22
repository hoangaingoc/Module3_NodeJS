// 1.Viết một hàm arrow có tên là sumArray, nhận vào một mảng số nguyên và trả về tổng của các phần tử trong mảng.
const sumArray = (arr) => {
    let sum = arr.reduce((acc, num) => acc + num, 0);
}
let sum = sumArray([2, 5, 8, 4, 3, 7, 8, 10]);
console.log(sum);

// 2.Viết một hàm arrow có tên là squareArray, nhận vào một mảng số nguyên và trả về một mảng mới với các phần tử là bình phương của các phần tử trong mảng ban đầu.
const squareArray = (arr) => {
  let newArr =arr.map((item) => {
      return item * item;
    })
    return newArr;
}
console.log(squareArray[2, 5, 8, 4, 3, 7, 8, 10]);

// 3.Viết một hàm arrow có tên là filterGreaterThan, nhận vào một mảng số nguyên và một giá trị nguyên, trả về một mảng mới chứa các phần tử lớn hơn giá trị được đưa vào.

// 4.Viết một hàm arrow có tên là maxInArray, nhận vào một mảng và trả về một giá tại lớn nhất trong mảng ban đầu.
// 5.Viết một hàm arrow có tên là avgArray, nhận vào một mảng và trả về trung bình các giá trị trong mảng ban đầu.
// 6.Sử dụng map để chuyển đổi một mảng các số thành một mảng mới chứa bình phương của các số.

// 7.Sử dụng map để chuyển đổi một mảng các chuỗi thành một mảng mới chứa độ dài của mỗi chuỗi.
// 8.Sử dụng map để chuyển đổi một mảng các đối tượng thành một mảng mới chứa giá trị của một thuộc tính cụ thể.
// 9.Sử dụng map để chuyển đổi một mảng các số thành một mảng mới chứa chuỗi "even" hoặc "odd" tương ứng với mỗi số.
// 10.Sử dụng map để chuyển đổi một mảng các từ thành một mảng mới chứa các từ viết hoa.


