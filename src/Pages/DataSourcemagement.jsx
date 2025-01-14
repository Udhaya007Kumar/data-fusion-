import React from 'react';
import { Page } from '../Components/layouts/Sidebar/Page';
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
          <div className="w-screen  flex flex-col">
            <Navbar />

            <div className="container mx-auto">
              <h1 className="font-geist text-2xl">Exiting Sources</h1>

              <div >
                <div className="grid grid-flow-row gap-4 mt-8 m-4 md:w-1/2">
                  <div className="space-y-4 border border-gray-300 rounded-xl">
                    {/* Example Connection */}
                    <div className="p-3 bg-gray-100 rounded-lg">
                      <div className="bg-white shadow-md rounded-lg p-4 w-full">
                        <div className="flex flex-col sm:flex-row sm:items-center font-geist">
                          {/* <div className="mr-7">
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
                          </div> */}
                          <div className="flex-grow">
                            <div className="text-lg sm:text-xl font-semibold">
                              oracle Production DB
                            </div>
                            <div className="text-sm sm:text-base text-gray-600 mt-2 sm:mt-0">
                              Oracle
                            </div>
                          </div>
                          <div className="flex mt-4 sm:mt-0 gap-3 sm:gap-5">
                            {/* Icons */}
                            {/* <svg
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
                            </svg> */}
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
                          {/* <div className="mr-7">
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
                          </div> */}
                          <div className="flex-grow">
                            <div className="text-lg sm:text-xl font-semibold">
                              Analytics PostgreSQL
                            </div>
                            <div className="text-sm sm:text-base text-gray-600 mt-2 sm:mt-0">
                              PostgreSQL
                            </div>
                          </div>
                          <div className="flex mt-4 sm:mt-0 gap-3 sm:gap-5">
                            {/* Icons */}
                            {/* <svg
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
                            </svg> */}
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

              <div className="mt-5">
                <h1 className="font-geist text-2xl">Add New Source</h1>
                </div>

                <div className="flex flex-col rounded-xl w-full sm:w-1/2 p-4  bg-white shadow-md">
  <div className="flex flex-col sm:flex-row gap-5">
    <div className="flex-grow">
     <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>
    </div>
    <div className="flex-grow">
      <Input 
        
       
      />
    </div>
    <div className="flex-grow">
      <Input 
        
         
      />
    </div>
  </div>
</div>




              




              

              <div className="mt-5 w-full" >
                <Button>Add Source</Button>
              </div>



            </div>
          </div>
        </div>
      </div>
    );
};

export default DataSourcemagement;