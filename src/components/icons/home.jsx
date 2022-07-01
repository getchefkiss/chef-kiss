import React from "react";

const IconHome = ({ id, className, fill, stroke, width, height }) => {
    return (
        <svg id={id} className={className} width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill={fill} stroke={stroke} xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 18.5V15.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.57 3.32L3.64002 8.87C2.86002 9.49 2.36002 10.8 2.53002 11.78L3.86002 19.74C4.10002 21.16 5.46002 22.31 6.90002 22.31H18.1C19.53 22.31 20.9 21.15 21.14 19.74L22.47 11.78C22.63 10.8 22.13 9.49 21.36 8.87L14.43 3.33C13.36 2.47 11.63 2.47 10.57 3.32Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    );
}

export default IconHome;