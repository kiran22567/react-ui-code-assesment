import React, { useRef, useEffect } from "react"
import logo from './logo.svg';

function SvgComponent({ customTitle }) {
    const logoRef = useRef();
    useEffect(() => {
        // logoRef.current.children[0].title = 'My title';
        // logoRef.current.children[0].queryElementByTa = 'My title';
        
    }, [logoRef])

    return <img src={logo} />
    return (
        <div ref={logoRef}>
            <span>Ganesh</span>
        </div>
    )
}

export default SvgComponent
