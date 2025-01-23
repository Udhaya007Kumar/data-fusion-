import  { useRef, useState } from "react";
import { Page } from "../Components/layouts/Sidebar/Page.jsx";
import { Label } from "../Components/ui/label";
import { Button } from "../Components/ui/button";
import { Input } from "../Components/ui/input";
import { Badge } from "../Components/ui/badge";

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
  CardHeader,
  CardTitle,
} from "../Components/ui/card";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../Components/ui/form";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm, Controller } from "react-hook-form";
import { Schema, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import os from "os";





const DataSourcemagement = () => {

  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [tags, setTags] = useState([]);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  const formSchema = z.object({
    dataSourceName: z.string().nonempty({
      message: "Datasource name is required.",
    }),
    hostName : z.string().nonempty({
      message: "Port name is required.",
    }),
    
    port : z.string().nonempty({
      message: "Port name is required.",
    }),
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    password: z.string().nonempty({
      message: "Datasource name is required.",
    }),
    DatabaseName: z.string().nonempty({
      message: "Datasource name is required.",
    }),
    // Schema: z.string().nonempty({
    //   message: "Datasource name is required.",
    // }),
    // ssh: z.string().nonempty({
    //   message: "Datasource name is required.",
    // }),

    
  });

  const form = useForm({
    resolver: zodResolver(formSchema), // Apply schema validation
    defaultValues: {
      dataSourceName: "",
      hostName:"",
      port:"",
      username:"",
      password:"",
      DatabaseName:"",
      Schema:"",
      ssh:"",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    console.log('hi');
    
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag();
    } else if (e.key === "Backspace" && input === "" && tags.length > 0) {
      e.preventDefault();
      removeTag(tags.length - 1);
    }
  };

  const addTag = () => {
    const trimmedInput = input.trim();
    if (trimmedInput !== "" && !tags.includes(trimmedInput)) {
      setTags([...tags, trimmedInput]);
      setInput("");
    }
  };

  const removeTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="flex flex-shrink">
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
              <Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)} className="">
    
  <div className="border border-gray-400 p-5 flex gap-6 justify-evenly">
  <Label
    htmlFor="dataSourceName"
    className="text-sm font-medium min-w-[120px] mt-2"
  >
    DataSource Name
  </Label>
  <FormField
    control={form.control}
    name="dataSourceName"
    render={({ field }) => (
      <FormControl>
        <div className="w-full sm:flex-1">
          <Input
            id="dataSourceName"
            placeholder="Enter datasource name"
            className="w-full"
            {...field}
          />
          {/* <div className="mt-2"><FormMessage /></div> */}
        </div>
      </FormControl>
    )}
  />
</div>

    <div className="border border-gray-400 p-5 flex gap-6 justify-evenly">
      <Label
        htmlFor="hostName"
        className="text-sm font-medium min-w-[120px] mt-2"
      >
        Hostname & Port
      </Label>
      <FormField
        control={form.control}
        name="hostName"
        render={({ field }) => (
          <FormControl>
            <Input
              id="hostName"
              placeholder="Hostname"
              className="w-full sm:flex-1"
              {...field}
            />
          </FormControl>
          
        )}
      />
      <FormField
        control={form.control}
        name="port"
        render={({ field }) => (
          <FormControl>
            <Input
              id="port"
              type="number"
              placeholder="Port"
              className="w-full sm:flex-1"
              {...field}
            />
          </FormControl>
        )}
      />
    </div>

    <div className="border border-gray-400 p-5 flex gap-6 justify-evenly">
      <Label
        htmlFor="username"
        className="text-sm font-medium min-w-[120px] mt-2"
      >
        Username & Password
      </Label>

      {/* Username Field */}
      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormControl>
            <Input
              id="username"
              type="text"
              placeholder="Username"
              className="w-full sm:flex-1"
              {...field}
            />
          </FormControl>
        )}
      />

      {/* Password Field */}
      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <div className="relative w-full sm:flex-1">
            <Input
              id="password"
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Enter your password"
              className="border p-2 rounded w-full"
              {...field}
            />
            <div
              // onClick={togglePasswordVisibility}
              className="absolute right-3 top-3 cursor-pointer"
            >
              {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
        )}
      />
    </div>

    <div className="border border-gray-400 p-5 flex gap-6 justify-evenly">
                    <Label
                      htmlFor="DatabaseName"
                      className="text-sm font-medium min-w-[120px] mt-2"
                    >
                      Database name
                    </Label>
                    
                    <FormField
    control={form.control}
    name="DatabaseName"
    render={({ field }) => (
      <FormControl>
        <div className="w-full sm:flex-1">
          <Input
            id="DatabaseName"
            placeholder="Enter DatabaseName name"
            className="w-full"
            {...field}
          />
          {/* <div className="mt-2"><FormMessage /></div> */}
        </div>
      </FormControl>
    )}
  />
                  </div>

                  <div className="border border-gray-400 p-5 flex gap-6 justify-evenly">
      <Label
        htmlFor="schemas"
        className="text-sm font-medium min-w-[120px] mt-2"
      >
        Schemas
      </Label>
      <div className="w-full max-w-2xl mx-auto">
        <div className="flex flex-wrap gap-2 p-2 border rounded-lg bg-white min-h-[50px]">
          {/* Dynamic Tags */}
          {tags.map((tag, index) => (
            <Badge
              key={index}
              className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full"
            >
              <span>{tag}</span>
              <button
                type="button"
                onClick={() => removeTag(index)}
                className="w-4 h-4 flex items-center justify-center rounded-full hover:bg-blue-200"
              >
                ×
              </button>
            </Badge>
          ))}

          {/* Input for Tags */}
          <Input
            ref={inputRef}
            type="text"
            value={input}
            name="Schema"
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 min-w-[10px] outline-none border-none"
            placeholder={tags.length === 0 ? "Enter tags..." : ""}
          />
        </div>
      </div>
    </div>

    <div className="border border-gray-400 p-5 flex gap-6 justify-evenly">
      <Label
        htmlFor="ssh"
        className="text-sm font-medium min-w-[120px] mt-2"
      >
        SSH
      </Label>
      <div className="w-full h-12">
        <FormField
          control={form.control}
          name="ssh"
          render={({ field }) => (
            <FormControl>
            <Select onValueChange={field.onChange} value={field.value}>              
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Do not use SSH credentials" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="SSHauthentication">
                    Working with SSH authentication settings?
                  </SelectItem>
                  <SelectItem value="interface">
                    Trying to disable certain click options or buttons in an
                    interface?
                  </SelectItem>
                  <SelectItem value="securityissue">
                    Dealing with a specific SSH-related security issue?
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            </FormControl>
          )}
        />
      </div>
    </div>

    <div className="mt-6 border border-gray-400 p-5">
  <h1 className="font-geist font-medium">
    If you would like to whitelist our IP addresses, they are:
  </h1>
  <div className="mt-2">
    <div className="w-full flex items-center gap-4 border border-gray-400 p-3">
      <span>44.219.39.124</span>
      <div className="w-px h-6 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
      <span>34.230.173.35</span>
      <div className="w-px h-6 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
      <span>100.26.25.127</span>
    </div>
  </div>
