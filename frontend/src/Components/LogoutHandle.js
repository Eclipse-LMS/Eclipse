import axios from "axios";
import { Redirect } from "react-router";


const LogoutHandler = () => {
    const logout = async () => {
        await axios.post("/api/auth/logout");
    }
    logout();
    return <Redirect to = "/"/>
}

export default LogoutHandler;