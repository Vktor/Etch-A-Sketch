let size = 16;
const container = document.querySelector('.matriz');



function createGrid(){
    
    for(let j=0; j<size; j++){
        let column =document.createElement('div');
        for(let i=0; i<size; i++){
            let box = document.createElement("div");
            column.appendChild(box).classList.add('grid-item');
            //Colored grid item when mouse is over
            box.addEventListener('mouseover',function(){
                this.style.backgroundColor = 'green';
                });
            
            }
        container.appendChild(column).classList.add('column-item');
    }


}


function askforGrid(){
    let grilla = prompt('how many squares per side to make the new grid?')
    size = grilla;
    document.getElementById('content').innerHTML= "";
    createGrid();
}


createGrid();