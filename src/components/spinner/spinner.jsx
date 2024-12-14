import React, { useEffect, useState } from "react";
import { useNavigate , useLocation} from "react-router-dom";

const Spinner = () => {
    const [count, setCount] = useState(5);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevValue) => prevValue - 1);
        }, 1000);

        if (count === 0) navigate("/login",{
            state: location.pathname,
        });

        return () => clearInterval(interval);
    }, [count, navigate, location]);

    return (
        <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100vh" }} // Full height for centering
        >
            <div className="text-center">
                <h1>Redirecting in {count} seconds...</h1>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    );
};

export default Spinner;
