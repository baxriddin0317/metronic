/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {useIntl} from 'react-intl'
import { PageLink, PageTitle } from '../../../_metronic/layout/core'
import { ListsWidget3, MixedWidget8, StatisticsWidget5, TablesWidget1, TablesWidget5 } from '../../../_metronic/partials/widgets'
import { ToolbarWrapper } from '../../../_metronic/layout/components/toolbar'


const widgetsBreadCrumbs: Array<PageLink> = [
  {
    title: 'Admin',
    path: '/dashboard',
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

const DashboardPage: FC = () => (
  <>
      {/* begin::Row */}
      <div className='row g-5 g-xl-8'>
        <div className='col-xl-3'>
          <StatisticsWidget5
            className='card-xl-stretch mb-xl-8'
            svgIcon='chart-simple'
            color='white'
            iconColor='primary'
            title='500M$'
            description='SAP UI Progress'
          />
        </div>

        <div className='col-xl-3'>
          <StatisticsWidget5
            className='card-xl-stretch mb-xl-8'
            svgIcon='cheque'
            color='dark'
            iconColor='white'
            title='+3000'
            titleColor='white'
            description='New Customers'
            descriptionColor='white'
          />
        </div>

        <div className='col-xl-3'>
          <StatisticsWidget5
            className='card-xl-stretch mb-xl-8'
            svgIcon='briefcase'
            color='warning'
            iconColor='white'
            title='$50,000'
            titleColor='white'
            description='Milestone Reached'
            descriptionColor='white'
          />
        </div>

        <div className='col-xl-3'>
          <StatisticsWidget5
            className='card-xl-stretch mb-5 mb-xl-8'
            svgIcon='chart-pie-simple'
            color='info'
            iconColor='white'
            title='$50,000'
            titleColor='white'
            description='Milestone Reached'
            descriptionColor='white'
          />
        </div>
      </div>
      {/* end::Row */}

      <div className='row gy-10 gx-xl-10'>
        <div className='col-xl-6'>
        <ListsWidget3 className='card-xxl-stretch mb-xl-3' />
        </div>

        <div className='col-xl-6'>
          <TablesWidget1 className='card-xxl-stretch mb-5 mb-xl-10' />
        </div>
      </div>

      <div className='row g-5 gx-xxl-8'>
        <div className='col-xxl-4'>
          <MixedWidget8
            className='card-xxl-stretch mb-xl-3'
            chartColor='success'
            chartHeight='150px'
          />
        </div>
        <div className='col-xxl-8'>
          <TablesWidget5 className='card-xxl-stretch mb-5 mb-xxl-8' />
        </div>
      </div>
  </>
)

const DashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={widgetsBreadCrumbs}>Dashboard</PageTitle>
      <ToolbarWrapper />
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
