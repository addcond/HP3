import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {key} from '../oneKeyToRuleThemAll';
import './styles.css';

function HouseDetails(props) {

    const [houseDetails, setHouseDetails] = useState([]);

    useEffect( () => {
        fetch(`https://www.potterapi.com/v1/houses/${props.match.params.house_id}${key}`)
            .then(result => result.json())
            .then(vjuh => {
                setHouseDetails(vjuh)
            })
    }, [props.match.params.house_id]
    );

    if (houseDetails.length === 0) {
        return(
            <div>
                processing
            </div>
        )
    }
    return (
        <>
            <header>
                <h1 className='house-title'>{houseDetails[0].name}</h1>
                <span>
                    <Link to='/houses' className='link-back'>
                        Back to houses
                    </Link>
                </span>
            </header>
            <div className='house-box'>
                <img className='house-estate' src='https://media1.tenor.com/images/45ca2767a139758930ba6da849827452/tenor.gif?itemid=11276235' alt='Hogwarts' />
                <div className='house-details'>
                    <h3 className='info'>House details:</h3>
                    <h4 className='house-details-header'>House Founder:</h4><span>{houseDetails[0].founder}</span>
                    <br/>
                    <h4 className='house-details-header'>Head of House:</h4><span>{houseDetails[0].headOfHouse}</span>
                    <br/>
                    <h4 className='house-details-header'>House Ghost:</h4><span>{houseDetails[0].houseGhost}</span>
                    <br/>
                    <h4 className='house-details-header'>Mascot:</h4><span>{houseDetails[0].mascot}</span>
                    <br/>
                    <div className='table-container'>
                        <table align='center' className='table-values'>
                            <thead>
                            <tr>
                                <th>Values:</th>
                            </tr>
                            </thead>
                            <tbody>
                            {houseDetails[0].values.map((item, key) => (
                                <tr key={key}>
                                    <td>{item}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        <table align='center' className='table-colors'>
                            <thead>
                            <tr>
                                <th>Colors:</th>
                            </tr>
                            </thead>
                            <tbody>
                            {houseDetails[0].colors.map((item, key) => (
                                <tr key={key}>
                                    <td>{item}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HouseDetails;