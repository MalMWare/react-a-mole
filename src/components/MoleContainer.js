import { useState } from 'react'
import Mole from "./Mole"
import EmptySlot from "./EmptySlot"

function MoleContainer(props) {
    let [aMole, moleVisibility] = useState(false)

    const handleClick = (e) => {
        props.setScore(props.score + 1)
        moleVisibility(false)
    }

    let visibleMole = aMole ? <Mole setScore={props.setScore} toggle={moleVisibility} handleClick={handleClick} /> : <EmptySlot toggle={moleVisibility} /> 
    return(
        <div style={{'display': 'inline-block', 'width': '30vw'}}> 
           {visibleMole}
        </div>
    )
}

export default MoleContainer