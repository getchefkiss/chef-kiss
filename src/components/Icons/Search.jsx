import react from 'react'

const IconSearch = ({ id, className, width, height, fill, stroke }) => {
    return (
        <svg id={id} className={className} width={width} height={height} viewBox={`0 0 20 20`} fill={fill} xmlns="http://www.w3.org/2000/svg">
            <path d="M9.2 16.4C13.1764 16.4 16.4 13.1764 16.4 9.2C16.4 5.22355 13.1764 2 9.2 2C5.22355 2 2 5.22355 2 9.2C2 13.1764 5.22355 16.4 9.2 16.4Z" stroke={stroke} strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.5439 16.9518C15.9679 18.2318 16.9359 18.3598 17.6799 17.2398C18.3599 16.2158 17.9119 15.3758 16.6799 15.3758C15.7679 15.3678 15.2559 16.0798 15.5439 16.9518Z" stroke={stroke} strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

    )
}

export default IconSearch