import React from "react";
import { Page } from "../Components/layouts/Sidebar/Page.jsx";
import { Separator } from "../Components/ui/separator";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../Components/ui/table";

const DataSet = () => {
  // Example user data
  const users = [
    {
      "ID": 1,
      "user_name": "JohnDoe",
      "email": "johndoe@example.com",
      "Role": "Admin",
      "user_role": "Manager",
      "user_case": "Case123",
      "external_id": "EX001"
    },
    {
      "ID": 2,
      "user_name": "JaneSmith",
      "email": "janesmith@example.com",
      "Role": "User",
      "user_role": "Analyst",
      "user_case": "Case456",
      "external_id": "EX002"
    },
    {
      "ID": 3,
      "user_name": "AliceBrown",
      "email": "alicebrown@example.com",
      "Role": "Admin",
      "user_role": "Supervisor",
      "user_case": "Case789",
      "external_id": "EX003"
    },
    {
      "ID": 4,
      "user_name": "BobJohnson",
      "email": "bobjohnson@example.com",
      "Role": "User",
      "user_role": "Developer",
      "user_case": "Case101",
      "external_id": "EX004"
    },
    {
      "ID": 5,
      "user_name": "CharlieDavis",
      "email": "charliedavis@example.com",
      "Role": "Moderator",
      "user_role": "Engineer",
      "user_case": "Case202",
      "external_id": "EX005"
    },
    {
      "ID": 6,
      "user_name": "EmmaWilson",
      "email": "emmawilson@example.com",
      "Role": "User",
      "user_role": "Analyst",
      "user_case": "Case303",
      "external_id": "EX006"
    },
    {
      "ID": 7,
      "user_name": "DavidClark",
      "email": "davidclark@example.com",
      "Role": "Admin",
      "user_role": "Manager",
      "user_case": "Case404",
      "external_id": "EX007"
    },
    {
      "ID": 8,
      "user_name": "SophiaMartinez",
      "email": "sophiamartinez@example.com",
      "Role": "Moderator",
      "user_role": "Supervisor",
      "user_case": "Case505",
      "external_id": "EX008"
    },
    {
      "ID": 9,
      "user_name": "LiamHarris",
      "email": "liamharris@example.com",
      "Role": "User",
      "user_role": "Engineer",
      "user_case": "Case606",
      "external_id": "EX009"
    },
    {
      "ID": 10,
      "user_name": "OliviaJones",
      "email": "oliviajones@example.com",
      "Role": "User",
      "user_role": "Developer",
      "user_case": "Case707",
      "external_id": "EX010"
    },
    {
      "ID": 11,
      "user_name": "NoahLee",
      "email": "noahlee@example.com",
      "Role": "Admin",
      "user_role": "Manager",
      "user_case": "Case808",
      "external_id": "EX011"
    },
    {
      "ID": 12,
      "user_name": "MiaWalker",
      "email": "miawalker@example.com",
      "Role": "User",
      "user_role": "Supervisor",
      "user_case": "Case909",
      "external_id": "EX012"
    },
    {
      "ID": 13,
      "user_name": "JamesYoung",
      "email": "jamesyoung@example.com",
      "Role": "Moderator",
      "user_role": "Analyst",
      "user_case": "Case010",
      "external_id": "EX013"
    },
    {
      "ID": 14,
      "user_name": "AmeliaHall",
      "email": "ameliahall@example.com",
      "Role": "Admin",
      "user_role": "Engineer",
      "user_case": "Case111",
      "external_id": "EX014"
    },
    {
      "ID": 15,
      "user_name": "EthanAllen",
      "email": "ethanallen@example.com",
      "Role": "User",
      "user_role": "Developer",
      "user_case": "Case212",
      "external_id": "EX015"
    },
    {
      "ID": 16,
      "user_name": "HarperKing",
      "email": "harperking@example.com",
      "Role": "Moderator",
      "user_role": "Manager",
      "user_case": "Case313",
      "external_id": "EX016"
    },
    {
      "ID": 17,
      "user_name": "AvaWright",
      "email": "avawright@example.com",
      "Role": "Admin",
      "user_role": "Supervisor",
      "user_case": "Case414",
      "external_id": "EX017"
    },
    {
      "ID": 18,
      "user_name": "LoganScott",
      "email": "loganscott@example.com",
      "Role": "User",
      "user_role": "Engineer",
      "user_case": "Case515",
      "external_id": "EX018"
    },
    {
      "ID": 19,
      "user_name": "IsabellaGreen",
      "email": "isabellagreen@example.com",
      "Role": "Moderator",
      "user_role": "Analyst",
      "user_case": "Case616",
      "external_id": "EX019"
    },
    {
      "ID": 20,
      "user_name": "LucasBaker",
      "email": "lucasbaker@example.com",
      "Role": "Admin",
      "user_role": "Manager",
      "user_case": "Case717",
      "external_id": "EX020"
    }
  ]
  

  return (
    <div className="flex">
      <Page />
      <div className="mt-7 ml-5 w-full">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-medium">Users</h1>
          <p className="text-gray-600">Core user model represending individuals inthe system.Contains user details and their relationships with oraganization,projects,and terms.</p>
          <Separator className="my-5" />
        </div>

        {/* Table Section */}
        <div className="w-full border border-gray-400 p-4 bg-white rounded-md shadow">
          <Table>
            <TableCaption>A list of all users in the system</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="text-left">ID</TableHead>
                <TableHead className="text-left">user_name</TableHead>
                <TableHead className="text-left">email</TableHead>
                <TableHead className="text-left">Role</TableHead>               
                <TableHead className="text-left">user_case</TableHead>
                <TableHead className="text-left">exernal_id</TableHead>
                
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.ID}>
                  <TableCell>{user.ID}</TableCell>
                  <TableCell>{user.user_name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.Role}</TableCell>  
                  <TableCell>{user.user_case}</TableCell>
                  <TableCell>{user.external_id}</TableCell>                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default DataSet;
