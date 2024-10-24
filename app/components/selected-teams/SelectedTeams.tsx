"use client"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { TeamType } from "@/models/team"
import { useEffect, useState } from "react"
  
  
  
  

  interface SelectedTeamsProps{
    teams:TeamType[]
  }

  export default function SelectedTeams({teams}:SelectedTeamsProps) {
    const [filtered, setfiltered] = useState<TeamType[]>(teams)
    const [query, setquery] = useState<string>('')

    useEffect(() => {
      if(query === ''){
        setfiltered(teams)
      }
      else{
        setfiltered(teams.filter((team)=> String(team.teamName).toLowerCase().includes(query.toLowerCase())))
      }
    }, [query])
    
    return (
        <>
        <h2 className="text-3xl font-bold primary-color mt-8 mb-8 text-center">
            Selected Teams
        </h2>
        <div className="flex items-center justify-end">
            <Input placeholder="Search" value={query} onChange={e=> setquery(e.target.value)}/>
        </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Team ID</TableHead>
            <TableHead>Team</TableHead>
            <TableHead>Institution</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filtered.map((team) => (
            <TableRow key={new Date(team.createdAt).getTime()}>
              <TableCell className="font-medium">{"team._id"}</TableCell>
              <TableCell>{team.teamName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </>
    )
  }
  