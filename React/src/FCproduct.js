import {useState} from "react";

export function FCproduct() {
    const [products, setProducts] = useState([
        {id: 1, name: 'Filp 6', price: 26000000},
        {id: 2, name: 'Motorola 50 Ultra', price: 18000000},
        {id: 3, name: 'IP pro max', price: 28000000},
    ],);
    const [newProduct, setNewProduct] = useState({id: '', name: '', price: ''});
    const [list, setList] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setNewProduct({...newProduct, [name]: value});
    };

    const addProduct = () => {
        if (newProduct.id && newProduct.name && newProduct.price) {
            setProducts([...products, newProduct]);
            setNewProduct({id: '', name: '', price: ''});
        }
    };
    const sortProductsAscending = () => {
        const sortedProducts = [...products].sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        setProducts(sortedProducts);
    };
    const sortProductsDecrease = () => {
        const sortedProducts = [...products].sort((a, b) => - parseFloat(a.price) + parseFloat(b.price));
        setProducts(sortedProducts);
    };
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div>
                <h2>Danh sách sản phẩm</h2>
                <button onClick={sortProductsAscending}>Tăng dần</button>
                <button onClick={sortProductsDecrease}>Giảm dần</button>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Tìm theo tên"
                />
                <div>
                    <input
                        type="text"
                        name="id"
                        value={newProduct.id}
                        onChange={handleInputChange}
                        placeholder="ID"
                    />
                    <input
                        type="text"
                        name="name"
                        value={newProduct.name}
                        onChange={handleInputChange}
                        placeholder="Name"
                    />
                    <input
                        type="text"
                        name="price"
                        value={newProduct.price}
                        onChange={handleInputChange}
                        placeholder="Price"
                    />
                    <button onClick={addProduct}>Thêm mới</button>
                </div>
                {filteredProducts.map((product, index) => (
                    <h4 key={index}>
                        {product.id}: {product.name} - {product.price}
                    </h4>
                ))}
            </div>
        </>
    );
}
