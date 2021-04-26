const Utils = {
  filter(productName: string, search: string): RegExpMatchArray | null {
    const productNameFilter = productName
      .toLowerCase()
      .replace(/[àáâãäå]/, 'a')
      .replace(/[èéêë]/, 'e')
      .replace(/[ìíîï]/, 'i')
      .replace(/[òóôöõ]/, 'o')
      .replace(/[ùúûü]/, 'u')

    const searchFilter = search
      .toLowerCase()
      .replace(/[àáâãäå]/, 'a')
      .replace(/[èéêë]/, 'e')
      .replace(/[ìíîï]/, 'i')
      .replace(/[òóôöõ]/, 'o')
      .replace(/[ùúûü]/, 'u')

    return productNameFilter.match(new RegExp(searchFilter, 'gi'))
  },
}

export default Utils
