import React from 'react';
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
} from "@/components/ui/select"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"


const DataSourcemagement = () => {
    return (
      <div>
         <div className="flex flex-shrink ">
          <Page />   
          <div className=' w-full min-h-screen mt-'>
           <div className='items-center flex flex-col justify-center mt-12 '>
           <Card>
        <CardHeader>
        <CardTitle className='bg-red-400'>Datasource credentials</CardTitle>
        </CardHeader>
        <CardContent>
          <div  className='border border-salate-400 p-5 flex gap-6 justify-evenly '>
            <Label className='text-sm font-medium min-w-[120px] mt-2' >DataSource name</Label>
            <Input
            type='text'
            placeholder='name'
            className='w-full sm:flex-1'
            ></Input>
          </div>
          <div  className='border border-salate-400 p-5 flex gap-6 justify-evenly '>
            <Label className='text-sm font-medium min-w-[120px] mt-2'>Hostname & Port</Label>
            <Input
            type='text'
            placeholder='Hostname'
            ></Input>
            <Input
            type='number'
            placeholder='port'
            ></Input>
          </div>
          <div  className='border border-salate-400 p-5 flex gap-6 justify-evenly '>
            <Label className='text-sm font-medium min-w-[120px] mt-2'>Username & Password </Label>
            <Input
            type='text'
            placeholder='username'
            ></Input>
            <Input
            type='number'
            placeholder='password'
            ></Input>
          </div>
          <div  className='border border-salate-400 p-5 flex gap-6 justify-evenly '>
            <Label className='text-sm font-medium min-w-[120px] mt-2'>Database name</Label>
            <Input
            type='text'
            placeholder='name'
            ></Input>
          </div>
          <div  className='border border-salate-400 p-5 flex gap-6 justify-evenly '>
            <Label className='text-sm font-medium min-w-[120px] mt-2'>Schemas</Label>
            <Input
            type='text'
            placeholder='name'
            ></Input>
          </div>
          <div  className='border border-salate-400 p-5 flex gap-6 justify-evenly '>
            <Label className='text-sm font-medium min-w-[120px] mt-2'>SSH</Label>
            <Select >
                  <SelectTrigger>
                    <SelectValue  placeholder="Do not use SSH credentials" />
                  </SelectTrigger>   
                <SelectContent>
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent>
              </Select>      
          </div>
          <div className='mt-6 border border-salate-400 p-5'>
            <h1 className='font-geist font-medium'>If you would like to whitelist our IP adresses, they are :</h1>
            <div className='mt-2'>
            <InputOTP maxLength={15}>
      <InputOTPGroup>
      <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    
      
       
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
      <InputOTPSlot index={5} />
      <InputOTPSlot index={6} />
      <InputOTPSlot index={7} />
      <InputOTPSlot index={8} />
      <InputOTPSlot index={9} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPSlot index={10} />
      <InputOTPSlot index={11} />
      <InputOTPSlot index={12} />
      <InputOTPSlot index={13} />
      <InputOTPSlot index={14} />
    </InputOTP>

            </div>
            
          </div>
        </CardContent>
        <CardFooter className='items-end justify-end'>
        <Button>Connect</Button>
        </CardFooter>
      </Card>
      
           </div>
          </div>



          
            
       
          

          
          
        </div>
      </div>
    );
};

export default DataSourcemagement;

