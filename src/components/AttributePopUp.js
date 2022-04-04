import React,{useState} from 'react'
import '../styles/AttributePopUp.css'

export default function AttrbutePopUp(props) {
    const [attributeName, setAttributeName] = useState("")

    const closePopup = () => {
        props.setTriggeredAttribute(false);
    }

    const addAttribute = () => {
      props.setAttrList(e => e + 1)
      console.log(props.AttrList)
         props.setElements(e => e.concat({
          id: "a"+props.idEntity+props.AttrList.toString(),
          data: {label : `${attributeName}`,},
          position: {x: Math.random() * window.innerWidth/3, y: Math.random() * window.innerHeight/3},
          type: 'attributeNode',
        }))

        

        props.setEdges(e => e.concat({
          id: "aConnet"+(Math.random().toString()),
          type: 'straight',
          source:  props.idEntity,
          target: "a"+props.idEntity+props.AttrList.toString(),
        }))
      } 

  return (props.triggerAttribute) ? (
    <div className='attributePopup'>
        <button className='close-btn' onClick={closePopup}>X</button>
        <h3>add an attribute</h3>
        <div className='input-block'>
        <label for="nome">Nome attributo</label>
        <input className='attribute-values' id="nome" onChange={e => setAttributeName(e.target.value)}></input>
        </div>
        <button className='create-attribute-btn' onClick={addAttribute}>Aggiungi</button>
        {props.children}
        </div>
  ) : "";
}
