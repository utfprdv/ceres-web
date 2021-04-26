import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { isUserLoggedin } from 'utils'
import { Store } from 'types'

type Props = {
  to: string
  children: React.ReactNode | React.ReactNodeArray
  className?: string
}

const PrivateLink = ({
  children,
  to,
  className,
}: Props): React.ReactElement => {
  const user = useSelector((state: Store) => state.user)
  const isLoggedIn = isUserLoggedin(user)

  const path = isLoggedIn ? to : { pathname: '/login', state: to }

  return (
    <Link className={className} to={path}>
      {children}
    </Link>
  )
}

PrivateLink.defaultProps = {
  className: '',
}

export default PrivateLink
