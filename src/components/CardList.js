import React from 'react';
import robots from '../constants/Robots';
import Card from './Card';


const CardList = ({robots}) => {
    return(
    <>
    {
        robots.map((user, i) => {return(
            <Card id={robots[i].id} email={robots[i].email} name={robots[i].name}/>
        );})
    }
    </>
    );
};
export default CardList;