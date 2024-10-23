import React from 'react'
import Container from './container'
import { BounceLoader } from 'react-spinners'

interface Props {
  hideLayout: boolean;
}

const Loader: React.FC<Props> = ({ hideLayout }) => {
  return (
    <Container className={`loader-container ${hideLayout ? 'h-screen' : 'h-96'} flex items-center justify-center relative`}>
      <div className='absolute top-0 left-0 w-full h-full bg-[#BE8493] bg-opacity-50 z-50 flex items-center justify-center text-[3rem]'>
        J<BounceLoader color='#fff' />LIB
      </div>
    </Container>
  )
}

export default Loader