</div>





<div className="flex items-end justify-end mt-5">
  <Button type="submit">
    Connect
  </Button>
</div>
  </form>
</Form>

              </CardContent>
            </Card>

            
          </div>
        </div>
      </div>
    </div>

    
    
  );
};

export default DataSourcemagement;

















// <div className="w-full min-h-screen mt-4">
// <div className="items-center flex flex-col justify-center mt-12">
//   <Card>
//     <CardHeader>
//       <CardTitle className="bg-red-400">
//         Datasource Credentials
//       </CardTitle>
//     </CardHeader>
//     <CardContent>
//       <div className="border border-gray-400 p-5 flex gap-6 justify-evenly">
//         <Label
//           htmlFor="dataSourceName"
//           className="text-sm font-medium min-w-[120px] mt-2"
//         >
//           DataSource name
//         </Label>
//         <Input
//           id="dataSourceName"
//           type="text"
//           placeholder="name"
//           className="w-full sm:flex-1"
          
//         />
//       </div>
//       <div className="border border-gray-400 p-5 flex gap-6 justify-evenly">
//         <Label
//           htmlFor="dataSourceName"
//           className="text-sm font-medium min-w-[120px] mt-2"
//         >
//           Hostname & Port
//         </Label>
//         <Input
//           id="Hostname"
//           type="text"
//           placeholder="Hostname"
//           className="w-full sm:flex-1"
//         />
//         <Input
//           id="Port"
//           type="number"
//           placeholder="port"
//           className="w-full sm:flex-1"
//         />
//       </div>


