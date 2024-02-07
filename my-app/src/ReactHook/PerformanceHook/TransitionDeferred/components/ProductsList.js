// 1 .useTransition
// function ProductList({ products }) {
//     return (
//         <div style={{ display: 'flex', justifyContent: 'center' }}>
//         <ul id="ProductList">
//             {products.map((product) => (
//                 <li id="ProductListitem">{product}</li>
//             ))}
//         </ul>
//         </div>
//     );
// }
// export default ProductList

//2.useDeferredValue
import { useDeferredValue } from "react";

function ProductList({ products }) {
    const deferredProducts =useDeferredValue(products)
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ul id="ProductList">
            {deferredProducts.map((product) => (
                <li id="ProductListitem">{product}</li>
            ))}
        </ul>
        </div>
    );
}
export default ProductList