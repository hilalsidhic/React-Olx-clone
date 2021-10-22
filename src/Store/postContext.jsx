import { createContext,useState } from "react";

export const postContext = createContext()

function Post({children}){
    const [postDetails, setpostDetails] = useState()
    return(
     <postContext.Provider value={{postDetails,setpostDetails}}>
     {children}
     </postContext.Provider>
    )
    
}
export default Post