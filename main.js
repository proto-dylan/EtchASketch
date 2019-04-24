const container = document.querySelector('.container');
let size=16;

makeGrid();

function makeGrid(){
    const cellSize = (600-2)/size;
    for(let i=0; i<(size*size); i++){
        console.log('row')
        const cell = document.createElement('div')
        cell.style.height = `${cellSize}px`;
        cell.style.width = `${cellSize}px`;
        cell.classList.add('cell')
        container.appendChild(cell);
        cell.addEventListener("mouseover", ()=>{
            cell.setAttribute("class", "darkCell");
        })
    }

}

function reset(){
    let cell = document.querySelector(".container");
    while(cell.firstChild){
        cell.removeChild(cell.firstChild);
    }
    size=prompt("How many cells per side? (1-100)");
    makeGrid();
}