'use client'

import { useUser } from "@clerk/nextjs";
import Header from "./_components/Header";
import { useEffect } from "react";
import axios from "axios";

function Provider({ children }) {
    const user = useUser()

    useEffect(()=> {
        user&&CheckIsNewUser()
    }, [user])
    
    const CheckIsNewUser = async () => { 
        const result = await axios.post('/api/users', { user: user })
        console.log(result.data);
        
    }

  return (
      <div>
          <Header />
          <div className="">
          {children}
          </div>
        
    </div>
  )
}

export default Provider