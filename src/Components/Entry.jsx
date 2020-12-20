import React from 'react';
import ListState from './ListState'
import '../App.scss';

class Entry extends React.Component{

    render(){
        return(
            <div className="container">
                <h1 className="py-3">Estados do Brasil</h1>
                <ListState />

            </div>
        ) 
    }
}

export default Entry;