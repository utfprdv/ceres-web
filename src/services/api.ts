/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
const defaultOptions = {
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
  method: 'GET',
}

// minimal wrapper for fetch
const request = (url: string | URL, options?: any): Promise<unknown> => {
  const baseUrl =
    process.env.NODE_ENV === 'development'
      ? 'http://127.0.0.1:8000/api/'
      : 'https://ceres.app.br/api/'

  let addr

  if (url instanceof URL) {
    addr = url
  } else {
    addr = new URL(url, baseUrl)
  }

  return fetch(addr.toString(), {
    headers: {
      ...defaultOptions.headers,
      ...(options?.Authorization
        ? { Authorization: options.Authorization }
        : {}),
    },
    ...options,
  }).then(res => res.json())
}

export const get = (
  path: string | URL,
  options?: RequestInit,
): Promise<unknown> => request(path, options)

// eslint-disable-next-line @typescript-eslint/ban-types
type PostTypes = {
  [k: string]: any
}

export const post = (
  path: string | URL,
  options?: PostTypes,
): Promise<unknown> => request(path, { ...options, method: 'POST' })
