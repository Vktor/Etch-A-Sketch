let size = 16;
const container = document.querySelector('.matriz');



function createGrid(){
    
    for(let j=0; j<size; j++){
        let column =document.createElement('div');
        for(let i=0; i<size; i++){
            let box = document.createElement("div");
            column.appendChild(box).classList.add('grid-item');
        }
        container.appendChild(column).classList.add('column-item');
    }
}

createGrid();