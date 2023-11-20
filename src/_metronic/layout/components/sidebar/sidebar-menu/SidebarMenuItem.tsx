import {FC} from 'react'
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import {useLocation} from 'react-router'
import {checkIsActive, KTIcon, WithChildren} from '../../../../helpers'
import {useLayout} from '../../../core'

type Props = {
  to: string
  title: string
  icon?: string
  fontIcon?: string
}

const SidebarMenuItem: FC<Props & WithChildren> = ({
  children,
  to,
  title,
  icon,
  fontIcon,
}) => {
  const {pathname} = useLocation()
  const isActive = checkIsActive(pathname, to)
  const {config} = useLayout()

  return (
    <div className='menu-item'>
      <Link className={clsx('menu-link without-sub', {'bg-primary': isActive})} to={to}>
        {fontIcon && (
          <span className='menu-icon' style={{color: '#fff'}}>
            <i className={clsx('bi fs-3', fontIcon)}></i>
          </span>
        )}
        <span className='menu-title' style={{color: '#fff'}}>{title}</span>
      </Link>
      {children}
    </div>
  )
}

export {SidebarMenuItem}
