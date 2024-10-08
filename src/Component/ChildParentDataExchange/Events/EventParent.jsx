import React from 'react'
import PropTypes from 'prop-types'
import EventChild from './EventChild';

const EventParent = props => {
  window.addEventListener('event-from-child', (event) => {
    console.log(event.detail);
  })
  return (
    <div>
        EventParent
    <EventChild></EventChild>
    </div>
  )
}

EventParent.propTypes = {}

export default EventParent