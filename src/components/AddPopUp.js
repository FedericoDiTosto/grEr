import React,{useState} from 'react'
import '../styles/AddPopUp.css'

import {entityIds} from './EntityPopUp'

export default function AddPopUp(props) {
  //name of attribute passed by the user
    const [attributeName, setAttributeName] = useState("")
  //selected contains the value of the radio component select
  //for each component permit to show different elements of the popup
    const [selected, setSelected] = useState("")
    const [relationName, setRelationName] = useState("")
    const [relationId, setRelationId] = useState("")
  //function activated clicking on close button on the popup
    const closePopup = () => {
        props.setTriggeredAttribute(false);
    }

  //function to add an attribute (create a new object in elements array)
    const addAttribute = () => {
      //inside is incremented by 1 the attrList
      props.setAttrList(e => e + 1)
      //add the new element in elements array
      props.setElements(e => e.concat({
         id: "a"+props.idEntity+props.AttrList.toString(),
         data: {label : `${attributeName}`,},
         position: {x: Math.random() * window.innerWidth/3, y: Math.random() * window.innerHeight/3},
         type: 'attributeNode',
      }))

      //add the new connection between entity and attribute
      props.setEdges(e => e.concat({
        id: "aConnet"+(Math.random().toString()),
        type: 'straight',
        source:  props.idEntity,
        target: "a"+props.idEntity+props.AttrList.toString(),
      }))
      } 

      //function to add a new relation between two entity
      const addRelation = () => {
          props.setEdges(e => e.concat({
            id: "aConnet"+(Math.random().toString()),
            type: 'buttonedge',
            source:  props.idEntity,
            target: relationId,
            name: relationName,
            }))
            console.log(relationName)
        } 
      

      function onChangeValueRadio(event) {
        setSelected(event.target.value);
      }

      function onChangeRelationId(event){
        setRelationId(event.target.value)
      }


  return (props.triggerAttribute) ? (
    <div className='AddPopUp'>
      <button className='close-btn' onClick={closePopup}>X</button>
      <h3>add</h3>
      <div onChange={onChangeValueRadio}>            
        <div>
          <input type="radio" name="radio-selec" value="Attributo" />
          <label for="attribute-radio">Attributo</label>
        </div>
        <div>
          <input type="radio" name="radio-selec" value="Relazione"/>
          <label for="relation-radio">Relazione</label>
        </div>
        <div>
          <input type="radio" name="radio-selec" value="Specializzazine" />
          <label for="specialization-radio">Specializzazioe</label>
        </div>
      </div> 
        {selected == "Attributo" ? (
          <>
            <div className='input-block'>
              <label for="nome">Nome {selected}</label>
              <input className='attribute-values' id="nome" onChange={e => setAttributeName(e.target.value)}></input>
            </div>
            <button className='create-btn' onClick={addAttribute}>Aggiungi</button>
          </>
        ) : "" }
        {selected == "Relazione" ? (
          <>
            <div className='input-block'>
              <label for="nome">Nome {selected}</label>
              <input className='attribute-values' id="nome" onChange={e => setRelationName(e.target.value)}></input>
              <span for="entities">Relazione con :</span>
              <select name="entities" className='entities' onChange={onChangeRelationId}>
                {entityIds.map((option) => (
                  <option value={option.id}>{option.name}</option>
                ))}
             </select>
            </div>
            <button className='create-btn' onClick={addRelation}>Aggiungi</button>
          </>) : "" }
        {selected == "Specializzazine" ? ( 
          <>
            <div className='input-block'>
              <label for="nome">Nome {selected}</label>
              <input className='attribute-values' id="nome" onChange={e => setAttributeName(e.target.value)}></input>
            </div>
            <button className='create-btn' onClick={addAttribute}>Aggiungi</button>
          </>) : "" }
        {props.children}
      </div>
  ) : "" }
