
async function productListApi(){
    const conexao = await fetch("https://668ebc1abf9912d4c92f8f4c.mockapi.io/apigeek/v1/ecommerce"); //fazer a conexao com a API
    const conexaoConvertida = await conexao.json(); //Converte em um objeto JSON

    return conexaoConvertida

}

async function criarElementoCard(name, price, imagem, id){
    const conexao = await fetch("https://668ebc1abf9912d4c92f8f4c.mockapi.io/apigeek/v1/ecommerce", {
        method: "POST", 
        headers: {
                "Content-type": "application/json"
        },
        body: JSON.stringify ({
            name: name,
            price: price,
            imagem: imagem,
            id: id,

        })
    });
    if (!conexao.ok){
        throw new Error ("Não foi possível cadastrar o produto.");
    }
    const conexaoConvertida = await conexao.json();

        return conexaoConvertida;

}


async function deleteCard(id){
    const conexao = await fetch("https://668ebc1abf9912d4c92f8f4c.mockapi.io/apigeek/v1/ecommerce"+id,{  
        method: "DELETE",
        headers: {
                "Content-type": "application/json"
        }
     }) 
        try {            
        if(conexao.ok){
            this.constroiCard(id);
            const conexaoConvertida = conexao.json();
            handleShowExclusionModal();
            return conexaoConvertida;
            
           
        }} catch{ 
        if(!conexao.ok){
            throw new Error("Não foi possível deletar o produto.")
        }}
    
}




export const conectProducts = { //exporta para outros modulos 
    productListApi, 
    criarElementoCard, 
    deleteCard
    
}


