/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from '../types'

export const isUserLoggedin = (user: User): boolean => {
  return Boolean(user.token.length)
}

export const deliveryDate = (): string => {
  // Delivery Monday / Wed / Friday
  const TODAY = new Date().getDay()
  if (TODAY % 2 === 1) return 'Hoje' // seg, quarta, sex expect domingo
  if (TODAY === 6) return 'Depois de Amanhã' // Sabado
  return 'Amanhã'
}

type Err = {
  message: string
}

export const storage = {
  get(
    key: string,
    middleware = (val: any) => val,
  ): { error?: Err; data?: any } {
    try {
      return {
        data: middleware(atob(localStorage.getItem(key) || '')),
      }
    } catch (err) {
      return {
        error: {
          message: 'Erro ao ler dados locais',
        },
      }
    }
  },
  set(key: string, object: any): boolean | Err {
    try {
      const obj = {
        timestamp: new Date().getTime(),
        ...object,
      }
      localStorage.setItem(key, btoa(JSON.stringify(obj)))
      return true
    } catch (err) {
      return false
    }
  },
  delete(key: string) {
    try {
      localStorage.removeItem(key)
      return true
    } catch (err) {
      return false
    }
  },
}

export function safeParse(query: string, parse = true) {
  const params = new URLSearchParams(window.location.search)
  try {
    return parse ? JSON.parse(params.get(query) || '{}') : params.get(query)
  } catch (err) {
    return {
      error: {
        message: 'Dados do carrinho incorretos',
      },
    }
  }
}
