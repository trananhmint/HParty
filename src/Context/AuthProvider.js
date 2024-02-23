import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const cookies = new Cookies();
    const [user, setUser] = useState(null);
    const [token, setToken] = useState("");
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
                        const decoded = jwtDecode(res.data)
                        setUser(JSON.parse(res.config.data));
                        setToken(res.data);
                        cookies.set("token", res.data, { expires: new Date(decoded.exp * 1000)});
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
        setToken('');
        cookies.remove("token");
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