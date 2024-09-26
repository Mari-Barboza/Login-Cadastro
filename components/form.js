export default function Form({email, setEmail,password,setPassword,erro,handleSubmit}){
    return(
        <form onSubmit={handleSubmit}>
            <input
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
 
            <input
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            {erro && <p>{erro}</p> }
            <button type="submit">Enviar</button>
           
        </form>
    )
}
 