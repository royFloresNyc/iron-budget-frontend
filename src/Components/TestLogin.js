import React from 'react'

const Login = () => {

    const submitHandler = (e) => {
        e.preventDefault()
        console.log('clicked Submit')
        let user = {}
        user['username'] = e.target.username.value
        user['password'] = e.target.password.value
        user['password_confirmation'] = e.target.password_confirmation.value
        user['address'] = e.target.address.value
        user['first_name'] = e.target.first_name.value
        user['last_name'] = e.target.last_name.value

        console.log(user)

        let options = {
            method: "POST",
            headers: {
                "Authorization": `Bearer <token>`,
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify({user: {...user}})
        }

        fetch(`http://localhost:3000/users/`, options)
        .then(resp=>resp.json())
        .then(console.log)
        .catch(console.log)
    }

    const loginHandler = (e) => {
        e.preventDefault()
        let user = {}
        user['username'] = e.target.username.value
        user['password'] = e.target.password.value
        console.log("Logging in")
        fetch(`http://localhost:3000/login`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer <token>`,
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify({user: {...user}})
        })
        .then(resp=>resp.json())
        .then(console.log)
        .catch(console.log)

    }

    return (
        <form onSubmit={submitHandler}>
            <input type="text" name="username" placeholder="username"/>
            <input type="password" name="password" placeholder="password"/>
            <input type="password" name="password_confirmation"placeholder="password_confirmation"/>
            <input type="text" name="address"placeholder="address"/>
            <input type="text" name="first_name"placeholder="first_name"/>
            <input type="text" name="last_name"placeholder="last_name"/>
            <input type="submit" value="submit"/>
        </form>,
        <form onSubmit={loginHandler}>
            <input type="text" name="username" placeholder="username"/>
            <input type="password" name="password" placeholder="password"/>
            <input type="submit" value="submit"/>
        </form>
    )

}

export default Login