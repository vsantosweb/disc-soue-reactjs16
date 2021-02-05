import React from 'react';
import { Spinner } from 'react-bootstrap';

import * as Loader from './styles';
import { usePromiseTracker } from "react-promise-tracker";

function LoaderTracker({area, fullContent = true, ...rest}) {

    const { promiseInProgress } = usePromiseTracker({ area: area, delay: 0 });
    return (
        promiseInProgress && (
            <Loader.Container fullContent={fullContent}>
                <Spinner size={'sm'} animation={'border'} />
            </Loader.Container>
        )

    );
}

export default LoaderTracker;