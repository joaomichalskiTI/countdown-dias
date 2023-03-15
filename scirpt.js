const daysEl = document.getElementById('days');
const input1 = document.getElementById("dtinicial").value;
const input2 = document.getElementById("dtfinal").value; 

function calcular(){
    const input1 = document.getElementById("dtinicial").value;
    const input2 = document.getElementById("dtfinal").value;

    if(!input1 || !input2){
        alert('Por favor, insira a data inicial e a data final.');
        return;
    }

    const date1 = new Date(input1);
    const date2 = new Date(input2);

    const totalSeconds = (date2 - date1) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    daysEl.innerHTML = days;
    console.log('countdown')

    if(date2 < date1){
        alert('Nao tente bugar meu código')
        limpar()
        }
}


function limpar(){
    daysEl.innerHTML = "00"
    document.getElementById("dtinicial").value = ""
    document.getElementById("dtfinal").value = ""
    
}