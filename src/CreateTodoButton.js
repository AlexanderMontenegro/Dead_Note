import "./CreateTodoButton.css"
import React from 'react';
function CreateTodoButton() {
    return (
        <button className="CreateTodoButton"
        onClick={(event)=>{ 
            console.log("el click")
            console.log(event);
        }}
        >X</button>
        
    );
}

export {CreateTodoButton};