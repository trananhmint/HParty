import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const cookies = new Cookies();
    const [user, setUser] = useState(null);
    const [token, setToken] = useState("");
    const [role, setRole] = useState();
    const navigate = useNavigate();

    const fetchRegister = async (data) => {
        try {

            const response = await axios
                .post("https://bookingbithdayparty.azurewebsites.net/api/Authentication/register", data, {
                    headers: { 'Content-Type': 'application/json' }
                })
                .then(res => {
                    console.log("Post created:", res.data);
                    console.log("Success");
                    //  navigate("/otp");
                    toast.success('Please check your email!!!', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",

                    });
                })

        } catch (error) {
            console.error(error);
            console.log("This is an invalid register")
            toast.error('Your email or password is existed. Please try again!!!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",

            });
            console.log("Your register is invalid or existed. Please register again!!!")
        }
    }



    const fetchLogin = async (data) => {
        try {
            const response = await axios
                .post("https://bookingbithdayparty.azurewebsites.net/api/Authentication/login", data,
                    {
                        withCredentials: true // Ensure credentials are included
                    })
                .then(res => {
                    console.log(res);
                    if (!!res.data && res.status === 200) {
                        console.log(JSON.parse(res.config.data).email)
                        const decoded = jwtDecode(res.data)
                        setUser(JSON.parse(res.config.data));
                        localStorage.setItem("email", JSON.parse(res.config.data).email)
                        const cartId = localStorage.getItem("email");
                        localStorage.setItem(cartId, JSON.parse(localStorage.getItem(cartId)));
                        setToken(res.data);
                        const roles = "http://schemas.microsoft.com/ws/2008/06/identity/claims/role";
                        setRole(decoded[roles]);
                        console.log(decoded);
                        console.log(decoded[roles]);
                        console.log(decoded.exp)
                        cookies.set("authToken", res.data, { expires: new Date(decoded.exp * 1000) });
                        toast.success('Login successfully', {
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                        if (decoded[roles] === "Customer") {
                            navigate("/");
                        } else if (decoded[roles] === "Admin") {
                            navigate("/admin")
                        } else {
                            navigate("/host")
                        }
                        console.log("Success");
                        return;
                    }
                })
        } catch (error) {
            console.error(error);
            console.log("This is an invalid login")
            toast.error('Your email or password is incorrect. Please try again!!!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",

            });
        }
    };

    const logOut = () => {
        setUser(null);
        setToken('');
        cookies.remove("authToken");
        const cartId = localStorage.getItem("email");
        localStorage.removeItem(cartId);
        localStorage.removeItem("email");
        navigate("/signup");
    };

    return (
        <AuthContext.Provider value={{ token, user, fetchLogin, fetchRegister, logOut, role }}>
            {children}
        </AuthContext.Provider>
    );

};

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
};