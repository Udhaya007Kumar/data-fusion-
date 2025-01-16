import React from 'react';
import { Page } from '../Components/layouts/Sidebar/Page.jsx';
import Navbar from '../Components/layouts/Navbar';
import { Button } from '../Components/ui/button';
import { Input } from '../Components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../Components/ui/select"




const DataSourcemagement = () => {
    return (
      <div>
        <div className="flex flex-shrink ">
          <Page />  
          <div className="container mx-auto mt-12">
            
          
          </div>
          
        </div>       
      </div>
    );
};

export default DataSourcemagement;