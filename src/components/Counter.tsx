import React, {useState} from 'react';
import classes from './Counter.module.scss'

export const Counter = () => {

    let [count, setCount] = useState(0)
    const onClick = () => setCount(count +1)

    return (
        <div className={classes.btn}>
            <h1>{count}</h1>
            <button onClick={onClick}>прибавить</button>
        </div>
    );
};
