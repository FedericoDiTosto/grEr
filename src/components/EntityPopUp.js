import React,{useState} from 'react'
import '../styles/EntityPopUp.css'

export default function EntityPopUp(props) {
    const [entityName, setEntityName] = useState("")

    const closePopup = () => {
        props.setTriggered(false);
    }

    const addEntity = () => {
        props.setElements(e => e.concat({
          id: "e"+(e.length+1).toString(),
          data: {label : `${entityName}`,
                setElements: props.setElements,
                elements: props.elements,
                setEdges:props.setEdges,},
          position: {x: Math.random() * window.innerWidth/3, y: Math.random() * window.innerHeight/3},
          type: 'entityNode',
        }))
        setEntityName("")
      }

  return (props.trigger) ? (
    <div className='entityPopup'>
        <button className='close-btn' onClick={closePopup}>X</button>
        <h3>add an entity</h3>
        <div className='input-block'>
        <label for="nome">Nome</label>
        <input className='entity-values' id="nome" onChange={e => setEntityName(e.target.value)}></input>
        </div>
        <button className='create-entity-btn' onClick={addEntity}>Aggiungi</button>
        {props.children}
        </div>
  ) : "";
}
