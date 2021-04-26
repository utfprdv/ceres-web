import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory, Route, useLocation } from 'react-router-dom'
import { Logo, FacebookLogo, GoogleLogo } from 'images'
import * as C from 'store/contants'
import { post } from 'services/api'
import { Store } from 'types'
import { safeParse, isUserLoggedin } from 'utils'
import classy from 'utils/classy'

import style from './Login.module.scss'

const Login = (): React.ReactElement => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  // Echo the cart to facebook/google so we dont lose it on
  // the back and forth of authentication
  const storedCart = useSelector((state: Store) => state.cart)
  const user = useSelector((state: Store) => state.user)

  const state = {
    cart: storedCart,
    redirect: location.state,
  }

  const [loading, setLoading] = useState('')
  const [hydrated, setHydrated] = useState(false)

  // Facebook and Google will return our cart back
  useEffect(() => {
    const { cart, error } = safeParse('state')
    if (cart && !error && !hydrated) {
      setHydrated(true)
      dispatch({ type: C.HYDRATE_CART, payload: cart })
    }
  }, [dispatch, hydrated])

  useEffect(() => {
    const code = safeParse('code', false)
    const { error, provider, redirect = '/' } = safeParse('state')

    if (code && !error) {
      history.replace('/login/entrando')
      post('authenticate/code', {
        body: JSON.stringify({ code, provider }),
      }).then(res => {
        dispatch({ type: C.USER, payload: res })
        setTimeout(() => {
          history.replace(redirect)
        }, 1000)
      })
    }
  }, [dispatch, history])

  useEffect(() => {
    if (isUserLoggedin(user)) {
      history.replace('/')
    }
  }, [history, user])

  return (
    <div className={style.root}>
      <header className={style.header}>
        <section className={classy(style.section, style.heading)}>
          <div>
            <Link to="/">
              <Logo />
            </Link>
            <h1 className={style.title}>Entrar</h1>
            <p>
              Encontre produtos frescos
              <br />
              de produtores da sua cidade
            </p>
          </div>
        </section>
      </header>
      <section className={style.section}>
        <div className={style.buttons}>
          <Route path="/login/entrando" exact>
            <div className={classy('getting-ready')}>
              <div>Preparando nossas gôndolas.. Aguarde um instante...</div>
            </div>
          </Route>

          <Route path="/login" exact>
            <button
              className={classy(style.socialButton, style.facebook)}
              disabled={!!loading}
              type="button"
              onClick={() => {
                setLoading('facebook')
                window.location.assign(
                  `https://www.facebook.com/v10.0/dialog/oauth?client_id=${
                    process.env.REACT_APP_FACEBOOK_CLIENT
                  }&redirect_uri=${
                    window.location.origin
                  }/login&state=${JSON.stringify({
                    provider: 'facebook',
                    ...state,
                  })}&scope=public_profile,email`,
                )
              }}
            >
              <FacebookLogo />{' '}
              {loading === 'facebook' ? (
                <span>Entrando...</span>
              ) : (
                <span>Entrar com Facebook</span>
              )}
            </button>
            <button
              className={classy(style.socialButton, style.google)}
              disabled={!!loading}
              type="button"
              onClick={() => {
                setLoading('google')
                window.location.assign(
                  `https://accounts.google.com/o/oauth2/v2/auth?scope=openid email profile https%3A//www.googleapis.com/auth/userinfo.profile&include_granted_scopes=true&response_type=code&state=${JSON.stringify(
                    { provider: 'google', ...state },
                  )}&redirect_uri=${window.location.origin}/login&client_id=${
                    process.env.REACT_APP_GOOGLE_CLIENT_ID
                  }`,
                )
              }}
            >
              <GoogleLogo />
              {loading === 'google' ? (
                <span>Entrando...</span>
              ) : (
                <span>Entrar com Google</span>
              )}
            </button>
          </Route>
        </div>
      </section>
    </div>
  )
}

export default Login
