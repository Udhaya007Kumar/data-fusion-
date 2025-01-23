
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


const users = [
    
        {
          "message_id": 1,
          "chat_id": "2485255_111_111111",
          "role": "null",
          "messages": "Here are your top 10 selling products in the last 3 months."
        },
        {
          "message_id": 2,
          "chat_id": "2485255_222_222222",
          "role": "user",
          "messages": "Can you provide more details about product A?"
        },
        {
          "message_id": 3,
          "chat_id": "2485255_333_333333",
          "role": "assistant",
          "messages": "Product A is your best seller, generating $50,000 in revenue."
        },
        {
          "message_id": 4,
          "chat_id": "2485255_444_444444",
          "role": "user",
          "messages": "What about Product B?"
        },
        {
          "message_id": 5,
          "chat_id": "2485255_555_555555",
          "role": "assistant",
          "messages": "Product B has sold 1,200 units, with $30,000 in revenue."
        },
        {
          "message_id": 6,
          "chat_id": "2485255_666_666666",
          "role": "user",
          "messages": "Can I get a summary of products in descending order of sales?"
        },
        {
          "message_id": 7,
          "chat_id": "2485255_777_777777",
          "role": "assistant",
          "messages": "Sure, here is the summary: 1) Product A - $50,000, 2) Product B - $30,000, 3) Product C - $20,000."
        },
        {
          "message_id": 8,
          "chat_id": "2485255_888_888888",
          "role": "user",
          "messages": "Are there any products with low sales we need to address?"
        },
        {
          "message_id": 9,
          "chat_id": "2485255_999_999999",
          "role": "assistant",
          "messages": "Yes, Product D and Product E have sales below $5,000."
        },
        {
          "message_id": 10,
          "chat_id": "2485255_101_101010",
          "role": "user",
          "messages": "Thank you for the insights!"
        }
      
      
]



const messages = () => {
    return (
        <div className="flex">
      <Page />
      <div className="mt-7 ml-5 w-full">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-medium">Users</h1>
          <p className="text-gray-600">Core message model represending chat interactions.Contains message content,metadata,code execution,and training data relationships.</p>
          <Separator className="my-5" />
        </div>

        {/* Table Section */}
        <div className="w-full border border-gray-400 p-4 bg-white rounded-md shadow ">
          <Table>
            <TableCaption>A list of all users in the system</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="text-left">message_id</TableHead>
                <TableHead className="text-left">chat_id</TableHead>
                <TableHead className="text-left">role</TableHead>
                <TableHead className="text-left">messages</TableHead>                              
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.message_id}>
                  <TableCell>{user.message_id}</TableCell>
                  <TableCell>{user.chat_id}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>{user.messages}</TableCell>               
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
    );
};

export default messages;