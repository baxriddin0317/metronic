/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

type Props = {
  className: string
}

const Card3: React.FC<Props> = ({className}) => {

  return (
    <div className={`card ${className}`}>
      {/* begin::Body */}
      <div className='card-body d-flex flex-column gap-10 pb-5' style={{color: "#5e6278", paddingTop: "52px", height: "80vh"}}>
        <div className='border-bottom pb-3' style={{paddingLeft: "44px"}}>
          <h2>
          App Details
          </h2>
        </div>

        <div className='d-flex flex-column gap-10' style={{paddingTop: "32px", paddingLeft: "44px"}}>
          <div className='d-flex justify-content-between w-100 w-xl-50'>
            <h4 style={{color: "#a1a5b7"}}>
            App Version
            </h4>
            <p>
            1.01
            </p>
          </div>
          <div className='d-flex justify-content-between w-100 w-xl-50'>
            <h4 style={{color: "#a1a5b7"}}>
            PHP Version
            </h4>
            <p>
            8.1.24
            </p>
          </div>
          <div className='d-flex justify-content-between w-100 w-xl-50'>
            <h4 style={{color: "#a1a5b7"}}>
            Laravel Version
            </h4>
            <p>
            10.14.1
            </p>
          </div>
          <div className='d-flex justify-content-between w-100 w-xl-50'>
            <h4 style={{color: "#a1a5b7"}}>
            Vue Version
            </h4>
            <p>
            3.3.4
            </p>
          </div>
          <div className='d-flex justify-content-between w-100 w-xl-50'>
            <h4 style={{color: "#a1a5b7"}}>
            MySQL Version
            </h4>
            <p>
            5.6.51
            </p>
          </div>
        </div>
      </div>
      {/* end::Body */}
    </div>
  )
}

export {Card3}
