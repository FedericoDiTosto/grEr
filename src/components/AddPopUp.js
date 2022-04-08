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
    //cardinality 2 entity
    const [cardE1, setCardE1] = useState("")
    const [cardE2, setCardE2] = useState("")
    const [attributeType, setAttributeType] = useState("attribute-standard")

    //find the name of the entity that opened the popup
    const e_name = entityIds.find(e => e.id == props.idEntity)

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
         data: {label : `${attributeName}`,
                attributeType, attributeType},
         position: {x: Math.random() * window.innerWidth/3, y: Math.random() * window.innerHeight/3},
         type: 'attributeNode',
      }))
      if(attributeType != "attribute-weak"){
      //add the new connection between entity and attribute
      props.setEdges(e => e.concat({
        id: "aConnet"+(Math.random().toString()),
        type: 'straight',
        source:  props.idEntity,
        target: "a"+props.idEntity+props.AttrList.toString(),
      }))
    }
    else{
      props.setEdges(e => e.concat({
        id: "aConnet"+(Math.random().toString()),
        type: 'straight',
        source:  props.idEntity,
        target: "a"+props.idEntity+props.AttrList.toString(),
        animated:true,
      }))
    }
      setAttributeType("attribute-standard")
      } 

      //function to add a new relation between two entity
      const addRelation = () => {
          props.setRelationList(e => e + 1)
          //add the new element in elements array
          props.setElements(e => e.concat({
             id: "rel"+props.idEntity+relationId+props.RelationList.toString(),
             data: {label : `${relationName}`,},
             position: {x: Math.random() * window.innerWidth/3, y: Math.random() * window.innerHeight/3},
             type: 'relationNode',
          }))

          props.setEdges(e => e.concat({
            id: "aConnet"+(Math.random().toString()),
            source:  props.idEntity,
            target: "rel"+props.idEntity+relationId+props.RelationList.toString(),
            type: 'straight',
            label: cardE1,
            }))

            props.setEdges(e => e.concat({
              id: "aConnet"+(Math.random().toString()),
              source: "rel"+props.idEntity+relationId+props.RelationList.toString(),
              target: relationId,
              type: 'straight',
              label: cardE2,
              }))
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
      <h3>Add</h3>
      <div className="radio-box" onChange={onChangeValueRadio}>            
        <div>
          <label for="attribute-radio">Attribute</label>
          <input type="radio" name="radio-selec" value="Attribute" id="attribute-radio"/>
        </div>
        <div>
          <label for="relation-radio">Relationship</label>
          <input type="radio" name="radio-selec" value="Relationship" id="relation-radio"/>
        </div>
        <div>
          <label for="specialization-radio">Specialization</label>
          <input type="radio" name="radio-selec" value="Specialization" id="specialization-radio"/>
        </div>
      </div> 
        {selected == "Attribute" ? (
          <>
            <div className='input-block'>
              <label for="name">Name {selected}</label>
              <input className='attribute-values' id="nome" onChange={e => setAttributeName(e.target.value)}></input>
            </div>
            <span for="attributes-types">Type:</span>
              <select name="attributes-types" className='attributes' onChange={e => setAttributeType(e.target.value)}>
                  <option value="attribute-standard" >standard</option>
                  <option value="attribute-weak" >weak</option>
                  <option value="attribute-multivalue" >multivalue</option>
             </select>
            <button className='create-btn' onClick={addAttribute}>Add</button>
          </>
        ) : "" }
        {selected == "Relationship" ? (
          <>
            <div className='input-block'>
              <div className='input-group'>
              <label for="name">Name {selected}</label>
              <input className='relation-values' id="name" onChange={e => setRelationName(e.target.value)}></input>
              </div>
              <div className='input-group'>
              <label for="cardE1">Entity 1 Cardinality (x,x)</label>
              <input className='relation-values' id="cardE1" onChange={e => setCardE1(e.target.value)}></input>
              </div>
              <div className='input-group'>
              <label for="cardE2">Entity 2 Cardinality (x,x)</label>
              <input className='relation-values' id="cardE2" onChange={e => setCardE2(e.target.value)}></input>
              </div>
              <span for="entities">Relationship with:</span>
              <select name="entities" className='entities' onChange={onChangeRelationId}>
                {entityIds.map((option) => (
                  <option value={option.id}>{option.name}</option>
                ))}
             </select>
            </div>
            <button className='create-btn' onClick={addRelation}>Add</button>
          </>) : "" }
        {selected == "Specialization" ? ( 
          <>
            <div className='input-block'>
              <label for="name">Name {selected}</label>
              <input className='attribute-values' id="name" onChange={e => setAttributeName(e.target.value)}></input>
            </div>
            <button className='create-btn' onClick={addAttribute}>Add</button>
          </>) : "" }
        {props.children}
      </div>
  ) : "" }
