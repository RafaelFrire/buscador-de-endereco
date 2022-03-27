var numberCep = document.querySelector('#numbercep')
var btnsub = document.querySelector('#btn')
const resultado = document.querySelector('p')
const corpo = document.querySelector('.resultados')


function activecep(){
var fetchlink = `https://viacep.com.br/ws/${numberCep.value}/json/`

var buscacep = fetch(fetchlink)
buscacep.then(r => r.json())
.then((body)=>{
    console.log(body)
    const dados = {
        endereco: document.createElement('p'),
        bairro: document.createElement('p'),
        cep: document.createElement('p')
    }

    const textos = {
        endereco: `endereço: ${body.logradouro}`,
        bairro:`bairro: ${body.bairro}`,
        cep:`cep: ${body.cep}`

    }

    dados.endereco.innerHTML = textos.endereco
    dados.bairro.innerHTML = textos.bairro
    dados.cep.innerHTML = textos.cep



    corpo.appendChild(dados.endereco)
    corpo.appendChild(dados.bairro)
    corpo.appendChild(dados.cep)


})

}


restart = ()=>{
    const elementos = document.querySelectorAll('.resultados p')
    console.log(elementos)
    elementos.forEach((item)=>{
        item.remove()

    })

}


btnsub.addEventListener('click', (item)=>{
    item.preventDefault()
    return activecep(),restart()
    
})