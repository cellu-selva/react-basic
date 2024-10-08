import React, { useRef } from 'react'
import PropTypes from 'prop-types'

const StateChild = props => {
  const {setParentName} = props
  const inputRef = useRef();
  const handleOnClick = (e) => {
    setParentName(inputRef.current.value);
  }
    return (
    <div>
      StateChild
      <input type="text" ref={inputRef}/>
      <button onClick={handleOnClick}>Update Name</button>
    </div>
  )
}

StateChild.propTypes = {
  setParentName: () => {}
}

export default StateChild