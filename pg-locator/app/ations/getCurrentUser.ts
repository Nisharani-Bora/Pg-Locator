import { getServerSession } from "next-auth/next";

import { authOptions } from "@/pages/api/auth/[...nextauth]";
import  Prisma  from "@/app/libs/prismadb";

export async function getSession() {
    return await getServerSession(authOptions);
}

export default async function getCurrentUser(){
    try{
      const session = await getSession()

      if(!session?.user?.email){
        return null;
      }

      const currentUser = await prisma?.user.findUnique({
        where: {
            email: session.user.email as string
        }
      });

      if(!currentUser){
        return null;
      }
      return {
        ...currentUser,
        created: currentUser.createdAt.toISOString(),
        updateAt: currentUser.updatedAt.toISOString(),
        emailVerified: currentUser.emailVerified?.toISOString() || null
      };
    }catch (error: any){
    return null;
    }
}