import { useEffect } from 'react'
import Image from '../images/molehill.png'

function EmptySlot (props) {
    useEffect(() => {
        const seconds = Math.ceil(Math.random() * 5000)
        const timer = setTimeout(() => {
            props.toggle(true)
        }, seconds)
        return () => clearTimeout(timer)
    })
    return (
        <div>
            <img style={{'width': '30vw'}} 
            src={Image}  />
        </div>
    )
}

export default EmptySlot