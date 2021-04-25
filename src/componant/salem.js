import React from 'react'

const salem = (props) =>  {
console.log(props)

return (
<div>
<h1> Bonjour {props.name} résident dans {props.place}</h1>
{props.children} 
</div>) 
}


export default salem 
