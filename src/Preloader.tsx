import PreloaderIcon from 'react-preloader-icon'
import Oval from 'react-preloader-icon/loaders/Oval';
import * as React from 'react'
export const Preloader = ({ text, ...props })=> (
  <div
    className='Preload'
    style={{ display: 'flex', flexFlow: 'column nowrap', alignItems: 'center' }}
  >
    <PreloaderIcon
      type={Oval}
      size={32}
      strokeWidth={8} // min: 1, max: 50
      strokeColor='#46546e'
      duration={800}
      {...props}
    />
    {text && <div className='PreloaderText' style={{ fontWeight: 100, paddingTop: '20px' }}>{text}</div>}
  </div>
)
