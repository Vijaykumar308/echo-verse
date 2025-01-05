import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({children}) {
    const {user} = useSelector(store => store.user);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if(!user) {
            navigate("/login");
        }
        else {
            setIsLoading(false); 
        }
    }, [])

    if (isLoading) {
        return null;
    }

  return (
    <>
        {children}
    </>
  )
}

export default ProtectedRoute