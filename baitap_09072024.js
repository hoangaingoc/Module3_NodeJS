//     Phân tách mảng colors gồm ba phần tử và lấy ra các giá trị của các phần tử đó vào các biến firstColor, secondColor, và thirdColor.
const colors = ['red', 'green', 'blue'];
const [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor, secondColor, thirdColor);

//     Phân tách đối tượng person có hai thuộc tính là name và age vào các biến tương ứng.
const person = { name: 'Ngoan', age: 30, gender: "Nữ" };
const { name, age } = person;
console.log(name, age);

//     Tạo một mảng mới bằng cách nối hai mảng arr1 và arr2 vào một mảng mới sử dụng spread operator.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const newArr12 = [...arr1, ...arr2];
console.log(newArr12);

//     Tạo một bản sao của mảng originalArray bằng cách sử dụng spread operator.
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray);

//     Thêm một phần tử số 4 vào cuối mảng arr bằng cách sử dụng spread operator.
const arr = [1, 2, 3];
const newArr = [...arr, 4];
console.log(newArr);

//     Cho hai đối tượng obj1 và obj2, viết một đoạn mã sử dụng Spread Operator để tạo một đối tượng mới chứa tất cả các thuộc tính từ cả hai đối tượng.
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);

//     Cho một đối tượng person với các thuộc tính như name, age, và gender, viết một đoạn mã sử dụng Spread Operator để thêm một thuộc tính mới là country có giá trị là "Vietnam".
const person2 = {name: 'Ngoan', age: 25, gender: 'female'};
const updatedPerson = {...person2, country: 'Vietnam' };
console.log(updatedPerson);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     Sử dụng filter để lọc ra các số chẵn từ một mảng số nguyên.
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]

//     Sử dụng filter để lọc ra các chuỗi có độ dài lớn hơn một ngưỡng cho trước từ một mảng các chuỗi.
const strings = ['abc', 'a1b2c3', '123', 'xyz'];
const minLength = 3;
const filteredStrings = strings.filter(str => str.length > minLength);
console.log(filteredStrings);

//     Sử dụng filter để lọc ra các đối tượng từ một mảng các đối tượng dựa trên một điều kiện cho trước.
const objects2 = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Jack' }
];
const filteredObjects = objects2.filter(obj => obj.id > 1);
console.log(filteredObjects); // [{ id: 2, name: 'Jane' }, { id: 3, name: 'Jack' }]

//     Sử dụng filter để lọc ra các số nguyên tố từ một mảng số nguyên.
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

const primeNumbers = numbers.filter(isPrime);
console.log(primeNumbers);

//     Sử dụng filter để lọc ra các chuỗi không chứa ký tự số từ một mảng các chuỗi.
const noNumbers = strings.filter(str => !/\d/.test(str));
console.log(noNumbers);

//     Sử dụng reduce để tính tổng của các số trong một mảng số nguyên.
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

//     Sử dụng reduce để tính tích của các số trong một mảng số nguyên.
const product = numbers.reduce((acc, curr) => acc * curr, 1);
console.log(product);

//     Sử dụng reduce để tìm giá trị lớn nhất trong một mảng số nguyên.
const max = numbers.reduce((acc, curr) => (curr > acc ? curr : acc), numbers[0]);
console.log(max);

//     Sử dụng reduce để đếm số lần xuất hiện của mỗi phần tử trong một mảng.
const elements = ['a', 'b', 'a', 'c', 'b', 'a'];
const counts = elements.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
}, {});
console.log(counts);

//     Sử dụng reduce để tính tổng của các giá trị số trong một mảng các đối tượng, với mỗi đối tượng có một thuộc tính số cần tính tổng.
const objects3 = [
    { value: 10 },
    { value: 20 },
    { value: 30 }
];
const total = objects3.reduce((acc, curr) => acc + curr.value, 0);
console.log(total);