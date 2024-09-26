export async function cadastrarUsuario(dadosDoUsuario){
    const response = await fetch("https://27bc352d-8ef8-4b52-976f-c6126bf6661d-00-28ordud37745w.riker.replit.dev/register", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(dadosDoUsuario)
    });
    if(!response.ok){
        console.log("erro");
    }
    return response.json();
}