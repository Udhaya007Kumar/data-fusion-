import React, { useRef, useState } from 'react';
import { Page } from '../Components/layouts/Sidebar/Page.jsx';
import { Label } from '../Components/ui/label'
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

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../Components/ui/card"
import { Badge } from "../Components/ui/badge"
import { FaEye, FaEyeSlash } from 'react-icons/fa';





const DataSourcemagement = () => {

  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [tags, setTags] = useState([]);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  const handleKeyDown = (e) => {
    // Add tag on Enter or comma
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addTag();
    }
    // Remove last tag on Backspace if input is empty
    else if (e.key === 'Backspace' && input === '' && tags.length > 0) {
      e.preventDefault();
      removeTag(tags.length - 1);
      if (tags.length > 0) {
        setInput(tags[tags.length - 1]);
      }
    }
  };

  const addTag = () => {
    const trimmedInput = input.trim();
    if (trimmedInput !== '' && !tags.includes(trimmedInput)) {
      setTags([...tags, trimmedInput]);
      setInput('');
    }
  };

  const removeTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };
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
                  <CardTitle className="bg-red-400">
                    Datasource Credentials
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border border-gray-400 p-5 flex gap-6 justify-evenly">
                    <Label
                      htmlFor="dataSourceName"
                      className="text-sm font-medium min-w-[120px] mt-2"
                    >
                      DataSource name
                    </Label>
                   
                    <Input
                      id="dataSourceName"
                      type="text"
                      placeholder="name"
                      className="w-full sm:flex-1"
                    />
                   
                  </div>
                  <div className="border border-gray-400 p-5 flex gap-6 justify-evenly">
                    <Label
                      htmlFor="dataSourceName"
                      className="text-sm font-medium min-w-[120px] mt-2"
                    >
                      Hostname & Port
                    </Label>
                    <Input
                      id="Hostname"
                      type="text"
                      placeholder="Hostname"
                      className="w-full sm:flex-1"
                    />
                    <Input
                      id="Port"
                      type="number"
                      placeholder="port"
                      className="w-full sm:flex-1"
                    />
                  </div>
                  <div className="border border-gray-400 p-5 flex gap-6 justify-evenly">
                    <Label
                      htmlFor="dataSourceName"
                      className="text-sm font-medium min-w-[120px] mt-2"
                    >
                      Username & Password
                    </Label>
                    <Input
                      id="Username"
                      type="text"
                      placeholder="Username"
                      className="w-full sm:flex-1"
                    />
                    <div className="relative">
                      <Input
                        type={isPasswordVisible ? "text" : "password"}
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border p-2 rounded w-full"
                      />
                      <div
                        onClick={togglePasswordVisibility}
                        className="absolute right-3 top-5  transform -translate-y-1/2 m "
                      >
                        {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                      </div>
                    </div>
                  </div>
                  <div className="border border-gray-400 p-5 flex gap-6 justify-evenly">
                    <Label
                      htmlFor="dataSourceName"
                      className="text-sm font-medium min-w-[120px] mt-2"
                    >
                      Database name
                    </Label>
                    <Input
                      id="DatabaseName"
                      type="text"
                      placeholder="DatabaseName"
                      className="w-full sm:flex-1"
                    />
                  </div>
                  <div className="border border-gray-400 p-5 flex gap-6 justify-evenly">
                    <Label
                      htmlFor="dataSourceName"
                      className="text-sm font-medium min-w-[120px] mt-2"
                    >
                      Schemas
                    </Label>
                    <div className="w-full max-w-2xl mx-auto">
                      <div className="flex flex-wrap gap-2 p-2 border rounded-lg bg-white min-h-[50px]">
                        {/* //static tag */}
                        {/* <Badge className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                    <span>dbt</span>
                    <button
                    onClick={() => removeTag(index)}
                     >
                        ×
                    </button>
                </Badge> */}

                        {tags.map((tag, index) => (
                          <Badge
                            key={index}
                            className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full"
                          >
                            <span>{tag}</span>
                            <button
                              onClick={() => removeTag(index)}
                              className="w-4 h-4 flex items-center justify-center rounded-full hover:bg-blue-200"
                            >
                              ×
                            </button>
                          </Badge>
                        ))}
                        <Input
                          ref={inputRef}
                          type="text"
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                          onKeyDown={handleKeyDown}
                          className="flex-1 min-w-[10px] outline-none border-none "
                          placeholder={tags.length === 0 ? "Enter tags..." : ""}
                        />
                      </div>
                      {/* <p className="mt-2 text-sm text-gray-500">
        Press Enter or comma to add tags
      </p> */}
                    </div>
                  </div>

                  <div className="border border-gray-400 p-5 flex gap-6 justify-evenly">
                    <Label
                      htmlFor="dataSourceName"
                      className="text-sm font-medium min-w-[120px] mt-2"
                    >
                      SSH
                    </Label>
                    <div className='w-full h-12 '>
                    <Select >
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Do not use SSH credentials" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value='SSHauthentication'>Working with SSH authentication settings?</SelectItem>
           <SelectItem value="interface">Trying to disable certain click options or buttons in an interface?</SelectItem>
          <SelectItem value="securityissue">Dealing with a specific SSH-related security issue?</SelectItem>
         
        </SelectGroup>
      </SelectContent>
    </Select>
                    </div>
                   
                    {/* <Input
                      id="SSH"
                      type="text"
                      placeholder="Do not use SSH credentials"
                      className="w-full sm:flex-1"
                    /> */}

                  </div>
                  <div className="mt-6 border border-gray-400 p-5">
                    <h1 className="font-geist font-medium">
                      If you would like to whitelist our IP addresses, they are:
                    </h1>
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