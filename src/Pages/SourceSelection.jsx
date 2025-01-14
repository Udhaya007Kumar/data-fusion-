import React from 'react';
import { Page } from '../Components/layouts/Sidebar/Page.jsx';
import Navbar from '../Components/layouts/Navbar';
import { Input } from '../Components/ui/input';
import { Label } from '../Components/ui/label';
import { ComboboxDemo } from '../Components/layouts/ComboboxDemo';
import { Button } from '../Components/ui/button';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../Components/ui/table"
import { Checkbox } from "../Components/ui/checkbox"

const SourceSelection = () => {
    return (
      <div>
        <div className="flex flex-shrink ">
          <Page />
          <div className="w-screen  flex flex-col">
            <Navbar />

            <div className="container mx-auto">
              <h1 className="font-geist text-2xl">Source selection</h1>

              <div className="flex   bg-gray-100 mr-5">
                <div className="mt-4 space-y-5 bg-white p-2 rounded shadow-lg w-full max-w-lg">


                  <div>
                    <div className="flex ">
                      <Label>Data source type</Label>
                    </div>
                    <div className="mt-5 w-full ">
                      <ComboboxDemo />
                    </div>
                  </div>

                  <div className="flex ">
                    <div>
                      <div>
                        <div className="flex ">
                          <Label>Hostname/IP</Label>
                        </div>
                        <div className="mt-5">
                          <Input
                            type="text"
                            className="mt-2 "
                            placeholder="Enter hostname"
                          ></Input>
                        </div>
                      </div>
                    </div>

                    <div className="ml-9">
                      <div>
                        <div className="flex ">
                          <Label>Data source type</Label>
                        </div>
                        <div className="mt-5">
                          <ComboboxDemo />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex">
                    <div>
                      <Label>Username</Label>
                      <Input
                        type="text"
                        className="mt-2 "
                        placeholder="Database username"
                      ></Input>
                    </div>
                    <div className="ml-9">
                      <Label>Password</Label>
                      <Input
                        type="text"
                        className="mt-2 "
                        placeholder="Database password"
                      ></Input>
                    </div>
                  </div>

                  <div className="flex">
                    <div>
                      <Input
                        type="text"
                        className="mt-2 "
                        placeholder="Available Schemas"
                      ></Input>
                    </div>
                    <div className="ml-9">
                      <Input
                        type="text"
                        className="mt-2 "
                        placeholder="Search tables"
                      ></Input>
                    </div>
                  </div>

                  <div>
                    <Table>
                      <TableCaption>
                        A list of your recent invoices.
                      </TableCaption>
                      <TableHeader>
                        <TableRow className='font-geist'>
                          <TableHead>Select Table Name</TableHead>
                          <TableHead>Columns</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                        <TableCell><Checkbox className="mr-2 mt-3" />customers</TableCell>    
                        <TableCell>5</TableCell> 
                        </TableRow>
                        <TableRow>
                        <TableCell><Checkbox className="mr-2 mt-3" />orders</TableCell> 
                          <TableCell>7</TableCell> 
                        </TableRow>
                        <TableRow>
                        <TableCell><Checkbox className="mr-2 mt-3" />products</TableCell> 
                          <TableCell>6</TableCell> 
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                  <div className='flex justify-between'>
                    <div>
                      <Button>Back</Button>                      
                    </div>
                    <div>
                      <Button>Preview Selected Tables</Button>
                    </div>
                  </div>  
                </div>

                
              </div>
            </div>




            
          </div>
        </div>
      </div>
    );
};

export default SourceSelection;
