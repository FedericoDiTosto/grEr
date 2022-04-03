import React,{useState} from 'react'
import '../styles/AttributePopUp.css'

export default function AttrbutePopUp(props) {
    const [attributeName, setAttributeName] = useState("")

    const closePopup = () => {
        props.setTriggeredAttribute(false);
    }

    const addAttribute = () => {
        props.setElements(e => e.concat({
          id: (e.length+1).toString(),
          data: {label : `${attributeName}`,},
          position: {x: Math.random() * window.innerWidth/3, y: Math.random() * window.innerHeight/3},
          type: 'attributeNode',
        }))


        props.setEdges(e => e.concat({
          id: "qqq",
          type: 'straight',
          source:  props.idEntity,
          target: props.idEntity,
          
        })) 
      }

  return (props.triggerAttribute) ? (
    <div className='attributePopup'>
        <button className='close-btn' onClick={closePopup}>X</button>
        <h3>add an attribute</h3>
        <div className='input-block'>
        <label for="nome">Nome attributo</label>
        <input className='entity-values' id="nome" onChange={e => setAttributeName(e.target.value)}></input>
        </div>
        <button className='create-entity-btn' onClick={addAttribute}>Aggiungi</button>
        {props.children}
        </div>
  ) : "";
}
