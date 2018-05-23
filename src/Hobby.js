import React from 'react';

let Hobby = (props) => {
    return (<div>
            <li>
                <span>Name:  {props.children}</span>
                <button style={{float:'right'}} onClick={props.delHobby}>Delete This Hobby</button>
                <input style={{float:'right'}} onChange={props.changeHobby} value={props.children}/>
            </li>
            <br/>
    </div>
    );

};

export default Hobby;