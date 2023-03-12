import { useEffect } from 'react';
import Image from '../images/mole.png'

function Mole(props) {

    useEffect(() => {
        const seconds = Math.ceil(Math.random() * 5000)
        const timer = setTimeout(() => {
            props.toggle(false)
        }, seconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
           <img style={{'width': '30vw'}} src={Image} onClick={props.handleClick} />
        </div>
    )
}

export default Mole