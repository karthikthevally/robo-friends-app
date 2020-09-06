import React from 'react';

const Card = ({id, name, email}) => {
    return(
        <React.Fragment>
        
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-2">
        <img src={`https://robohash.org/${id}?200x200`}></img>
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    </div>
    </React.Fragment>
    );
}
export default Card;