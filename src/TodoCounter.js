import "./TodoCounter.css"
import React from 'react';


function TodoCounter({total, completed}) {
    return (
        <h1 className="TodoCounter">
            Has Completado <span>{completed}</span> de <span>{total} </span>TODOs
        </h1>
    );
}

export {TodoCounter}