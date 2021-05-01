import React from 'react';
import Card from './Card'
//we used {robo} beacause robo has multiple data and its not using default export

const cardList= (props)=>{
  
    return(
        <div>
            
            {
                props.robo.map((user,i)=>{
                    return (
                    <Card 
                    key={props.robo[i].id} 
                    id={props.robo[i].id} 
                    name={props.robo[i].name} 
                    email={props.robo[i].email}
                    />)
                })
            }
        </div>
    );
}
export default cardList;