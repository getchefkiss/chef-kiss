import React from "react";

const IconSettings = ({ id, className, fill, stroke, width, height }) => {
    return (
        <svg id={id} className={className} width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill={fill} stroke={stroke} xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 15.5C14.1569 15.5 15.5 14.1569 15.5 12.5C15.5 10.8431 14.1569 9.5 12.5 9.5C10.8431 9.5 9.5 10.8431 9.5 12.5C9.5 14.1569 10.8431 15.5 12.5 15.5Z" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2.5 13.38V11.62C2.5 10.58 3.35 9.72 4.4 9.72C6.21 9.72 6.95 8.44 6.04 6.87C5.52 5.97 5.83 4.8 6.74 4.28L8.47 3.29C9.26 2.82 10.28 3.1 10.75 3.89L10.86 4.08C11.76 5.65 13.24 5.65 14.15 4.08L14.26 3.89C14.73 3.1 15.75 2.82 16.54 3.29L18.27 4.28C19.18 4.8 19.49 5.97 18.97 6.87C18.06 8.44 18.8 9.72 20.61 9.72C21.65 9.72 22.51 10.57 22.51 11.62V13.38C22.51 14.42 21.66 15.28 20.61 15.28C18.8 15.28 18.06 16.56 18.97 18.13C19.49 19.04 19.18 20.2 18.27 20.72L16.54 21.71C15.75 22.18 14.73 21.9 14.26 21.11L14.15 20.92C13.25 19.35 11.77 19.35 10.86 20.92L10.75 21.11C10.28 21.9 9.26 22.18 8.47 21.71L6.74 20.72C5.83 20.2 5.52 19.03 6.04 18.13C6.95 16.56 6.21 15.28 4.4 15.28C3.35 15.28 2.5 14.42 2.5 13.38Z" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    );
}

export default IconSettings;