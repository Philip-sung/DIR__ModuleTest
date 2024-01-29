import React from 'react'

export const Ticon = ({ icon, svgProps }) => {
	return (
		<svg {...svgProps}>
			<use href={`/remixicon.symbol.svg#${icon}`} />
		</svg>
	)
}