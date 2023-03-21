
import {isAutheticated} from "./index"
import { Outlet,Navigate } from "react-router-dom";

function PrivateRoute() {
    let {user} = isAutheticated() ;
    console.log(user); 
    // let location = useLocation();
  
    if (!user) {
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      return <Navigate to="/signin"  />;
    }
  
    return <Outlet />;
  }
  
  export default PrivateRoute;
