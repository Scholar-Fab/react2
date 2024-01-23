import React from   'react';
import { Outlet } from 'react-router-dom';


function InfosFormateurs(){

    return(
        <div style={{ margin: 10}}>
            <h1>Les formateurs</h1>
            <Outlet />
        </div>
    )
}

export default InfosFormateurs;