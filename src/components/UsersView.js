import React from 'react';
import { useQuery } from '@apollo/client';

import {USERS_LIST_QUERY} from '../queries'

export default () => {

    const {data} = useQuery(USERS_LIST_QUERY);
    return (
        <ul>
        {
        data && data.userlist ? data.userlist.users.map(user=>{
            return (
            <li>
                {user.name}
                <ul>
                    {user.links.length >0 ?
                        user.links.map(link=><li>{link.description}</li>) 
                        : 'No posts so far.'
                     }
                </ul>
            </li>)
        })  : null 
        }
        </ul> 
    );
}
