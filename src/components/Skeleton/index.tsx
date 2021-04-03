import React from 'react'
import Skeleton from 'react-loading-skeleton'

import {
  GridLoading,
  ProductCountLoading,
  ProductDetailsLoading,
  ProductLoading,
  GridListLoading,
  ProductListLoading,
} from './Skeleton.styles'

type Props1 = {
  products: {
    id: number
    slug: string
  }[]
}

type Props2 = {
  products: { amount: string }[]
}

export const LoadingGrid: React.FC<Props1> = ({ products }: Props1) => {
  return (
    <GridLoading>
      {products.map(product => {
        return (
          <ProductLoading key={product.id}>
            <Skeleton height="120px" />
            <ProductDetailsLoading>
              <Skeleton height="25px" width="120px" />
              <ProductCountLoading>
                <Skeleton height="15px" width="80px" />
              </ProductCountLoading>
            </ProductDetailsLoading>
          </ProductLoading>
        )
      })}
    </GridLoading>
  )
}

export const LoadingList: React.FC<Props2> = ({ products }: Props2) => {
  return (
    <GridListLoading>
      {products.map(product => {
        return (
          <ProductListLoading key={product.amount}>
            <Skeleton height="60px" width="80px" />
            <div className="nameProduct">
              <Skeleton />
            </div>

            <div className="removeItem">
              <Skeleton />
            </div>
          </ProductListLoading>
        )
      })}
    </GridListLoading>
  )
}
