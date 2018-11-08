import React from 'react';

export default class Processing extends React.Component {
    render() {
        return (
            <div style={{
                display: 'flex',
                height: '100%',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center'
            }}>
                <p style={{ textAlign: 'center', color: 'white' }}>We're currently processing your feedback. Please check back at a later time.</p>
            </div>
        )
    }
}