//       <div className="border border-gray-400 p-5 flex gap-6 justify-evenly">
//         <Label
//           htmlFor="dataSourceName"
//           className="text-sm font-medium min-w-[120px] mt-2"
//         >
//           Username & Password
//         </Label>
//         <Input
//           id="Username"
//           type="text"
//           placeholder="Username"
//           className="w-full sm:flex-1"
//         />
//         <div className="relative">
//           <Input
//             type={isPasswordVisible ? "text" : "password"}
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="border p-2 rounded w-full"
//           />
//           <div
//             onClick={togglePasswordVisibility}
//             className="absolute right-3 top-5  transform -translate-y-1/2 m "
//           >
//             {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
//           </div>
//         </div>
//       </div>


//       <div className="border border-gray-400 p-5 flex gap-6 justify-evenly">
//         <Label
//           htmlFor="dataSourceName"
//           className="text-sm font-medium min-w-[120px] mt-2"
//         >
//           Database name
//         </Label>
//         <Input
//           id="DatabaseName"
//           type="text"
//           placeholder="DatabaseName"
//           className="w-full sm:flex-1"
//         />
//       </div>


//       <div className="border border-gray-400 p-5 flex gap-6 justify-evenly">
//         <Label
//           htmlFor="dataSourceName"
//           className="text-sm font-medium min-w-[120px] mt-2"
//         >
//           Schemas
//         </Label>
//         <div className="w-full max-w-2xl mx-auto">
//           <div className="flex flex-wrap gap-2 p-2 border rounded-lg bg-white min-h-[50px]">
//             {/* //static tag */}
//             {/* <Badge className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
//         <span>dbt</span>
//         <button
//         onClick={() => removeTag(index)}
//          >
//             ×
//         </button>
//     </Badge> */}

//             {tags.map((tag, index) => (
//               <Badge
//                 key={index}
//                 className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full"
//               >
//                 <span>{tag}</span>
//                 <button
//                   onClick={() => removeTag(index)}
//                   className="w-4 h-4 flex items-center justify-center rounded-full hover:bg-blue-200"
//                 >
//                   ×
//                 </button>
//               </Badge>
//             ))}
//             <Input
//               ref={inputRef}
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={handleKeyDown}
//               className="flex-1 min-w-[10px] outline-none border-none "
//               placeholder={tags.length === 0 ? "Enter tags..." : ""}
//             />
//           </div>
//           {/* <p className="mt-2 text-sm text-gray-500">
// Press Enter or comma to add tags
// </p> */}
//         </div>
//       </div>

//       <div className="border border-gray-400 p-5 flex gap-6 justify-evenly">
//         <Label
//           htmlFor="dataSourceName"
//           className="text-sm font-medium min-w-[120px] mt-2"
//         >
//           SSH
//         </Label>
//         <div className="w-full h-12 ">
//           <Select>
//             <SelectTrigger className="w-full">
//               <SelectValue placeholder="Do not use SSH credentials" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectGroup>
//                 <SelectItem value="SSHauthentication">
//                   Working with SSH authentication settings?
//                 </SelectItem>
//                 <SelectItem value="interface">
//                   Trying to disable certain click options or buttons
//                   in an interface?
//                 </SelectItem>
//                 <SelectItem value="securityissue">
//                   Dealing with a specific SSH-related security
//                   issue?
//                 </SelectItem>
//               </SelectGroup>
//             </SelectContent>
//           </Select>
//         </div>

       
//       </div>
//       <div className="mt-6 border border-gray-400 p-5">
//         <h1 className="font-geist font-medium">
//           If you would like to whitelist our IP addresses, they are:
//         </h1>
//         <div className="mt-2">
//           <div className=" w-full flex items-center gap-4 border border-gray-400 p-3">
//             <span>44.219.39.124</span>
//             <div className="w-px h-6 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
//             <span>34.230.173.35</span>
//             <div className="w-px h-6 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
//             <span>100.26.25.127</span>
//           </div>
//         </div>
//       </div>
//     </CardContent>
//     <CardFooter className="items-end justify-end">
//       <Button>Connect</Button>
//     </CardFooter>
//   </Card>
// </div>
// </div>

