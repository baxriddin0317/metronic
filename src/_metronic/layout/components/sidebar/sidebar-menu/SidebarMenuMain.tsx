/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
import {KTIcon} from '../../../../helpers'
import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub'
import {SidebarMenuItem} from './SidebarMenuItem'
import { useAuth } from '../../../../../app/modules/auth'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

const SidebarMenuMain = () => {
  const intl = useIntl()
  const {currentUser, logout} = useAuth()

  return (
    <>
      <SidebarMenuItem
        to='/dashboard'
        icon='element-11'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-house-door'
      />
      <SidebarMenuItemWithSub
        to='settings'
        title='Settings'
        icon='profile-circle'
        fontIcon='bi-sliders'
      >
        <SidebarMenuItem to='settings/company' title='Company Settings'  />
        <SidebarMenuItem to='settings/profile' title='Profile'  />
        <SidebarMenuItem to='settings/warehouses' title='Warehouses'  />
        <SidebarMenuItem to='settings/app' title='Update App'  />
      </SidebarMenuItemWithSub>
      <div className='menu-item'>
        <Link onClick={logout} to={"#"} className='menu-link without-sub'>
          <span className='menu-icon'>
            <i className={clsx('bi fs-3', 'bi-box-arrow-right')}></i>
          </span>
          <span className='menu-title'>Logout</span>
        </Link>
      </div>
    </>
  )
}

export {SidebarMenuMain}
