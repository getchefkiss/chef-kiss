import react from 'react'

const IconBack = ({ id, className, width, height, fill, stroke }) => {
    return (
        <svg id={id} className={className} width={width} height={height} viewBox={`0 0 20 20`} fill={fill} xmlns="http://www.w3.org/2000/svg">
            <path d="M9.57 5.93005L3.5 12.0001L9.57 18.0701" stroke={stroke} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20.4999 12H3.66992" stroke={stroke} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export default IconBack