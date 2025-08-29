import ProductsCategory from "@/pages/productsCategory";

export default async function(){

    const response = await fetch('https://fakestoreapi.in/api/products/category')
    const categories = await response.json();

    return(
        <ProductsCategory categories={categories}></ProductsCategory>
    )
}