import React from 'react';

import { Button, Icon } from 'antd';

export default class Login extends React.Component {
    render() {
        return (
            <div style={{
                height: '100%',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
            }}>
                <Icon type='redo' style={{
                    fontSize: 36,
                    marginBottom: 30,
                    color: 'white'
                }} />
                <p style={{
                    textAlign: 'center',
                    fontSize: 13,
                    letterSpacing: '10px',
                    color: 'white'
                }} >360FACTORS</p>
            <Button type='primary' style={{
                marginTop: 25
            }} onClick={async () => {
                await fetch('https://stephentorr.es/oauth', {
                    method: 'POST'
                });
            }}>Login</Button>
            </div>
        )
    }
}