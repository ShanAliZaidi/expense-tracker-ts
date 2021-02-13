import React, { Props } from 'react';
import type from 'os';



export type transactiontype = {
    id: number,
    description: string,
    amount: number,
    type: any
}

export type statetype = {
    transaction: transactiontype[],
}

export type providerType = {
    children : JSX.Element,
    
}

