import { Redirect , Route } from "react-router-dom";
import LoginBox from "../Screens/LoginScreen";

const PrivateRoute = ({component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => localStorage.getItem("authToken") ? <Component {...props} /> : <LoginBox />
      }
    />
  );
};

export default PrivateRoute;
