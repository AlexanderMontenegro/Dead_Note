import "./TodoSearch.css"
import React from 'react';


function TodoSearch() {
  const[searchValue,setSearchValue] = React.useState("");
  console.log("Los usuarions buscan todos de " + searchValue);


    return (
      <input 
      placeholder = "Define" 
      className="TodoSearch" 
      value={searchValue}
      onChange={(event)=>{
        setSearchValue(event.target.value);
        
      }}
      
      />
      
    );
  }

  export { TodoSearch }; 