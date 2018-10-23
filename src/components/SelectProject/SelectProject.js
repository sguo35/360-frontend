import React from 'react';

import SelectProjectCenter from './SelectProjectCenter';
import { store } from '../../redux/store';

export default class SelectProject extends React.Component {
    async fetchProjects(email) {
        const projects = await fetch("http://localhost:3000/getAccount", {
            method: "POST",
            body: JSON.stringify({ email: email })
        })
        store.dispatch({
            type: "INIT_ACCOUNT_INFO",
            payload: await projects.json()
        })
    }
    render() {
        console.log(this.props);
        if (this.props.match.params.info && this.props.location) {
            let json = this.props.match.params.info + this.props.location.hash;
            json = json.substring(1);
            
            json = decodeURI(json);
            console.log(json);
            store.dispatch({
                type: "INIT_USER_INFO",
                payload: JSON.parse(json)
            });
            console.log("Dispatched");
        }
        
        console.log(this.props);
        return (
            <div className="Rate-parent-container">
                <SelectProjectCenter />
            </div>
        );
    }
}