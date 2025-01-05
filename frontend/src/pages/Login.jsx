import { useState } from "react"

const Login = () => {
    const [formData, setFormData] = useState({
        email:"",
        password:"",
    })

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormData({
            ...formData,
            [name]:value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Email</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleInput} placeholder="Enter Email" required />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" value={formData.password} onChange={handleInput} placeholder="Enter Password" required />
            </div>
            <div>
                <button type="submit">Log In</button>
            </div>
        </form>
        </>
    )
}

export default Login
