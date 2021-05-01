import React from 'react';

const Card = ({name,email,id})=>{
    // const {name,email,id}=props; or just do this destructuring inside the parameter
    return(
        <div className='tc bg-light-green dib br3 ma3 pa2 grow bw2 shadow-2'>
            <img src={`https://robohash.org/${id}`} width='200' height= '200' alt='ROBO' />
            <div>
                {/* <h1>{props.name}</h1>
                <p>{props.email}</p> not a cleaner way */}

                <h1>{name}</h1> {/* much cleaner */}
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;