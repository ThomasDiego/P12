import {Link} from "react-router-dom";

const Login = () => {
  return (
    <div>
        <h1><Link to={"/dashboard/12"}>Compte de Karl</Link></h1>
        <h1><Link to={"/dashboard/18"}>Compte de Cecilia</Link></h1>
    </div>
  );
};

export default Login;
