import {Navigate, Routes, Route, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import { Company } from './components/Company'
import { Profile } from './components/Profile'
import { Warehouses } from './components/Warehouses'
import { Update } from './components/Update'

const settingsBreadCrumbs: Array<PageLink> = [
  {
    title: 'Settings',
    path: '/settings',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const SettingsPage = () => (
  <div style={{paddingTop: "20px"}}>
    <Routes>
      <Route
        element={
          <>
            <Outlet />
          </>
        }
      >
        <Route
          path='company'
          element={
            <>
              <PageTitle breadcrumbs={settingsBreadCrumbs}>Company Settings</PageTitle>
              <Company />
            </>
          }
        />
        <Route
          path='profile'
          element={
            <>
              <PageTitle breadcrumbs={settingsBreadCrumbs}>Profile</PageTitle>
              <Profile />
            </>
          }
        />
        <Route
          path='warehouses'
          element={
            <>
              <PageTitle breadcrumbs={settingsBreadCrumbs}>Warehouses</PageTitle>
              <Warehouses />
            </>
          }
        />
        <Route
          path='app'
          element={
            <>
              <PageTitle breadcrumbs={settingsBreadCrumbs}>Update App</PageTitle>
              <Update />
            </>
          }
        />
        <Route index element={<Navigate to='/crafted/pages/profile/overview' />} />
      </Route>
    </Routes>
  </div>
)

export default SettingsPage
