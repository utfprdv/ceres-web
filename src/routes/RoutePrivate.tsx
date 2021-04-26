/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { Route, RouteProps, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Store } from '../types'
import { isUserLoggedin } from '../utils'

const RoutePrivate = ({
  component: Component,
  ...rest
}: RouteProps & {
  component: React.FunctionComponent
}): React.ReactElement => {
  const user = useSelector((state: Store) => state.user)

  return (
    <Route
      {...rest}
      render={() => {
        if (isUserLoggedin(user)) {
          return <Component />
        }
        return <Redirect to="/login" />
      }}
    />
  )
}

export default RoutePrivate
