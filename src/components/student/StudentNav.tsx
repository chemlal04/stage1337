"use client"

import Link from "next/link";
import { Button } from "../ui/button";
import { SVGProps } from "react";
import { Toggle } from "../ui/toggle";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { signOut } from "next-auth/react";
import { Dialog, DialogTrigger } from "../ui/dialog";
import StudentEditModal from "./StudentEditModal";
import StudentHistory from "./StudentHistory";



export default function StudentNav() {

  async function destroySession(){
   const res = await fetch('/api/destroySession');
   signOut();
  }

  return (
    <header className="bg-gray-900 text-white py-4 px-6 md:px-8 lg:px-10">
      <div className="flex items-center justify-between">
        <Link
          className="text-2xl font-bold"
          href="#"
          style={{ color: "#FFF" }}
        // style={{ color: "#A7E92F" }}
        >
          .Busify
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
         
          <Dialog key="1" >
            <DialogTrigger asChild>
              <Link className="hover:text-gray-300" href="#">
                Historique
              </Link>
            </DialogTrigger>
            <StudentHistory />
            </Dialog>


            <Dialog key="">
              <DialogTrigger asChild>
                <Link className="hover:text-gray-300" href="#">
                  Settings
                </Link>
                </DialogTrigger>
              <StudentEditModal />
            </Dialog>

              
        </nav>
        <div className="flex items-center space-x-4">
          <Button size="icon" variant="ghost">
            <BellIcon className="h-6 w-6" />
          </Button>
          {/* <Toggle aria-label="Toggle dark mode">
            <MoonIcon className="h-6 w-6" />
          </Toggle> */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="h-8 w-8 cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">

           
              <DropdownMenuItem className="cursor-pointer">
                <UserIcon className="mr-2 h-4 w-4" />
                Edit Profile
              </DropdownMenuItem>
             



              <DropdownMenuItem className="text-red-600 cursor-pointer">
                <LogOutIcon className="mr-2 h-4 w-4 text-red-600" />
                <p className="text-red-600" onClick={destroySession}>Log Out</p>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>

  )
}


function MoonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}



function BellIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}


function LogOutIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  );
}


function UserIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}