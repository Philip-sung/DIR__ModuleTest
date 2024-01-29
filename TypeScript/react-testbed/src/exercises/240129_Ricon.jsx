import React from 'react';
export const Ricon = ({ icon, svgProps }) => {
    return (React.createElement("svg", Object.assign({}, svgProps),
        React.createElement("use", { href: `/remixicon.symbol.svg#${icon}` })));
};