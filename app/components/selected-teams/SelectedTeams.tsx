// "use client";
// import { Input } from "@/components/ui/input";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { TeamType } from "@/models/team";
// import { useEffect, useState } from "react";

// interface SelectedTeamsProps {
//   teams: TeamType[];
// }

// export default function SelectedTeams({ teams }: SelectedTeamsProps) {
//   const [filtered, setfiltered] = useState<TeamType[]>(teams);
//   const [query, setquery] = useState<string>("");

//   useEffect(() => {
//     if (query === "") {
//       setfiltered(teams);
//     } else {
//       setfiltered(
//         teams.filter((team) =>
//           String(team.teamName).toLowerCase().includes(query.toLowerCase())
//         )
//       );
//     }
//   }, [query]);

//   return (
//     <>
//       <h2 className="text-3xl font-bold primary-color mt-8 mb-8 text-center">
//         Selected Teams
//       </h2>
//       <div className="flex items-center justify-end">
//         <div className="flex items-center">
//           {/* <SearchIcon size={24} className="text-primary"/> */}
//           <Input
//             placeholder="Search"
//             className="font-medium border-primary transition-all ease-in-out duration-150 w-[150px] focus:w-[170px]"
//             value={query}
//             onChange={(e) => setquery(e.target.value)}
//           />
//         </div>
//       </div>
//       <Table className="mt-3">
//         <TableHeader>
//           <TableRow className="[&>*]:font-semibold [&>*]:text-white bg-gradient-to-l from-gdStart to-gdEnd">
//             <TableHead className="w-[100px] rounded-tl-md">Team ID</TableHead>
//             <TableHead>Team</TableHead>
//             <TableHead className="text-right rounded-tr-md">Category</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {filtered.map((team) => (
//             <TableRow key={new Date(team.createdAt).getTime()}>
//               <TableCell className="font-medium">{"team._id"}</TableCell>
//               <TableCell>{team.teamName}</TableCell>
//               <TableCell className="text-right">Junior</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </>
//   );
// }
