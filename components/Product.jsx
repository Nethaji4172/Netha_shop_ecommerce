import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

const Product = ({ product: { name, image, slug, price } }) => {
  return (
    <div>
        <Link href={`/product/${slug.current}`}>
            <div className="product-card">
                <img
                    src={urlFor(image && image[0])}
                    width={250}
                    height={250}
                    className="product-image"
                />
                <div className="product-name">{name}</div>
                <p className="product-price">${price}</p>
            </div>
        </Link>
    </div>
  )
}

export default Product