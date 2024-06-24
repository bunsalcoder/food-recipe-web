/** Icons are imported separatly to reduce build time */
import Squares2X2Icon from '@heroicons/react/24/outline/Squares2X2Icon'
import UsersIcon from '@heroicons/react/24/outline/UsersIcon'

const iconClasses = `h-6 w-6`

const routes = [
  {
    path: '/app/dashboard',
    icon: <Squares2X2Icon className={iconClasses}/>, 
    name: 'Dashboard',
  },
  {
    path: '/app/users',
    icon: <UsersIcon className={iconClasses}/>,
    name: 'Users',
  },
]

export default routes


