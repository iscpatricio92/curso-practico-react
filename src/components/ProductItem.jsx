import React, { useContext, useState } from 'react';
import '@styles/ProductItem.scss';
import AppContext from '@context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import iconClose from '@icons/icon_close.png';

const ProductItem = ({ product }) => {
	const { addToCart, removeFromCart } = useContext(AppContext);
	const [addedToCart, setAddedToCart] = useState(false);

	const handleAdd = item => {
		addToCart(item);
		setAddedToCart(true);
	}
	const handleRemove = item => {
		removeFromCart(item);
		setAddedToCart(false);
	}

	const handleClick = item => {
		addToCart(item)
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				{!addedToCart ?
					<figure onClick={() => handleAdd(product)} >
						<img src={addToCartImage} alt="" />
					</figure>
					:
					<figure onClick={() => handleRemove(product)} >
						<img src={iconClose} alt="" />
					</figure>
				}
			</div>
		</div>
	);
}

export default ProductItem;
