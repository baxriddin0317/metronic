/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'

type Props = {
  className: string
}

const Card2: React.FC<Props> = ({className}) => {
  const [imageSrcList, setImageSrcList] = useState<(string | null)[]>([null, null, null, null]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const file = event.target.files && event.target.files[0];

    if (file && (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/svg+xml')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        if (typeof result === 'string') {
          const updatedImages = [...imageSrcList];
          updatedImages[index] = result;
          setImageSrcList(updatedImages);
        }
      };
      reader.readAsDataURL(file);
    } else {
      console.error('Invalid file type. Please upload a JPG, PNG, or SVG file.');
    }
  };

  const handleRemoveImage = (index: number) => {
    const updatedImages = [...imageSrcList];
    updatedImages[index] = null;
    setImageSrcList(updatedImages);
  };

  const imageUploaders = [
    { label: 'Profile picture', dimensions: '(500px X 500px)' },
  ];
  return (
    <div className={`card ${className}`}>
      {/* begin::Body */}
      <div className='card-body d-flex flex-column gap-10 pb-5' style={{color: "#5e6278"}}>
        <div className='row gap-10 gap-xxl-0 justify-content-between'>
          <div className="w-50">
            <label htmlFor="inputEmail4" className="mb-2" >Staff name</label>
            <input type="text" className="form-control border-0" style={{backgroundColor: "#f1f1f2"}} id="inputEmail4" placeholder='Please enter name' />
          </div>
          <div className="w-50">
            <label htmlFor="inputPassword4" className="mb-2">Email</label>
            <input type="email" className="form-control border-0" style={{backgroundColor: "#f1f1f2"}} id="inputPassword4" placeholder='Please enter Email' />
          </div>
        </div>

        <div className='row gap-10 gap-xxl-0 justify-content-between'>
          <div className="w-50">
            <label htmlFor="inputEmail4" className="mb-2">New Password</label>
            <input type="tel" className="form-control border-0" style={{backgroundColor: "#f1f1f2"}} id="inputEmail4" placeholder='Please enter password if you want to change' />
          </div>
          <div className="w-50">
            <label htmlFor="inputPassword4" className="mb-2">Phone number</label>
            <input type="tel" className="form-control border-0" style={{backgroundColor: "#f1f1f2"}} id="inputPassword4" placeholder='Please enter phone number' />
          </div>
        </div>

        <div className='d-flex gap-20' style={{height: "200px"}}>
          {imageUploaders.map((uploader, idx) => (
            <div key={idx} className='d-flex flex-column'>
              <h4 className='mb-4' style={{color: "#5e6278", fontSize: "12px", fontWeight: "400"}}>
                {uploader.label} <br />
                ({uploader.dimensions})
              </h4>
              {!imageSrcList[idx] ? (
                <div className='border-2 position-relative' style={{ width: '127px', height: '127px', borderStyle: 'dashed', borderColor: '#c2c2c2', backgroundColor: '#d9d9d9' }}>
                  <input type='file' id={`file${idx + 1}`} className='visually-hidden' accept='.jpg,.png,.svg' onChange={(e) => handleImageChange(e, idx)} />
                  <label className='position-absolute w-100 left-50 top-50 text-center text-primary' style={{ transform: 'translateY(-50%)', cursor: 'pointer' }} htmlFor={`file${idx + 1}`}>
                    Browse image <br />
                    (jpg, png, svg)
                  </label>
                </div>
              ) : (
                <div >
                  <img src={imageSrcList[idx] || ''} alt='Uploaded' style={{ maxWidth: '127px', minHeight: '127px', width: "100%",  objectFit: "cover" }} />
                  <span onClick={() => handleRemoveImage(idx)} className='d-block mt-2 text-danger' style={{cursor: "pointer"}}>
                    Remove
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className='row row-cols-12 mt-4 justify-content-end gap-3'>
          <button type="button" className="btn disabled" style={{backgroundColor: "#f9f9f9", maxWidth: "150px"}}>Close</button>
          <button type="button" className="btn text-white" style={{backgroundColor: "#3e97ff", maxWidth: "180px"}}>Save Changes</button>
        </div>
      </div>
      {/* end::Body */}
    </div>
  )
}

export {Card2}
