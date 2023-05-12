import React from 'react';
import { DragStart, DragOverHandler, DropHandler, dragArray, dropArray } from './dndFunctions'

const Interfaz = () => {

    const dragRender = dragArray.map((element, index) => {
        return <li id={'dragItem' + (index + 1)} key={index} className='liItem flex' draggable onDragStart={DragStart}>{element}</li>
    })
    const dropRender = dropArray.map((element, index) => {
        return <li id={index} key={index} className='liItem flex' onDragOver={DragOverHandler} onDrop={DropHandler} >{element}</li>
    })

    return (
        <>
             <ul id='dropZone' className='flex'>{dropRender}</ul>
            <ul id='dragZone' className='flex'>{dragRender}</ul>
        </>

    );
}

export default Interfaz;
