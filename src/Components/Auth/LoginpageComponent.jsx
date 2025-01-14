import React, { useState } from 'react';
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";

const LoginpageComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        // handle form submission
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Remember Me:', rememberMe);
    }
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">

          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight font-geist">
              Welcome Back
            </h1>
            <p className="text-sm text-muted-foreground font-geist">
              {/* Enter your email below to create your account */}
              Sign in to your Account
            </p>
          </div>
          <form onSubmit={onSubmit}>
            <div className="grid gap-4 mt-5 font-geist">
              {/* Email Input */}
              <div className="grid gap-1">
               
                <Input
                  id="email"
                  placeholder="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              {/* Password Input */}
              <div className="grid gap-1 mt-5">
                {/* <Label htmlFor="password">Password</Label> */}
                <Input
                  id="password"
                  placeholder="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* Remember Me Checkbox */}
              <div className="flex items-center gap-2 mt-3">
                <Checkbox
                 
                />
                <Label htmlFor="rememberMe">Remember me</Label>
              </div>
             
              {/* Submit Button */}
              <Button type="submit">Sign In with Email</Button>
            </div>
          </form>
    <div className="relative flex justify-center text-xs uppercase mt-5">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
        <div className='grid mt-5 font-geist text-start gap-3'>
        <Button className="text-start hover:underline font-geist" variant="outline"  type="button">Google</Button>
        <Button className="text-start hover:underline font-geist" variant="outline"  type="button">Microsoft</Button>
        <Button className="text-start hover:underline font-geist" variant="outline"  type="button">Apple</Button>
        
        </div>       
         </div>
  
      </div>
    );
};

export default LoginpageComponent;


