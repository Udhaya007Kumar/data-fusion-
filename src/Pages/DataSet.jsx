
import { Page } from "../Components/layouts/Sidebar/Page.jsx";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "../Components/ui/table";
import { Link } from 'react-router';
import { Button } from '../Components/ui/button';

const users = [
  {
    "Title": "messages",
    "LastQueried": "2025-01-23T10:00:00Z",
    "CreatedAt": "2025-01-13T15:30:00Z",
    "DataSource": "DataSource A",
    "Status": "Active",
    "Owner": "John Doe",
    "detailPage":"/messages"
  },
  {
    "Title": "chats",
    "LastQueried": "2025-01-22T12:00:00Z",
    "CreatedAt": "2025-01-12T14:20:00Z",
    "DataSource": "DataSource B",
    "Status": "Inactive",
    "Owner": "Jane Smith"
  },
  {
    "Title": "users",
    "LastQueried": "2025-01-21T08:30:00Z",
    "CreatedAt": "2025-01-11T10:00:00Z",
    "DataSource": "DataSource C",
    "Status": "Active",
    "Owner": "Alice Johnson",
    "detailPage":"/datasetuser"
  },
  {
    "Title": "pages",
    "LastQueried": "2025-01-20T09:45:00Z",
    "CreatedAt": "2025-01-10T09:30:00Z",
    "DataSource": "DataSource D",
    "Status": "Pending",
    "Owner": "Bob Brown"
  },
  {
    "Title": "data_sources",
    "LastQueried": "2025-01-19T11:15:00Z",
    "CreatedAt": "2025-01-09T11:10:00Z",
    "DataSource": "DataSource E",
    "Status": "Inactive",
    "Owner": "Charlie Davis"
  },
  {
    "Title": "training_data",
    "LastQueried": "2025-01-19T11:15:00Z",
    "CreatedAt": "2025-01-09T11:10:00Z",
    "DataSource": "DataSource E",
    "Status": "Inactive",
    "Owner": "Charlie Davis"
  },
  {
    "Title": "projects",
    "LastQueried": "2025-01-19T11:15:00Z",
    "CreatedAt": "2025-01-09T11:10:00Z",
    "DataSource": "DataSource E",
    "Status": "Inactive",
    "Owner": "Charlie Davis"
  },
  {
    "Title": "organizations",
    "LastQueried": "2025-01-19T11:15:00Z",
    "CreatedAt": "2025-01-09T11:10:00Z",
    "DataSource": "DataSource E",
    "Status": "Inactive",
    "Owner": "Charlie Davis"
  },
  {
    "Title": "teams",
    "LastQueried": "2025-01-19T11:15:00Z",
    "CreatedAt": "2025-01-09T11:10:00Z",
    "DataSource": "DataSource E",
    "Status": "Inactive",
    "Owner": "Charlie Davis"
  }

  
]



const DataSet = () => {
    return (
      <div>
        <div className="flex flex-shrink">
          <Page />

          <div className="w-full border border-gray-400 p-4 bg-white rounded-md shadow font-geist mt-12">
            <div className="flex justify-between">
              <div className="flex  gap-3 font-bold mt-3">
                <h1>Datasets</h1>
                <ul className=" flex gap-5 font-geist font-normal">
                  <li>
                    <Link>All</Link>
                  </li>
                  <li>
                    <Link>publiched</Link>
                  </li>
                  <li>
                    <Link>Drafts</Link>
                  </li>
                </ul>
              </div>
              <div>
                <Button variant="secondary"> + New Dataset</Button>
              </div>
            </div>

            <div className="mt-5 overflow-x-auto">
              <Table className="min-w-full bg-white border border-gray-300">
                {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                <TableHeader>
                  <TableRow>
                    <TableHead >Title</TableHead>
                    <TableHead className=''>LastQuaried</TableHead>
                    <TableHead>Crated at</TableHead>
                    <TableHead>DataSource</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Owner</TableHead>                   
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {
                    users.map((item)=>(
                      <TableRow key={item.Title}>
                     <TableCell>
                     <Link to={item.detailPage} className=" hover:text-blue-400 no-underline ">
                  {item.Title}
                </Link>
                     </TableCell>                     
                     <TableCell>{item.LastQueried}</TableCell>
                     <TableCell>{item.CreatedAt}</TableCell>
                     <TableCell>{item.DataSource}</TableCell>
                     <TableCell>{item.Status}</TableCell>
                     <TableCell>{item.Owner}</TableCell>
                  </TableRow>
                    ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    );
};

export default DataSet;