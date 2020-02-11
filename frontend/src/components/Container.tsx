import React, { ReactNode, FunctionComponent } from 'react'
import './Container.css'

type Props = {
    children?: ReactNode,
    className?: string,
    flexible?: boolean,
    vertical?: boolean,
}

const Container : FunctionComponent<Props> = ( { children, className, flexible, vertical } ) => (
    <div className={`container${(className && ` ${className}`) || ''}${(flexible && ' flexible') || ''}${(vertical && ' vertical') || ''}`}>{children}</div>
)


export default Container