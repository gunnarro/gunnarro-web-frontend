import React from 'react';
import packageInfo from '../../package.json'

export const Footer = () => (
    <footer className="float-end">
        <div>
            <small>{packageInfo.name} v_{packageInfo.version}</small>
        </div>
        <div className="float-end">
            <small>{packageInfo.description}</small>
        </div>
    </footer>
)