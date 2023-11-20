import clsx from 'clsx'
import { useLayout} from '../../core'
import {Toolbar} from './Toolbar'

const ToolbarWrapper = () => {
  const {config, classes} = useLayout()
  if (!config.app?.toolbar?.display) {
    return null
  }


  return (
    <div
      id='kt_app_toolbar'
      className={clsx('app-toolbar', classes.toolbar.join(' '), config?.app?.toolbar?.class)}
    >
      <div
        id='kt_app_toolbar_container'
        className={clsx(
          ' justify-content-end gap-3 p-0',
          classes.toolbarContainer.join(' '),
          config.app?.toolbar?.containerClass,
          config.app?.toolbar?.minimize?.enabled ? 'app-toolbar-minimize' : '',
          {
            'container-fluid': config.app?.toolbar?.container === 'fluid',
            'container-xxl': config.app?.toolbar?.container === 'fixed',
          }
        )}
      >
       <select className="form-select" defaultValue={1} style={{maxWidth: '180px'}} aria-label="Default select example">
        <option value={1}>Warehouse 1</option>
        <option value={2}>Warehouse 2</option>
        <option value={3}>Warehouse 3</option>
      </select>
      <select className="form-select" defaultValue={0} style={{maxWidth: '180px'}} aria-label="Default select example">
        <option value={0}>Today</option>
        <option value={1}>Last 2 days</option>
        <option value={2}>Last 3 days</option>
        <option value={3}>Last 5 days</option>
        <option value={3}>This Week</option>
        <option value={3}>This Month</option>
        <option value={3}>Last Month</option>
      </select>
      </div>
    </div>
  )
}

export {ToolbarWrapper}
