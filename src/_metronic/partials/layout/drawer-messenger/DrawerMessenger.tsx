/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC, useState} from 'react'
import clsx from 'clsx'
import { Card4 } from '../../settings/cards/Card4'
// import {ChatInner} from '../../chat/ChatInner'

const DrawerMessenger: FC = () => {
  const [tab, setTab] = useState('Details')

  return (
    <div
      id='kt_drawer_chat'
      className='bg-body'
      data-kt-drawer='true'
      data-kt-drawer-name='chat'
      data-kt-drawer-activate='true'
      data-kt-drawer-overlay='true'
      data-kt-drawer-width="{default:'300px', 'md': '500px'}"
      data-kt-drawer-direction='end'
      data-kt-drawer-toggle='#kt_drawer_chat_toggle'
      data-kt-drawer-close='#kt_drawer_chat_close'
    >
      <div className='card w-100 rounded-0' id='kt_drawer_chat_messenger'>
        <div className='card-header  border-0 pe-5' id='kt_drawer_chat_messenger_header'>
          <div className='card-title'>
            <h3 className='' style={{fontSize: "18px", color: "#3f4254"}}>
            Add new warehouse
            </h3>
          </div>
        </div>
  
        <div className='card-body p-0'>
          <div className='card-header card-header-stretch overflow-auto'>
            <ul
              className='nav nav-stretch nav-line-tabs
              fw-bold
              border-transparent
              flex-nowrap
            '
              role='tablist'
            >
              <li className='nav-item'>
                <a
                  className={clsx(`nav-link cursor-pointer`, {active: tab === 'Details'})}
                  onClick={() => setTab('Details')}
                  role='tab'
                >
                  Basic Details
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className={clsx(`nav-link cursor-pointer`, {active: tab === 'Visibility'})}
                  onClick={() => setTab('Visibility')}
                  role='tab'
                >
                  Visibility
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className={clsx(`nav-link cursor-pointer`, {active: tab === 'Settings'})}
                  onClick={() => setTab('Settings')}
                  role='tab'
                >
                  POS Settings
                </a>
              </li>
            </ul>
          </div>
  
          <form className='form'>
            <div className='card-body'>
              <div className='tab-content pt-3'>
                <div className={clsx('tab-pane', {active: tab === 'Details'})}>
                  <Card4 className='' />
                </div>
  
                <div className={clsx('tab-pane', {active: tab === 'Visibility'})}>
                  Visibility
                </div>
  
                <div className={clsx('tab-pane', {active: tab === 'Settings'})}>
                  settings
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export {DrawerMessenger}

// id='kt_drawer_chat_close'