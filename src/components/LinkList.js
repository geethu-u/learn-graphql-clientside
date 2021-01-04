import React from 'react';
import Link from './Link';
import {FEED_QUERY} from '../queries';

import { useQuery } from '@apollo/client';


const LinkList = () => {
    const { data } = useQuery(FEED_QUERY);

  return (
    <div>
      {data && data.feed.links.map((link, index) => (
        <Link key={link.id} link={link} index={index} />
      ))}
    </div>
  );
};

export default LinkList;