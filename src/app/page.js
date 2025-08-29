import ProductsHome from "@/pages/Home";


export default async function Home() {
 

   const response   =  await fetch('https://fakestoreapi.in/api/products')

   const {products} = await response.json();
   console.log(products)

  return (
      <> 
      <ProductsHome products={products}></ProductsHome>
      </>
  );
}
