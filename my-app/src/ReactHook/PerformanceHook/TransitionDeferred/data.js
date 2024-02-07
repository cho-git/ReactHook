export function generateProduct(){
    const products =[];

    for(let i =0 ; i < 1000 ; i++){
        products.push(`Product ${i+1}`);
    }
    return products;
}