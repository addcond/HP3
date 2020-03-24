import React, {useState, useEffect} from 'react';
import {key} from '../oneKeyToRuleThemAll';
import './styles.css';

function Hat() {

    const [sort, setSort] = useState([]);

    useEffect( () => {
        fetch(`https://www.potterapi.com/v1/sortingHat${key}`)
            .then(result =>
                result.json()
            )
            .then(vjuh => {
                setSort(vjuh)
            })
    }, []
    );
    return (
        <>
            <div className='hat-info'>
                <h1>Vjuh and you are now a member of the {sort} house!</h1>
            </div>
        </>
    )
}

export default Hat;