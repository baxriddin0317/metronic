/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

type Props = {
  className: string
}

const Card4: React.FC<Props> = ({className}) => {

  return (
    <div className={`${className}`}>
      <div className='row gap-xxl-0 mb-10 justify-content-between'>
        <div className="w-50">
          <label htmlFor="inputEmail4" className="mb-2 fw-bold" >Warehouse name</label>
          <input type="text" className="form-control border-0" style={{backgroundColor: "#f1f1f2"}} id="inputEmail4" placeholder='Please enter name' />
        </div>
        <div className="w-50">
          <label htmlFor="inputPassword4" className="mb-2 fw-bold">Slug</label>
          <input type="text" className="form-control border-0" style={{backgroundColor: "#f1f1f2"}} id="inputPassword4" placeholder='Please enter Email' />
        </div>
      </div>

      <div className="w-xl-75 mb-10">
        <label htmlFor="inputEmail4" className="mb-2 fw-bold">Warehouse Email</label>
        <input type="email" className="form-control border-0" style={{backgroundColor: "#f1f1f2"}} id="inputEmail4" placeholder='Please enter password if you want to change' />
      </div>
      <div className="w-xl-75 mb-10">
        <label htmlFor="inputPassword4" className="mb-2 fw-bold">number</label>
        <input type="tel" className="form-control border-0" style={{backgroundColor: "#f1f1f2"}} id="inputPassword4" placeholder='Please enter phone number' />
      </div>

      <div className="w-100 mb-10">
        <label htmlFor="inputPassword4" className="mb-2 fw-bold">Billing Address</label>
        <textarea className="form-control border-0" style={{backgroundColor: "#f1f1f2"}} ></textarea>
      </div>

      <div className='row row-cols-12 mt-4 gap-3'>
        <button type="button" className="btn text-white" style={{backgroundColor: "#3e97ff", maxWidth: "100px"}}>Create</button>
        <button type="button" className="btn" id='kt_drawer_chat_close' style={{backgroundColor: "#f9f9f9", maxWidth: "100px"}}>Close</button>
      </div>
    </div>
  )
}

export {Card4}
