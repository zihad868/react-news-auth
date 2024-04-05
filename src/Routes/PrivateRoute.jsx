import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRoute = ({ children }) => {
    const { user , loding } = useContext(AuthContext)
    const location = useLocation();

    if(user){
        return children
    }

    if(!user && loding){
        return <span className="loading loading-infinity loading-lg"></span>
    }

    return <Navigate state={location.pathname} to='/login'/>
};


PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired
}

export default PrivateRoute;