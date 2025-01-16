import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../Components/ui/card"

  import Navbar from '../Components/layouts/Navbar';
  import { Button } from '../Components/ui/button'
  import { Progress } from "../Components/ui/progress"
  import { Page } from '../Components/layouts/Sidebar/Page.jsx';







const Home = () => {
    return (
      <div className='flex flex-shrink '>
        <Page />
        <div className="w-screen  flex flex-col">
          {/* <Navbar /> */}
          <div className="p-4 container mx-auto flex flex-col gap-6 mt-5 md:flex-row md:gap-6  ">
            <div className="w-full md:w-1/3">
              <Card className="p-4 ">
                <CardHeader>
                  <CardTitle>Active Projects</CardTitle>
                  <CardDescription className="text-2xl font-bold">
                    24
                  </CardDescription>
                </CardHeader>
                {/* <CardContent className="text-2xl font-bold">24</CardContent> */}
                {/* <CardFooter>Card Footer</CardFooter> */}
              </Card>
            </div>

            <div className="w-full md:w-1/3">
              <Card className="p-4">
                <CardHeader>
                  <CardTitle>Pending Tasks</CardTitle>
                  <CardDescription className="text-2xl font-bold">
                    12
                  </CardDescription>
                </CardHeader>
                {/* <CardContent className="text-2xl font-bold">24</CardContent> */}
                {/* <CardFooter>Card Footer</CardFooter> */}
              </Card>
            </div>

            <div className="w-full md:w-1/3">
              <Card className="p-4">
                <CardHeader>
                  <CardTitle>Completed ETLs</CardTitle>
                  <CardDescription className="text-2xl font-bold">
                    156
                  </CardDescription>
                </CardHeader>
                {/* <CardContent className="text-2xl font-bold">24</CardContent> */}
                {/* <CardFooter>Card Footer</CardFooter> */}
              </Card>
            </div>
          </div>

          <div className="container mx-auto mt-5 px-4">
            <Button className="w-full sm:w-auto">Create New Project</Button>
            <div className="border-t border-gray-200 mt-5"></div>
          </div>

          <div className="container mx-auto mt-5 flex flex-col md:flex-row gap-4">
            {/* <!-- Left Column  --> */}
            <div className="w-full md:w-3/4 bg-gray-200 p-4">
              <h1 className="text-xl font-geist  md:mb-3 md:p-8">
                Recent Projects
              </h1>

              <div className="p-8">
                <div className="ml-3 flex items-center justify-between">
                  <h1 className="text-lg font-geist">Data Migration Project</h1>
                  <span className="text-sm text-gray-500">2 hours ago</span>
                </div>
                <div className="p-5">
                  <Progress value={40} />
                </div>
              </div>
            </div>

            {/* <!-- Right Column  --> */}
            <div className="w-full md:w-1/4 bg-gray-100 p-4">
              <h1 className="text-xl font-geist  mb-3">Analytics Overview</h1>
              <div className="grid grid-cols-1  gap-4">
                <Card className="border border-gray-300 rounded-lg shadow-md">
                  <CardHeader>
                    {/* <CardTitle>Data</CardTitle> */}
                    <CardDescription>Data volume processed</CardDescription>
                  </CardHeader>
                  {/* <CardContent>
      <p>Card Content</p>
    </CardContent> */}
                  {/* <CardFooter>
      <p>Card Footer</p>
    </CardFooter> */}
                </Card>

                <Card className="border border-gray-300 rounded-lg shadow-md">
                  <CardHeader>
                    {/* <CardTitle>Data</CardTitle> */}
                    <CardDescription>Success/failure rates</CardDescription>
                  </CardHeader>
                  {/* <CardContent>
      <p>Card Content</p>
    </CardContent> */}
                  {/* <CardFooter>
      <p>Card Footer</p>
    </CardFooter> */}
                </Card>

                <Card className="border border-gray-300 rounded-lg shadow-md">
                  <CardHeader>
                    {/* <CardTitle>Data</CardTitle> */}
                    <CardDescription>Processing time trends</CardDescription>
                  </CardHeader>
                  {/* <CardContent>
      <p>Card Content</p>
    </CardContent> */}
                  {/* <CardFooter>
      <p>Card Footer</p>
    </CardFooter> */}
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Home;