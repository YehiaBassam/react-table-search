import React from 'react'

const MainHeader = () => {
  return (
    <div className='mb-5 py-3' style={{background:'#d8d8d8'}}>
      <div className='container d-flex justify-content-between align-items-center'>
        <div>
          <img src='/logo.png' alt='logo' style={{width: '170px'}} />
        </div>
        <h4 className='text-primary'>
          Table-Filter
        </h4>
      </div>
    </div>
  )
}

export default MainHeader;