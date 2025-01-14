import React from 'react';
import { Page } from '../Components/layouts/Sidebar/Page';
import Navbar from '../Components/layouts/Navbar';

const CloudInfrastructure = () => {
    return (
        <div>
            <div className="flex flex-shrink ">
          <Page />
          <div className="w-screen  flex flex-col">
            <Navbar />
            <div className="container mx-auto">           
            </div>
            </div>
            </div>
        </div>
    );
};

export default CloudInfrastructure;