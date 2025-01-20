import React, { useState } from 'react';
import { Page } from '../Components/layouts/Sidebar/Page.jsx';
import { Label } from '../Components/ui/label'
import { Button } from '../Components/ui/button';
import { Input } from '../Components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../Components/ui/select"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../Components/ui/card"
import { Badge } from "../Components/ui/badge.js"
import { FaEye, FaEyeSlash } from 'react-icons/fa';





const DataSourcemagement = () => {

  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

    return (
      <div>
         <div className="flex flex-shrink ">
          <Page />   

          <div className="w-full min-h-screen mt-4">
  <div className="items-center flex flex-col justify-center mt-12">
    <Card>
      <CardHeader>
        <CardTitle className="bg-red-400">Datasource Credentials</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="border border-gray-400 p-5 flex gap-6 justify-evenly">
          <Label htmlFor="dataSourceName" className="text-sm font-medium min-w-[120px] mt-2">
            DataSource name
          </Label>
          <Input id="dataSourceName" type="text" placeholder="name" className="w-full sm:flex-1" />
        </div>
        <div className="border border-gray-400 p-5 flex gap-6 justify-evenly">
          <Label htmlFor="dataSourceName" className="text-sm font-medium min-w-[120px] mt-2">
          Hostname & Port
          </Label>
          <Input id="Hostname" type="text" placeholder="Hostname" className="w-full sm:flex-1" />
          <Input id="Port" type="number" placeholder='port' className="w-full sm:flex-1" />
        </div>
        <div className="border border-gray-400 p-5 flex gap-6 justify-evenly">
          <Label htmlFor="dataSourceName" className="text-sm font-medium min-w-[120px] mt-2">
          Username & Password
          </Label>
          <Input id="Username" type="text" placeholder="Username" className="w-full sm:flex-1" />
          
          <div className="relative">
      <Input
        type={isPasswordVisible ? 'text' : 'password'}
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <div
        onClick={togglePasswordVisibility}
        className="absolute right-5 top-1/2  transform -translate-y-1/2 "
      >
        {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
      </div>
    </div>
          
        </div>
        <div className="border border-gray-400 p-5 flex gap-6 justify-evenly">
          <Label htmlFor="dataSourceName" className="text-sm font-medium min-w-[120px] mt-2">
            Database name
          </Label>
          <Input id="DatabaseName" type="text" placeholder="DatabaseName" className="w-full sm:flex-1" />
        </div>
        <div className="border border-gray-400 p-5 flex gap-6 justify-evenly">
          <Label htmlFor="dataSourceName" className="text-sm font-medium min-w-[120px] mt-2">
          Schemas
          </Label>
          {/* <Input id="Schemas" type="text" placeholder="Schemas" className="w-full sm:flex-1" <Badge>dd</Badge> /> */}
          <div className="flex w-full sm:flex-1 items-center relative">
    <Input id="Schemas" type="text" placeholder="" className="flex-1" />
   <div className='absolute'>
   <Badge className="ml-2 ">dbt <span className='ml-1 text-sm mb-1'>x</span> </Badge>
   <Badge className="ml-2 ">dbt <span className='ml-1 text-sm mb-1'>x</span> </Badge>
   </div>
  </div>      
        </div>
        <div className="border border-gray-400 p-5 flex gap-6 justify-evenly">
          <Label htmlFor="dataSourceName" className="text-sm font-medium min-w-[120px] mt-2">
          SSH
          </Label>
          <Input id="SSH" type="text" placeholder="Do not use SSH credentials" className="w-full sm:flex-1" />
          
        </div>        
        <div className="mt-6 border border-gray-400 p-5">
          <h1 className="font-geist font-medium">If you would like to whitelist our IP addresses, they are:</h1>
          <div className="mt-2">
          <div className=" w-full flex items-center gap-4 border border-gray-400 p-3">
        <span>44.219.39.124</span>
        <div className="w-px h-6 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
        <span>34.230.173.35</span>
        <div className="w-px h-6 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
        <span>100.26.25.127</span>
      </div>
            
         
            
          
                   </div>
        </div>
      </CardContent>
      <CardFooter className="items-end justify-end">
        <Button>Connect</Button>
      </CardFooter>
    </Card>
  </div>
</div>    
        </div>
      </div>
    );
};

export default DataSourcemagement