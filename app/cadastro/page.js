'use client'
import Form from "@/components/form";
import {userCadastro} from "@/hooks/userCadastro"
 
export default function Cadastro(){
    const{email,setEmail,password,setPassword,erro,handleSubmit} = userCadastro
 
return (
    <div>
        <h2>Cadastrar-se</h2>
        <Form
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        erro={erro}
        handleSubmit={handleSubmit}
        />
    </div>
 
 
)
}