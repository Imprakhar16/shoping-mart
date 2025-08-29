// app/components/ProductCard.js
import Image from "next/image";

const ProductCard = ({ product }) => {
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100">
        <div style={{ position: 'relative', width: '100%', height: '200px', textAlign:"center"}}>
          <Image
            src={product.image}
            alt={product.title}
         height={200}
         width={150}
//             style={{ objectFit: 'contain' }}
//   unoptimized
          />
        </div>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text"><strong>Price:</strong> ${product.price}</p>
          <p className="card-text"><strong>Discount:</strong> {product.discount}%</p>
          <p className="card-text"><strong>Model:</strong> {product.model}</p>
          <button className="btn btn-primary mt-auto">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
