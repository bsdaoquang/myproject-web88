/** @format */

import React from 'react';

function CardComponent({ title, color, width, height, children }) {
	return (
		<div
			style={{
				backgroundColor: color ?? 'white',
				width: width ?? 200,
				borderRadius: 12,
				padding: 16,
				height: height ?? 200,
			}}>
			<h5>{title ?? 'Card title'}</h5>
			{children}
		</div>
	);
}

export default CardComponent;
