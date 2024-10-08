import React from 'react'
import { C2PStore } from '../../../Store/C2P/C2PStore'
import ReduxChild from './ReduxChild'
import { Provider, useSelector } from 'react-redux'

const ReduxParent = () => {
    const name = useSelector((state)=> (state.C2P.name));
  return (
    <div>
        Redux Parent - {name}
        <ReduxChild/>
    </div>
  )
}

export const ReduxC2PWrapper = () => {
    return (
      <div>
        <Provider store={C2PStore}>
            <ReduxParent/>
        </Provider>
      </div>
    )
  }
  
export default ReduxC2PWrapper