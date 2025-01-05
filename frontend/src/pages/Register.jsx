import { useState } from "react"

const Register = () => {
    const [formData, setFormData] = useState({
        username:"",
        email:"",
        password:"",
        confirm:"",
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
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" value={formData.username} onChange={handleInput} placeholder="Enter Username" required />
            </div>
            <div>
                <label htmlFor="username">Email</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleInput} placeholder="Enter Email" required />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" value={formData.password} onChange={handleInput} placeholder="Enter Password" required />
            </div>
            <div>
                <label htmlFor="confirm">confirm</label>
                <input type="password" name="confirm" id="confirm" value={formData.confirm} onChange={handleInput} placeholder="Enter Confirm" required />
            </div>
            <div>
                <button type="submit">Register</button>
            </div>
        </form>
        </>
    )
}

export default Register