import { Navigate } from "react-router-dom";

export const ProtectedRouteforUser= ({children})=>{
    const user= JSON.parse(localStorage.getItem('user'));
    if(user?.Role==undefined){
        return children
    }else {
        return <Navigate to={'/login'} />
    }
}