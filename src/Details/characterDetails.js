import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {key} from '../key';
import "./styles.css";

function CharacterDetails() {

    const [characterDetails, setInfo] = useState([]);

    useEffect( () => {
        fetch(`https://www.potterapi.com/v1/characters${key}`)
            .then(result => result.json())
            .then(vjuh => {
                setInfo(vjuh)
            })
    }, []);

    if (characterDetails.length === 0) {
        return(
            <div>
                processing
            </div>
        )
    }
    return (
        <>
            <header>
                <h1 className='character-title'>{characterDetails[0].name}</h1>
                <span>
                    <Link to='/characters' className='link-back'>
                        Back to characters
                    </Link>
                </span>
            </header>
            <div className='characters-box'>
                <div className='chars-details'>
                    <h3>Stats:</h3>
                    <p>{characterDetails[0].school}</p>
                    <p>{characterDetails[0].house}</p>
                    <p>{characterDetails[0].role}</p>
                    <p>{characterDetails[0].bloodStatus}</p>
                    <p>{characterDetails[0].species}</p>
                    <p>{characterDetails[0].deathEater}</p>
                    <p>{characterDetails[0].dumbledoresArmy}</p>
                    <p>{characterDetails[0].orderOfThePhoenix}</p>
                    <p>{characterDetails[0].ministryOfMagic}</p>
                </div>
            </div>
        </>
    )
}

export default CharacterDetails;