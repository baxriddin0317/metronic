/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'

type Props = {
  className: string
}

const Card1: React.FC<Props> = ({className}) => {

  const [color, setColor] = useState<string>("#3E97FF");
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
    { label: 'Login Image', dimensions: '1050px X 1050px' },
    { label: 'Login Logo', dimensions: '300px X 150px' },
    { label: 'Menu Logo', dimensions: '58px X 58px' },
    { label: 'Favicon Logo', dimensions: '45px X 45px' },
  ];

  return (
    <div className={`card ${className}`}>
      {/* begin::Body */}
      <div className='card-body d-flex flex-column gap-10 pb-5' style={{color: "#5e6278"}}>
        <div className='row gap-10 gap-xl-0 justify-content-between'>
          <div className="w-50">
            <label htmlFor="inputEmail4" className="mb-2" >Company name</label>
            <input type="text" className="form-control border-0" style={{backgroundColor: "#f1f1f2"}} id="inputEmail4" placeholder='Please enter company name' />
          </div>
          <div className="w-50">
            <label htmlFor="inputPassword4" className="mb-2">Company short name</label>
            <input type="text" className="form-control border-0" style={{backgroundColor: "#f1f1f2"}} id="inputPassword4" placeholder='Please enter short name' />
          </div>
        </div>

        <div className='row gap-10 gap-xxl-0 justify-content-between'>
          <div className="w-50">
            <label htmlFor="inputEmail4" className="mb-2">Company Email</label>
            <input type="email" className="form-control border-0" style={{backgroundColor: "#f1f1f2"}} id="inputEmail4" placeholder='
Please enter email' />
          </div>
          <div className="w-50">
            <label htmlFor="inputPassword4" className="mb-2">Phone number</label>
            <input type="tel" className="form-control border-0" style={{backgroundColor: "#f1f1f2"}} id="inputPassword4" placeholder='Please enter phone number' />
          </div>
        </div>

        <div className='row'>
          <div className="w-lg-75">
            <label htmlFor="inputEmail4" className="mb-2">Company Address</label>
            <input type="email" className="form-control border-0" style={{backgroundColor: "#f1f1f2"}} id="inputEmail4" placeholder='Please enter address' />
          </div>
        </div>

        <div className="d-flex gap-10 align-items-center">
          <label htmlFor="inputEmail3" className="">Primary Color</label>
          <div className="card p-0" style={{width: "150px"}}>
            <div className='d-flex align-items-center' >
              <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="form-control p-0 border-0 overflow-hidden" style={{width: "40px", height: "40px", borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px"}} />
              <p className='m-0 ms-3 p-0' style={{color: "#d6d6d6", flex: 1}}>{color}</p>
            </div>
          </div>
        </div>

        <div className='d-flex flex-wrap gap-10 gap-xl-20' style={{minHeight: "200px"}}>
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

        <div className='row align-items-start gap-10 gap-xxl-0 justify-content-between'>
          <div className='col-xxl-4'>
            <label htmlFor="currency" className="mb-2">Currency</label>
            <select className="form-select w-100" id='currency' defaultValue={1} style={{backgroundColor: "#f1f1f2"}} aria-label="Default select example">
              <option className='bg-white m-3' value={1}>USD($)</option>
              <option className='bg-white m-3' value={2}>EUR(€)</option>
            </select>
          </div>
          <div className='col-xxl-4'>
            <label htmlFor="warehouse" className="mb-2">Main Warehouse</label>
            <select className="form-select" id='warehouse' defaultValue={1} style={{backgroundColor: "#f1f1f2"}} aria-label="Default select example">
              <option className='bg-white m-3' value={1}>Warehouse 1</option>
              <option className='bg-white m-3' value={2}>Warehouse 2</option>
              <option className='bg-white m-3' value={3}>Warehouse 3</option>
            </select>
          </div>
          <div className='col-xxl-4'>
            <label htmlFor="timezone" className="mb-2">Timezone</label>
            <select className="form-select" id='timezone' defaultValue={1} style={{backgroundColor: "#f1f1f2"}} aria-label="Default select example">
              <option className='bg-white m-3' value={1}>United State / New York</option>
              <option className='bg-white m-3' value={2}>United States / Adak</option>
              <option className='bg-white m-3' value={3}>United States / Metlakatla</option>
            </select>
          </div>
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

export {Card1}
