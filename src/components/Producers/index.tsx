import React from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Producer,
  ProducerPhone,
  ProducerDetails,
} from './Producer.style';

type Props = {
  data: {
    id: number;
    title: string;
    slug: string;
    phone: string;
  }[];
};

const Producers: React.FC<Props> = (props: Props) => {
  const { data } = props;

  return (
    <Grid>
      {data.map(producer => {
        return (
          <Link
            key={producer.id}
            style={{ color: 'inherit', textDecoration: 'inherit' }}
            to={`/produtor/${producer.slug}`}
          >
            <Producer>
              <ProducerDetails>
                <h3>{producer.title}</h3>
                <ProducerPhone>{producer.phone}</ProducerPhone>
              </ProducerDetails>
            </Producer>
          </Link>
        );
      })}
    </Grid>
  );
};

export default Producers;