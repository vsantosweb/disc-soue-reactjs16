import React from 'react';

export default function Footer(props) {
    return (
        <footer className={`bg-${props.color||'secondary'} ${props.layout}`}>
            <h3>Informações para footer</h3>
        </footer>
    )
}