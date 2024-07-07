let todosOsDados;
let arrayNum2;
let parada = document.getElementById('respsota');
let criarImagem = document.getElementById('img');
let novoNomeCompleto = document.getElementById('novoNome');
let novoEmail = document.getElementById('novoEmail');
let test;

// function imprime(){
//             fetch('https://reqres.in/api/users?page=1')
//         .then(Response => Response.json())
//         .then(data => { adicionar(data.data)})
//         .catch(error => {
//             console.error('Erro:', error)
//         });
//         }

async function imprime(){
    try{
        const response = await fetch('https://reqres.in/api/users?page=1');
        const responseNum2 = await fetch('https://reqres.in/api/users?page=2');
        const elementNum = await response.json();
        const elementNum2 = await responseNum2.json();
        const data = elementNum.data;
        const dataNum = elementNum2.data;
        console.log(data);

        console.log(dataNum);

        parada.innerHTML = "";
        todosOsDados = [...data, ...dataNum];

        
        todosOsDados.forEach(element => {
            console.log(`${element.first_name}`);
            console.log(`${element.avatar}`)
            let test = document.createElement('li');
            test.textContent = (`${element.first_name}`);
            test.id = element.id;
            console.log(test.id);
            let verificacaoId = document.querySelector('#respsota').appendChild(test);
            console.log(verificacaoId)
            test.addEventListener('click', () => printThis());
            let btn = document.getElementById('verificacao');
            btn.addEventListener('click', () => btnVerif());
            // let btn = document.getElementById('verificacao');
            // let li = document.getElementById(test.id);
            // btn.addEventListener('click', function(){
            //     if(li.classList.contains('filter') == true){
            //         li.removeAttribute('class');
            //     }else{
            //         Image.setAttribute('class','filter');
            //     }
            // })
        });

        function printThis(){
            console.log(event.target)
            todosOsDados.forEach(element => {
                if(element.id == event.target.id){
                    let criarImagem = document.getElementById('img')
                    criarImagem.src = element.avatar;
                    
                    //imprime nome completo.
                    let novoNomeCompleto = (`${element.first_name} ${element.last_name}`);
                    console.log('Nome Completo', novoNomeCompleto);
                    document.querySelector('#novoNome').innerHTML = novoNomeCompleto;
        
                    //imprime email.
                    let novoEmail = (`${element.email}`);
                    console.log('Email:', novoEmail);
                    document.querySelector('#novoEmail').innerHTML = novoEmail;
                }
            }); 
        }
    }catch (error){
        console.error('Erro:', error);
    }
}

function limpar(){
    criarImagem.src = "assets/img/perfil.jpeg";
    novoNomeCompleto.innerHTML = "";
    novoEmail.innerHTML = "";
    parada.innerHTML = "";
}
