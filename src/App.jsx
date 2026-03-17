import React from 'react'
import "./index.css"
import RouterLayout from './reactrouting/RouterLayout'
import { ToastContainer } from 'react-toastify'
import ContextApi from './reactrouting/components/ContextApi'

const App = () => {
  return (
    <div>

      <ContextApi>
        <ToastContainer />
        <RouterLayout />
      </ContextApi>
    </div>
  )
}

export default App