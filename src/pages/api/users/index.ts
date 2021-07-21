import { NextApiRequest , NextApiResponse } from 'next';

// eslint-disable-next-line import/no-anonymous-default-export
export default (request :NextApiRequest, response : NextApiResponse) => {
    const users = [
        {id : 1 , name : 'Ricardo Machado'},
        {id : 2 , name : 'Dr Zanuff'},
        {id : 3 , name : 'Richard Axe'},
        {id : 4 , name : 'GOP'},
    ]

    

    return response.json(users)

}