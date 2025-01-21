import React from 'react';
import { Page } from '../Components/layouts/Sidebar/Page.jsx';
import Navbar from '../Components/layouts/Navbar';
import { Button } from '../Components/ui/button';
import { Label } from '../Components/ui/label';
import { Input } from '../Components/ui/input';
// import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardFooter,
//     CardHeader,
//     CardTitle,
//   } from "/components/ui/card"

import { ComboboxDemo } from '../Components/layouts/ComboboxDemo';
import { Switch } from "../Components/ui/switch"


  
  

const ConnectionMangScreen = () => {
    return (
      <div>
        <div className="flex flex-shrink ">
          <Page />
          <div className="w-screen  flex flex-col">
            {/* <Navbar /> */}

            {/* contaninerr */}
            <div className="flex flex-col lg:flex-row gap-4 p-4 mt-12">
              {/* Connections List */}
              <div className="w-full lg:w-1/3  pr-4 ">
                <div className="flex justify-between items-center mb-4 ">
                  <h2 className="font-semibold text-lg font-geist">
                    Connections
                  </h2>
                  <Button>+ Add</Button>
                </div>
                <div className="grid grid-flow-row gap-4 mt-8">
                  <div className="space-y-4 border border-gray-300 rounded-xl">
                    {/* Example Connection */}
                    <div className="p-3 bg-gray-100 rounded-lg">
                      <div className="bg-white shadow-md rounded-lg p-4 w-full">
                        <div className="flex flex-col sm:flex-row sm:items-center font-geist">
                          <div className="mr-7">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#0041a8"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="lucide lucide-database"
                            >
                              <ellipse cx="12" cy="5" rx="9" ry="3" />
                              <path d="M3 5V19A9 3 0 0 0 21 19V5" />
                              <path d="M3 12A9 3 0 0 0 21 12" />
                            </svg>
                          </div>
                          <div className="flex-grow">
                            <div className="text-lg sm:text-xl font-semibold">
                              Production Database
                            </div>
                            <div className="text-sm sm:text-base text-gray-600 mt-2 sm:mt-0">
                              2024-03-15
                            </div>
                          </div>
                          <div className="flex mt-4 sm:mt-0 gap-3 sm:gap-5">
                            {/* Icons */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#00a357"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-circle-check"
                            >
                              <circle cx="12" cy="12" r="10" />
                              <path d="m9 12 2 2 4-4" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-file-code-2"
                            >
                              <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" />
                              <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                              <path d="m5 12-3 3 3 3" />
                              <path d="m9 18 3-3-3-3" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#b70101"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-trash-2"
                            >
                              <path d="M3 6h18" />
                              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                              <line x1="10" x2="10" y1="11" y2="17" />
                              <line x1="14" x2="14" y1="11" y2="17" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 border border-gray-300 rounded-xl">
                    {/* Example Connection */}
                    <div className="p-3 bg-gray-100 rounded-lg">
                      <div className="bg-white shadow-md rounded-lg p-4 w-full">
                        <div className="flex flex-col sm:flex-row sm:items-center font-geist">
                          <div className="mr-7">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#15b300"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="lucide lucide-file-text"
                            >
                              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                              <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                              <path d="M10 9H8" />
                              <path d="M16 13H8" />
                              <path d="M16 17H8" />
                            </svg>
                          </div>
                          <div className="flex-grow">
                            <div className="text-lg sm:text-xl font-semibold">
                              File Storage
                            </div>
                            <div className="text-sm sm:text-base text-gray-600 mt-2 sm:mt-0">
                              2024-03-15
                            </div>
                          </div>
                          <div className="flex mt-4 sm:mt-0 gap-3 sm:gap-5">
                            {/* Icons */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#00a357"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-circle-check"
                            >
                              <circle cx="12" cy="12" r="10" />
                              <path d="m9 12 2 2 4-4" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-file-code-2"
                            >
                              <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" />
                              <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                              <path d="m5 12-3 3 3 3" />
                              <path d="m9 18 3-3-3-3" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#b70101"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-trash-2"
                            >
                              <path d="M3 6h18" />
                              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                              <line x1="10" x2="10" y1="11" y2="17" />
                              <line x1="14" x2="14" y1="11" y2="17" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>




              </div>
              {/* connectionDetails */}
              <div className=" md:ml-8 mt-2">
                <h2 className="font-semibold text-lg font-geist">
                  Connection Details
                </h2>
                
                <div className="mt-10   w-full sm:w-[400px] font-geist">
                  <form className="space-y-4">
                    {/* Name Field */}
                    
                    <div className="w-full  ">
                      <Label
                        htmlFor="connectiontype"
                        className="block text-lg  text-gray-700"
                      >
                        Connection Type
                      </Label>
                      <div className='mt-2 '>
                      <ComboboxDemo  />
                      </div>                    
                    </div>


                    
                    <div className='w-full flex gap-7'>
                      <div>
                      <Label
                        htmlFor="Hostname"
                        className="block text-lg  text-gray-700"
                      >
                       Hostname
                      </Label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        className="mt-2 "
                      />
                      </div>
                      <div>
                      <Label
                        htmlFor="Port"
                        className="block text-lg  text-gray-700"
                      >
                        Port
                      </Label>
                      <div className='mt-2'>
                        <ComboboxDemo />
                      </div>
                      </div>
                    </div>
                    <div className="w-full ">
                      <Label
                        htmlFor="DatabaseName"
                        className="block text-lg  text-gray-700"
                      >
                        Database Name
                      </Label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        className="mt-2 "
                      />
                    </div>

                    {/* Credentials */}
                    <div className='w-full flex gap-7'>
                      <div>
                      <Label
                        htmlFor="connectiontype"
                        className="block text-lg  text-gray-700"
                      >
                        Credentials
                      </Label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Username"
                        className="mt-2 "
                      />
                      </div>
                      <div>              
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Password"
                        className="mt-9"
                      />
                      </div>
                    </div>
                    <div className='flex justify-between'>
                      <Label>Firewall Rules</Label>
                      <Switch />
                    </div>
                    {/* Submit Button */}
                    <div>
                      <Button type="submit" className="w-full font-geist ">
                        Test Connection
                      </Button>
                    </div>
                  </form>
                </div>



                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ConnectionMangScreen;