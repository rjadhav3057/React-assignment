import React from 'react'

export default class Footer extends React.Component{

    constructor(props)
    {
        super();
    }
    
    render()
    {
        return(
        <div bg="primary" className="Footer" >
            <div className="no-margin">&copy;Copyrights by Liviano Rooms</div>
        </div>
        );
    }
}    