
const pesonagens=[
   
    {
        id:0,
        nome:'CICLOPE',
        card:"/img/card-ciclope.jpg",
        poder:"Ciclope é um mutante, possuindo o poder de projetar pura energia de seus olhos de cor vermelho-rubi.",
        pesonagen:"/img/card-ciclope.png"
    },
    
    {   
        id:1,
        nome:'JEAN-GREY', 
        card:"/img/card-jean-grey.jpg",
        poder:"Jean Grey é uma mutante nível ômega e o principal avatar da Força Fênix, no qual manifesta poderes cósmicos",
        pesonagen:"/img/card-jean-grey.png"
    },
    
    {
        id:2,
        nome:"Lince Negra",
        card:"/img/card-lince-negra.jpg",
        poder:"Uma mutante, Pryde possui uma habilidade faseada que lhe permite, assim como objetos ou pessoas com quem ela está em contato, tornar-se intangível. ",
        pesonagem:"/img/card-lince-negra.png",
    
    },
    {
        id:3,
        nome:"Magneto",
        card:"/img/card-magneto.jpg",
        poder:"Magneto foi recentemente reclassificado como um mutante de nível ômega, seus poderes são incrivelmente vastos. Ele pode controlar e manipular campos magnéticos que vão muito além da habilidade de controlar metal.",
        pesonagem:"/img/card-magneto.png"
    
    },
    {
        id:4,
        nome:"Noturno",
        card:"/img/card-noturno.jpg",
        poder:"Possui agilidade sobre-humana, e a capacidade de teletransporte, invisibilidade em sombras profundas, e as mãos e os pés aderirem a parede.",
        pesonagem:"/img/card-noturno.png"
    
    },
    {
        id:5,
        nome:"Tempestade",
        card:"/img/card-tempestade.jpg",
        poder:"é capaz de manipular o tempo, e alterar o clima, assim tendo influência sobre os elementos da natureza.",
        pesonagem:"/img/card-tempestade.png"
    
    },
    {
        id:6,
        nome:"Vampira",
        card:"/img/card-vampira.jpg",
        poder:"habilidade de absorver a vitalidade, memórias, habilidades e poderes de outros seres vivos através do contato com a pele.",
        pesonagem:"/img/card-vampira.png"
    
    },
    {
        id:7,
        nome:'Wolverine',
        card:"/img/card-wolverine.jpg",
        poder:" Além de suas mortais garras de adamantium, capazes de cortar qualquer coisa, ele tem um poderoso fato de cura",
        pesonagem:"/img/card-wolverine.png"
    
    },
    ] 
    
    
    
    
    
    
    
    
    
    function pesonagen(pesonagens){
        const divPesonagem= document.querySelector('.pessonagens' )
        const ul = document.createElement('ul');
        const div = document.createElement('div');
    
        pesonagens.forEach((e,i)=>{ 
            ul.innerHTML+=`<li><img src="${e.card}" id="${i}" ></li>`
            
        });   
        div.appendChild(ul);
        divPesonagem.appendChild(div);
    
    }
    
    pesonagen(pesonagens)
    
    pesonagemSelecionado(pesonagens)
    
    function pesonagemSelecionado(pesonagens){
       const pesonagen =document.querySelector('.pesonagem-selecionado')
    
     
       
       pesonagen.innerHTML=`
         
    
         <div class="descricao-pesonagen">
            <div>
            <img src="${pesonagens[1].pesonagen}"> 
            <h1>${pesonagens[1].nome}</h1>
            </div>
            <p>${pesonagens[1].poder}</p>
         </div>
    
       `
    
    }
    
    const img= document.querySelector('.pessonagens div ul li img' )
    
    console.log(img)
    
    img.addEventListener('mouseover',(e)=>{
        e.forEach((e)=>{
            console.log(e)
        })
    
    })