import React, {Dispatch, SetStateAction, useRef, useState} from 'react';
import './Login.css';

interface Props {
    login: boolean;
    setLogin: Dispatch<SetStateAction<boolean>>;
}

interface UserData {
    username: string;
    password: string;
}

const Login = (props: Props) => {
    const [userData, setUserData] = useState<UserData>({
        username: '',
        password: ''
    });
    const wrapperRef = useRef<HTMLDivElement>(null);

    function handleClickOutside(e: { target: any; }) {
        if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
            props.setLogin(false);
        }
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setUserData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    async function logIn() {
        try {
            const request = await fetch('http://localhost:4000/user/login', {
                method: 'POST',
                body: JSON.stringify(userData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await request.json();

            localStorage.setItem('token', data.token);
            localStorage.setItem('user', data.user.username);
            props.setLogin(false);
        } catch (e) {
            if (e) console.log(e);
        }
    }

    return (
        <div id="login-container"
             style={props.login ? {display: 'block'} : {display: 'none'}}
             onClick={handleClickOutside}>
            <div id="login" ref={wrapperRef}>
                <h1>Log in</h1>
                <form>
                    <label htmlFor="username">username</label>
                    <input type="text" id="username" name="username" onChange={handleChange}/>
                    <label htmlFor="password">password</label>
                    <input type="text" id="password" name="password" onChange={handleChange}/>
                    <input type="button" value="log in" onClick={logIn}/>
                </form>
            </div>
        </div>
    );
};

export default Login;