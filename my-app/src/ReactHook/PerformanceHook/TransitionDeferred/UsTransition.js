import React, { useState, useTransition } from "react";

import { generateProduct } from "./data";
import ProductList from "./components/ProductsList";

//비교를 위해 관리자도구 Performance CPU 6x slowdown
const dummyProducts = generateProduct();
function filterProducts(filterTerm) {
    if (!filterTerm) {
        return dummyProducts
    }
    return dummyProducts.filter((product) => product.includes(filterTerm))
}
const UsTransition = () => {
    const [isPending, startTransition] = useTransition();
    const [filterTerm, setFilterTerm] = useState('');

    const filteredProducts = filterProducts(filterTerm);

    function updateFilterHandler(e) {
        // 1 .useTransition
        // startTransition(() => {
        //     console.time('timer')
        //     setFilterTerm(e.target.value);
        //     console.timeEnd('timer')
        // })
        setFilterTerm(e.target.value);

    }

    return (
        <div id='top' style={{
            textAlign: 'center',
            paddingTop: '15px',
        }}>
            <h3>useTransition</h3>
            <input type="text"
                style={{
                    marginTop: '20px',
                    width: '200px'
                }}
                onChange={updateFilterHandler} />
            {/* // 1 .useTransition */}
            {/* {isPending && <p>Updating List...</p>} */}
            <ProductList products={filteredProducts} />


        </div>
    )
}
export default UsTransition;
