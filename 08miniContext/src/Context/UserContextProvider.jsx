
import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider=({childern})=>{
    const[User , setUser]=React.useState(null);
    return(
        <UserContext.Provider value={{User , setUser}}>
        {childern}
        </UserContext.Provider>
    )

}

export default UserContextProvider;