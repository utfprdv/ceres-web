import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as IconPoint } from '../../images/point.svg'
import {
  Grid,
  Producer,
  ProducerPhone,
  ProducerDetails,
} from './Producer.style'

import { Producer as ProducerType } from '../../types'

type Props = {
  data: Array<ProducerType>
}

const Producers = (props: Props): React.ReactElement => {
  const { data } = props

  return (
    <Grid>
      {data.map(producer => (
        <Link
          key={producer.id}
          style={{ color: 'inherit', textDecoration: 'inherit' }}
          to={`/produtor/${producer.id}`}
        >
          <Producer>
            <svg>
              <IconPoint />
            </svg>
            <ProducerDetails>
              <h3>{producer.username}</h3>
              <ProducerPhone>{producer.whatsapp}</ProducerPhone>
            </ProducerDetails>
          </Producer>
        </Link>
      ))}
    </Grid>
  )
}

export default Producers
