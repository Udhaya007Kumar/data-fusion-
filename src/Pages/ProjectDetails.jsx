import React from 'react';
import { Page } from '../Components/layouts/Sidebar/Page.jsx';
import Navbar from '../Components/layouts/Navbar';
import { Input } from '../Components/ui/input';
import { Label } from '../Components/ui/label';
import { ComboboxDemo } from '../Components/layouts/ComboboxDemo';
import { Button } from '../Components/ui/button';
import { FaLongArrowAltRight } from "react-icons/fa";


const ProjectDetails = () => {
    return (
      <div>
        <div className="flex flex-shrink ">
          <Page />
          <div className="w-screen  flex flex-col">
            <Navbar />
            <div className="container mx-auto">
              <h1 className="font-geist text-2xl">Project details</h1>

              <div className="flex   bg-gray-100 mr-5">
                <div className="mt-4 space-y-5 bg-white p-2 rounded shadow-lg w-full max-w-lg">
                  <div>
                    <Label>Project Name</Label>
                    <Input
                      type="text"
                      className="mt-2 "
                      placeholder="Enter Project name"
                    ></Input>
                  </div>
                  <div className="mt-5">
                  <Label>Description</Label>
                  <Input
                    className="mt-2 s"
                    placeholder="project description"
                  ></Input>
                </div>
                <div className="mt-5">
                  <Label>Team assignment</Label>
                  <Input className="mt-2 s" placeholder="Assign Team"></Input>
                </div>
                <div className="mt-5  gap-4">
                 <div>
                 <Label>Priority level</Label>
                 </div>
                  <div className='mt-2 '>
                  <ComboboxDemo
                   />
                  </div>
                </div>

                <div className='flex justify-end mr-3'>
                    <Button className='mt-5 w-full md:w-1/4 ' >Next
                        <span className='ml-2 text-lg'><FaLongArrowAltRight /></span>
                    </Button>
                </div>                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProjectDetails;
