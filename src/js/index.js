function submit(){
    const inputarea = document.getElementById('inputarea').value;

    const confirmation = confirm('Deseja adicionar a tarefa ?');

    if(confirmation){
    const list = document.getElementById('toDo');

    const criarTarefa = document.createElement('li');
    criarTarefa.innerText = inputarea

    list.appendChild(criarTarefa);
   
    };

};

const switchTheme = document.getElementById('swtheme');

switchTheme.addEventListener('click', function(ev){
    ev.preventDefault();

        if(document.body.style.color === 'black' && document.body.style.backgroundColor == 'rgb(250, 250, 250)'){
            document.body.style.color = 'white';
            document.body.style.backgroundColor = 'rgb(25, 22, 63)';
        }else{
            document.body.style.color = 'black';
            document.body.style.backgroundColor = 'rgb(250, 250, 250)';
        };
    

});


function remove(){
    const lista =  document.getElementById('toDo');
    const tarefa = document.getElementsByTagName('li');

    lista.removeChild(tarefa[tarefa.length -1]);
};
      
