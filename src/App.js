import React from 'react';
import Task from './Components/Task'
import './App.css'
import { DragDropContext } from 'react-beautiful-dnd'

let toDo = [{
   'id': '1',
   'title': 'Grocery',
   'list': ['apple', 'banana', 'milk', 'eggs', 'bread']
}]

let onDragEnd = (result) => {
  if (!result.destination) {
  return;
  }
  let sourceIdx = parseInt(result.source.index)
  console.log('sourceindex***',sourceIdx)
  let destIdx = parseInt(result.destination.index)
  console.log('destination index***',destIdx)
  let draggedLink = toDo[0].list[sourceIdx]
  console.log('dragged link***',draggedLink)
  let newList = toDo[0].list.slice();
  newList.splice(sourceIdx, 1);
  newList.splice(destIdx, 0, draggedLink)
  toDo[0].list = newList;
  }

function App() {
  return (
    <DragDropContext onDragEnd = {onDragEnd}>
      <div className="App">
      <Task toDo = {toDo[0]}/>
      </div>
    </DragDropContext>
  );
}
export default App;