import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { changePassword } from "../service/users/request"
import { LoginRequest } from "../service/users/type"
import { HttpStatusCode } from "axios"

export default function ForgetPassword(){
    const [email, setEmail] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleChangePassword = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('Senha incorreta')
            return
        }

        let loginCredentials: LoginRequest = {
            email: email,
            password: password
        }

        let status = await changePassword(loginCredentials)
        if (status === HttpStatusCode.Ok) {
            navigate('/')
        } else {
            alert('Usuário / senha incorretos')
        }
    }
    
    return (
       <div className="bg-blue-900 flex items-center justify-center h-screen w-screen">
            <div className="bg-white p-8 rounded-lg drop-shadow-2x1 w-96 flex flex-col items-center">
                <h2 className="font-bold mb-4"> Redefinir a senha </h2>
                <form onSubmit={handleChangePassword}>
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
                            Nova senha
                        </label>
                        <input type="password" id="password" value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="w-full border rounded p-2" />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 font-semibold" htmlFor="password">
                            Confirmar senha
                        </label>
                        <input type="password" id="password" value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                            className="w-full border rounded p-2" />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-blue-900 text-white font-semibold p-2 rounded">
                            Alterar senha
                    </button>
                </form>
            </div>
       </div>
    )
}