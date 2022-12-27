import React from "react";

import {Card, CardBody, CardTitle} from 'reactstrap'

function Profilecard({details}){
    return(
        <div>
            <Card>
                <CardBody className='text-center'>
                    <img className='rounded-circle  img-thumbnail border-danger' height="150" width="150" src={details.picture?.large}/>
                    <CardTitle className="text-primary">
                        <h1>
                            <span>{details.name?.title}.{details.name?.first}.{details.name?.last}</span>
                        </h1>
                    </CardTitle>
                </CardBody>
            </Card>
        </div>
    )
}
export default Profilecard