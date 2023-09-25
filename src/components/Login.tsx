import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { onLogin } from "../service/users/request"
import { LoginRequest } from "../service/users/type"
import { HttpStatusCode } from "axios"

export default function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleForgotPassword = () => {
        navigate('/password')
    }

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let loginCredentials: LoginRequest = {
            email: email,
            password: password
        }

        try {
            let status = await onLogin(loginCredentials);
            if (status === HttpStatusCode.Ok) {
              navigate('/dashboard/listusers');
            }
        } catch (error) {
            alert('Usuário / senha incorretos');
        }
    }
    
    return (
       <div className="bg-blue-900 flex items-center justify-center h-screen w-screen">
            <div className="bg-white p-8 rounded-lg drop-shadow-2x1 w-96 flex flex-col items-center">
                <h2 className="font-bold mb-4"> Login </h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block mb-2 font-semibold" htmlFor="Email">
                            Email
                        </label>
                        <input type="text" id="Email" value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="w-full border rounded p-2" />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 font-semibold" htmlFor="password">
                            Senha
                        </label>
                        <input type="password" id="password" value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="w-full border rounded p-2" />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-blue-900 text-white font-semibold p-2 rounded">
                            Login
                    </button>
                    <div className="m-2 justify-center flex">
                        <span className="text-blue-900 cursor-pointer" onClick={handleForgotPassword}>Esqueceu a senha?</span>
                    </div>
                </form>
            </div>
       </div>
    )
}