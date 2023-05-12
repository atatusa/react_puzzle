
export const [dragArray, dropArray] = [[1, 2, 3, 4, 5, 6, 7, 8, 9].sort(() => Math.random() - 0.5), ['', '', '', '', '', '', '', '', '']]



let counter = 0
const arrayChecker = new Array(9)
function GameLost() {

    let opt = window.confirm('PERDISTE, intentalo de nuevo')
    if (opt) {
        window.location.reload()
    }
    else{
alert('Otra vez sera')
    }
}


export function DragStart(e) { e.dataTransfer.setData('text/HTML', e.target.id) }

export function DragOverHandler(e) { e.preventDefault() }

export function DropHandler(e) {
    e.preventDefault()
    //setea las casillas arrastradas con el nuevo valor
    const dragData = document.getElementById(e.dataTransfer.getData('text/HTML'))
    const dropitemlocation = e.target.id
    if (e.target.innerHTML === '') {
        e.target.innerHTML = dragData.innerHTML
        arrayChecker.splice(dropitemlocation, 1, dragData.innerHTML)
        dragData.innerHTML = ''
        dragData.removeAttribute('draggable')
    }
    //contador para determinar si ya se arrastraron todos los numeros
    counter = counter + 1;
    if (counter === 9) {
        if (JSON.stringify(arrayChecker)===JSON.stringify( arrayChecker.sort((a, b) => a - b))) {
            setTimeout(() => {
                alert('FELICIDADES !LO HICISTE BIEN!')
                document.getElementById('player').style.display='initial'
            }, 5); 
        }else{
           
        setTimeout(() => {
            GameLost()
        }, 5);
    }
    }

}





