/** @format */

import React from 'react';

function TextComponent({ text, size, color, line, weight, styles }) {
	const age = 26;

	return (
		<p
			style={
				{
					...styles,
					color: color ?? '#676767',
					fontSize: size ?? 18,
					// lineHeight: line ? (size ? size + 4 : 14) : 18,
					fontWeight: weight ?? 'normal',
				}
				// styles,
			}>
			{text}
		</p>
	);
}

export default TextComponent;
