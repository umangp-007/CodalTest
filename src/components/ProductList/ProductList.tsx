import React from 'react';
import './ProductList.scss'; // Import the SCSS file for custom styles



const ProductList: React.FC = ({products}: any) => {
  return (
      <div className="product-grid">
        {products.map((product : any) => (
          <div className="card product-card" key={product.id}>
            <img
              src={product.image}
              className=""
              alt={product.name}
            />
            <div className="card-body">
              <div className="card-title-category">{product.brand}</div>
              <h5 className="card-title mb-5">{product.name}</h5>
              <div className='mb-2'><span className='product-sku'>SKU: 130833</span><span className='product-size'>Multiple Sizes Available</span></div>
              <div className='product-from'>From</div>
              <div className='product-price mb-2'>${product.price}</div>
              <button className="btn-add-cart">view product</button>
            </div>
          </div>
        ))}
      </div>
  );
};

export default ProductList;
