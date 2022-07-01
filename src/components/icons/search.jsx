import React from "react";

const IconSearch = ({ id, className, fill, stroke, width, height }) => {
    return (
        <svg id={id} className={className} width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill={fill} stroke={stroke} xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.5C17.2467 21.5 21.5 17.2467 21.5 12C21.5 6.75329 17.2467 2.5 12 2.5C6.75329 2.5 2.5 6.75329 2.5 12C2.5 17.2467 6.75329 21.5 12 21.5Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22.5 22.5L20.5 20.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    );
}

export default IconSearch;