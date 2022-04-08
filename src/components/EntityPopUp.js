import React,{useState} from 'react'
import '../styles/EntityPopUp.css'

export var entityIds = []

export default function EntityPopUp(props) {
    //name of entity passed by the user
    const [entityName, setEntityName] = useState("")
    //list of Entity Ids
    const [entityType, setEntityType] = useState("standard")
    

    //function activated clicking on close button on the popup
    const closePopup = () => {
        props.setTriggered(false);
    }

    //function to add an entity (create a new object in elements array)
    const addEntity = () => {
      //inside is added in entityIds the new entity added
       entityIds.push({
          id: "e"+(props.elements.length+1).toString(),
          name: entityName,
        })
      //add the new element in elements array
      props.setElements(e => e.concat({
        id: "e"+(e.length+1).toString(),
        data: {
                label : `${entityName}`,
                setElements: props.setElements,
                elements: props.elements,
                setEdges:props.setEdges,
                entityType: entityType,
            },
        position: {x: Math.random() * window.innerWidth/3, y: Math.random() * window.innerHeight/3},
        type: 'entityNode',
      }))
      //reset to empty the entityName
      setEntityName("")
      setEntityType("standard")
    }

  return (props.trigger) ? (
    <div className='entityPopup'>
        <button className='close-btn' onClick={closePopup}>X</button>
        <h3>Add an entity</h3>
        <div className='input-block'>
          <label for="nome">Name</label>
          <input className='entity-values' id="nome" onChange={e => setEntityName(e.target.value)}></input>
        </div>
          <span for="entities-types">Type:</span>
              <select name="entities-types" className='entities' onChange={e => setEntityType(e.target.value)}>
                  <option value="standard" >standard</option>
                  <option value="weak" >weak</option>
             </select>
        <button className='create-entity-btn' onClick={addEntity}>Add</button>
        {props.children}
        </div>
  ) : "";
}

