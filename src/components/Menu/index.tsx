import React, { useState, useRef, useEffect } from 'react'
import { PrivateLink } from 'components'
import { Hamburger, Account, Leaf, Gear } from 'images'
import { USER_LOGOUT } from 'store/contants'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { isUserLoggedin } from 'utils'
import { Store } from 'types'
import style from './Menu.module.scss'

const Menu = (): React.ReactElement => {
  const dispatch = useDispatch()
  const [isOpen, setOpen] = useState(false)
  const user = useSelector((state: Store) => state.user)
  const isUserLogged = isUserLoggedin(user)
  const history = useHistory()

  const wrapperRef = useRef(null)

  function useOutsideAlerter(ref: React.MutableRefObject<HTMLElement | null>) {
    useEffect(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      function handleClickOutside(event: { target: any }) {
        if (ref?.current && !ref.current.contains(event.target)) {
          setOpen(false)
        }
      }
      document.addEventListener('click', handleClickOutside)
      return () => {
        document.removeEventListener('click', handleClickOutside)
      }
    }, [ref])
  }

  useOutsideAlerter(wrapperRef)

  return (
    <div ref={wrapperRef}>
      <button
        className={style.hamburger}
        type="button"
        onClick={() => {
          setOpen(!isOpen)
        }}
      >
        <Hamburger /> <Account />
      </button>
      <div className={style.dropdown} hidden={!isOpen}>
        <ul>
          <li>
            <PrivateLink className={style.dropdownOption} to="/historico">
              <div className={style.icon}>
                <Leaf />
              </div>
              <div>
                <p className={style.title}>Histórico de Compras</p>
                <p className={style.subTitle}>
                  histórico de compras com os produtores
                </p>
              </div>
            </PrivateLink>
          </li>
          <li>
            <PrivateLink className={style.dropdownOption} to="/historico">
              <div className={style.icon}>
                <Gear />
              </div>
              <div>
                <p className={style.title}>Perfil</p>
                <p className={style.subTitle}>
                  Endereço de entrega e preferências
                </p>
              </div>
            </PrivateLink>
          </li>
          <li>
            <button
              className={style.logout}
              type="button"
              onClick={() => {
                if (isUserLogged) {
                  dispatch({ type: USER_LOGOUT })
                } else {
                  history.push('/login')
                }
              }}
            >
              {isUserLogged ? 'Sair' : 'Entrar'}
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Menu
