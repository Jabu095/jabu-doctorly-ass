
import React, { FunctionComponent, useEffect } from 'react';

type Props = {
    exampleRequest: (data: boolean) => void;
    home: boolean;
}

const HomeComponent:FunctionComponent<Props> = ({ home , exampleRequest}) => {
    useEffect(() => {
        exampleRequest(false)
    },[exampleRequest]);

    return (
        <div>
            <p>Home component {home}</p>
        </div>
    )
}

export default HomeComponent;
