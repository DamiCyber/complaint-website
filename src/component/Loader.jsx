import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../assets/style/Loader.css";
// import image from "../assets/images/pro.jpg"
const Loader = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate("/login")
        }, 10000);
    }, []);

    if (loading) {
        return <div>
            <div class="loader">
                <div class="wrapper">
                    <div class="circle"></div>
                </div>
            </div>

        </div>;
    }
    return (
        <div></div>
    )
}

export default Loader