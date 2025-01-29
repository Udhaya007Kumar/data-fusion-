// import React from 'react';
// import { Card } from '../Components/ui/card';
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Badge } from "../Components/ui/badge";
// import { Button } from "../Components/ui/button"; // Assuming Button is imported from the correct path

// const FacilityDetails = () => {
//   return (
//     <div className="flex justify-center items-center h-screen">
//       <Card className="p-4 w-full max-w-4xl">
//         {/* Header Section */}
//         <div className="mb-6">
//           <h2 className="text-lg font-bold mb-2">
//             Chapter 105 Inventory Details - Role : APPL
//           </h2>
//           <h3 className="text-md font-semibold">Chapter 105 Facility Details</h3>
//         </div>

//         {/* Primary Facility Section */}
//         <div className="mb-6">
//           <h4 className="font-medium mb-2">Primary Facility</h4>
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead className="w-[100px]">Type</TableHead>
//                 <TableHead>Kind</TableHead>
//                 <TableHead>Status</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               <TableRow>
//                 <TableCell className="font-medium">Client</TableCell>
//                 <TableCell></TableCell>
//                 <TableCell></TableCell>
//                 <TableCell className="text-right">$250.00</TableCell>
//               </TableRow>
//             </TableBody>
//           </Table>

//           {/* Impact Grid */}
//           <div className="grid grid-cols-4 gap-4 mt-4 text-sm">
//             <span>Impact</span>
//             <span>Compensation</span>
//             <span>Adv Compensation</span>
//             <span>Structures</span>
//             <span>Utilities</span>
//             <span>Channel/Bank</span>
//             <span>Floodway</span>
//             <span>Other</span>
//           </div>

//           {/* Activity Badges */}
//           <div className="flex gap-4 mt-4">
//             <Badge variant="outline">Bank Stab</Badge>
//             <Badge variant="outline">Channel Mod</Badge>
//             <Badge variant="outline">Dredging/Gravel</Badge>
//           </div>
//         </div>

//         {/* Sub Facility Section */}
//         <div className="mb-6">
//           <h4 className="font-medium mb-2">Sub Facility</h4>
//           <div className="space-y-4">
//             {/* Instream Structures */}
//             <div className="border p-2 rounded">
//               <div className="font-medium mb-2">Instream Structures</div>
//               <div className="grid grid-cols-3 gap-4 text-sm">
//                 <div>
//                   <div>Code</div>
//                   <div>Number Length of Installed Activity</div>
//                 </div>
//                 <div className="col-span-2">
//                   <div>Channel Modifications</div>
//                   <div>Code</div>
//                 </div>
//               </div>
//             </div>

//             {/* Channel Modifications */}
//             <div className="border p-2 rounded">
//               <div className="grid grid-cols-3 gap-4 text-sm">
//                 <div>
//                   <div>Length of Activity</div>
//                   <div>Avg. Width of Activity</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex justify-end gap-2">
//           <Button variant="outline">PF Query</Button>
//           <Button variant="outline">SF Query</Button>
//           <Button variant="outline">Back</Button>
//           <Button>Go To</Button>
//         </div>
//       </Card>
//     </div>
//   );
// };

// export default FacilityDetails;
