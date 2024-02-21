import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("site") || "");
    const navigate = useNavigate();

    const fetchRegister = async (data) => {
        try {

            const response = await axios
                .post("https://bookingbirthdayparties.azurewebsites.net/api/Authentication/register", data)
                .then(res => {
                    console.log("Post created:", res.data);
                    navigate("/signup");
                    console.log("Success");
                    alert("Register successfully");
                })

        } catch (error) {
            console.error(error);
            console.log("This is an invalid register")
            alert("Your email or password is existed. Please try again!!!");
            console.log("Your register is invalid or existed. Please register again!!!")
        }
    }



    const fetchLogin = async (data) => {
        try {
            const response = await axios
                .post("https://bookingbirthdayparties.azurewebsites.net/api/Authentication/login", data)
                .then(res => {
                    console.log(res);
                    if (!!res.data && res.status === 200) {
                        console.log(JSON.parse(res.config.data))
                        setUser(JSON.parse(res.config.data));
                        setToken(res.data);
                        localStorage.setItem("site", res.data);
                        navigate("/");
                        console.log("Success");
                        return;
                    }
                })
        } catch (error) {
            console.error(error);
            console.log("This is an invalid login")
            alert("Your email or password is incorrect. Please try again!!!")
        }
    };

    const logOut = () => {
        setUser(null);
        setToken("");
        localStorage.removeItem("site");
        navigate("/signup");
    };

    return (
        <AuthContext.Provider value={{ token, user, fetchLogin, fetchRegister, logOut }}>
            {children}
        </AuthContext.Provider>
    );

};

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
};