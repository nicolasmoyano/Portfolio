import React from 'react'

const Container = ({children}) => {
  return (
    <div className='container mx-auto text-center'>
        {children}
    </div>
  )
}

export default Container