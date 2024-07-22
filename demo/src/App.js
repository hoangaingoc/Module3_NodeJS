import logo from './logo.svg';
import './App.css';
let x = "10";
let obj={
  name: 'Hoàng Ngọc',
  age: '42'
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrObj = [
    {name: 'IP', price: 300},
    {name: 'SS 24', price: 250},
    {name: 'Motorola', price: 300}
]

function App() {
  return (
      <>
          {
            arrObj.map(product =>(
                <h2>{product.name}: {product.price}</h2>
            ))
          }
          <h1>Các sản phẩm có giá >=300</h1>
          {
              arrObj.map(product => (
                  <>
                      {product.price >= 300 && <h2>{product.name}: {product.price}</h2>}
                  </>
              ))
          }
        <h1>Hi {x}</h1>
        <h2>
          {obj.name} - {obj.age}
        </h2>
          {arr.map(e => (
              <span>{e}, </span>
          )
          )}
          {arr.map(e => {
              return (
                  <span>{e}, </span>
              )
          })}
          {true && <h2>123</h2>}

      </>
  );
}

export default App;
