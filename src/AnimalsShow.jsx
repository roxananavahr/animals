import { useState } from "react";

import bird from './assets/svg/bird.svg'
import dog from './assets/svg/dog.svg'
import cat from './assets/svg/cat.svg'
import cow from './assets/svg/cow.svg'
import gator from './assets/svg/gator.svg'
import heart from './assets/svg/heart.svg'
import horse from './assets/svg/horse.svg'

import './AnimalsShow.css'

const svgMap = {
    bird,
    dog,
    cat,
    cow,
    gator,
    heart,
    horse
}

function AnimalsShow({type}){
    const [click, setCliks] = useState(0)
    
    const handleClick = () => {
        setCliks(click + 1)

    }

    return(
        <div
        onClick={handleClick}
        className="animals-show"
>
    <img
    src={svgMap[type]}
    alt="animal"
    className="animal"
    />
    <img
    src={heart}
    alt="heart"
    style={{width: 10 +10 * click + 'px'}}
    className="heart"
    />

</div>
    )
 

}

export default AnimalsShow