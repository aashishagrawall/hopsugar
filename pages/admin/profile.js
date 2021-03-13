import React from "react";

// components

import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";
import dbConnect from '../../utils/dbConnect'
import User from '../../models/User'

// layout for page
import {
  useSession, signIn, signOut,getSession
} from 'next-auth/client'


import Admin from "layouts/Admin.js";

export default function Settings({user}) {

  const [ session, loading ] = useSession()
  if(loading) return null;


  if(!session){
 //   router.push('/auth/login')
    
  }
  console.log("user",user);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardSettings />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context)
  if(session){
    await dbConnect()
 
    try {
      const user = await User.findOne({email:session.user.email}).lean() /* find all the data in our database */
      const res={...user,_id:user._id.toString()}
      delete res.createdAt;
      delete res.updatedAt;

      console.log("user",res)

       return { props: {user:res } }
  
    } catch (error) {
      
    }
  }
  console.log("session",session);
  //return { props: { user } }

}

Settings.layout = Admin;
