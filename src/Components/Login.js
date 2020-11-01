import React, { useState } from 'react';

function Login() {
    const url = `${window.location.origin}/json/passwords.json`;

    const [user, setUser] = useState(''),
          [password, setPassword] = useState(''),
          [error, setError] = useState(''),
          [found, setFound] = useState(false),
          [reset, setReset] = useState(false);

    let errorHtml = "",
        passwordReset = "";

    function validateForm() {
        return user.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        let passworderror = '',
            response = [];

        event.preventDefault();

        () => setFound = false;

        fetch(url)
            .then((res) => {
                return res.json();

                }).then((data) => {
                    data.forEach(function (item) {
                        if (!found && user === item.user && password === item.password) {
                            () => setFound = true;
                        }
                    });

                    if (!found) {
                        () => setError = 'Please, check your user name and password and try again.';
                        () => setReset = 'Please, check your user name and password and try again.';
                    }

                    () => setError(passworderror);
                })
                .catch(() => {
                    () => setError = 'Something went wrong, please try again later.'
                });
    }

    return (
        <div className="max-area">
            <form className="login" onSubmit={handleSubmit}>
                <div className="login-field">
                    <label className="login-label" htmlFor="user_name">User Name</label>
                    <input className="login-input" type="text" autoFocus value={user} onChange={e => setUser(e.target.value)}/>
                </div>

                <div className="login-field">
                    <label className="login-label" htmlFor="password">Password</label>
                    <input className="login-input" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <span className="login-error">{error}</span>
                </div>

                <button className="login-submit" type="submit" disabled={!validateForm()}>Login</button>
                {reset}
            </form>
        </div>
    );
}

export default Login;
