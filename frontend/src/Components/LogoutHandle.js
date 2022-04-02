import axios from "axios";
import { Redirect } from "react-router";


const LogoutHandler = () => {
    const logout = async () => {
        await axios.post("http://localhost:5010/api/auth/logout");
    }
    logout();
    return <Redirect to = "/"/>
}

export default LogoutHandler;