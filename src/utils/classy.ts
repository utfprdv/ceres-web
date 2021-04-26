type Item = string | { [k: string]: boolean }
type Values = Array<Item>

const stringList = (param: Item): Array<string> => {
  return typeof param === 'string'
    ? [param]
    : Object.entries(param)
        .filter(([, value]) => value)
        .reduce((acc, curr) => {
          const s: string = curr[0]
          return [...acc, s]
        }, [] as Array<string>)
}

const classy = (...rest: Values): string => {
  return rest
    .reduce((acc: Array<string>, curr: Item) => {
      return [...acc, ...stringList(curr)]
    }, [])
    .join(' ')
}

export default classy
