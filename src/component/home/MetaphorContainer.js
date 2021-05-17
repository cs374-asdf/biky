import React, { useState } from 'react';
import { MetaphorTaxi, MetaphorBurger, MetaphorTree } from './';

export default function MetaphorContainer(props) {
    var amount = props.amount; 
    var min = 1;
    var max = 3;
    var [randomInt, setRandomInt] = useState(Math.floor(Math.random()*(max-min+1)+min));

    return (
        <div style={{ position: "relative" }}>
            { randomInt === 1 ? <MetaphorTaxi amount={amount}/> : null }
            { randomInt === 2 ? <MetaphorBurger amount={amount}/> : null }
            { randomInt === 3 ? <MetaphorTree amount={amount}/> : null }
        </div>
    )
}