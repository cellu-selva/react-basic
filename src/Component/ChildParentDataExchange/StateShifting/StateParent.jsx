import React, { useState } from 'react'
import StateChild from './StateChild';

const StateParent = () => {
  const [parentName, setParentName] = useState("Parent");
  return (
    <div>
        Title - {parentName} 
        <StateChild setParentName={setParentName}/>
    </div>
  )
}

export default StateParent