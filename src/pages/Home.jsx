"use client";

import ProductCard from "@/components/productCard";
import styles from "./productsHome.module.css";

import Image from "next/image";

export default function ProductsHome({ products }) {
  console.log(products);

  return (
    <>
      <div className={styles.heroSection}>
        <div className={styles.logoWrapper}>
          <Image
            src="/logocart.jpg"
            width={500}
            height={400}
            alt="landing image"
          />
        </div>

        <div className={styles.textWrapper}>
          <h1>
            <span style={{ color: "orangered" }}>W</span>elcome to the
          </h1>
          <h1>
            <span style={{ color: "orangered" }}>S</span>hopping{" "}
            <span style={{ color: "orangered" }}>M</span>art!
          </h1>
          <p>
            Your one-stop destination for unbeatable deals and quality products.
            Shop smarter, live better!
          </p>
        </div>
      </div>

      <h1 className={styles.productsHeading}>Products</h1>
  
      <div className="container">
      <div className="row">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
