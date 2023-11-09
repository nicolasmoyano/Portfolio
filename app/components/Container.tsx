import React, { ReactNode } from 'react'

interface Props {
  children?: ReactNode
  // any props that come into the component
}

const Container = ({children}:any) => {
  return (
    <div className='container mx-auto text-center'>
        {children}
    </div>
  )
}

export default Container