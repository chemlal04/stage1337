import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/authOptions";
import { redirect } from 'next/navigation'
import { Toaster } from "@/components/ui/toaster"


export default async function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    
    const session = await getServerSession(authOptions);
    if(!session)
        redirect('/login')
    
    return (
      <>
      <Toaster />
      {children}
      </>
    );
  }
  