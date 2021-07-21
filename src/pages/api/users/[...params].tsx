import { NextApiRequest , NextApiResponse } from 'next';

interface QueryInterface {
    id : string,
    info : string
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (request :NextApiRequest, response : NextApiResponse) => {
    const id = Number( request.query.params[0] )
    const info = request.query.params[1]

    const users = [
        {id : 1 , name : 'Ricardo Machado' , balance : {
                money : 9000,
                income : 12000,
                outcome : 4000
            }
        },
        {id : 2 , name : 'Dr Zanuff', balance : {
                money : 7000,
                income : 14000,
                outcome : 3000
            }
        },  
        {id : 3 , name : 'Richard Axe', balance : {
                money : 20000,
                income : 25000,
                outcome : 7000
            }
        },
        {id : 4 , name : 'GOP' , balance : {
                money : 5000,
                income : 8000,
                outcome : 1500
            }
        },  
    ]

    const result = info !== undefined
    ?
    {
        user : users[id].name , data : {
            [info] : users[id].balance[info]
        } 
    }
    : users[id]

    return response.json( result)

}