import clsx from 'clsx'
import {KTIcon, toAbsoluteUrl} from '../../../helpers'
import {HeaderUserMenu, Search} from '../../../partials'
import { useState } from 'react'

const itemClass = 'ms-1 ms-md-4'
const userAvatarClass = 'symbol-35px'

const Navbar = () => {
  const [status, setStatus] = useState<string>('1')
  return (
    <div className='app-navbar flex-shrink-0'>
      <div className='d-flex align-items-center'>
        {/* begin::Select */}
        <select
          className='form-select form-select-sm form-select-solid '
          data-control='select2'
          data-placeholder='Latest'
          data-hide-search='true'
          defaultValue={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value='1'>en</option>
          <option value='2'>ru</option>
          <option value='3'>uz</option>
        </select>
        {/* end::Select  */}
      </div>

      

      <div className={clsx('app-navbar-item', itemClass)}>
        <div
          className={clsx('cursor-pointer symbol', userAvatarClass)}
          data-kt-menu-trigger="{default: 'click'}"
          data-kt-menu-attach='parent'
          data-kt-menu-placement='bottom-end'
        >
          <img src={toAbsoluteUrl('/media/avatars/300-3.jpg')} alt='' />
        </div>
        
        <HeaderUserMenu />
      </div>
    </div>
  )
}

export {Navbar}
