import React, { useState,} from 'react';
import { Handle, Position } from 'react-flow-renderer';
import AddPopUp from '../AddPopUp'

//Entity component
//it is a custom node for the react-flow library
//declare how entity is composed and what can do
function EntityNode(props) {
//buttonAttributePopup is true when button add-attribute has been clicked
//and show AddPopUp 
const [buttonAttributePopup, setButtonAttributePopup] = useState(false)
//AttrList is the number to assign to the composed id
//of the attribute, it will be incremented adding an attribute
const [AttrList, setAttrList] = useState(0)
  return (
    <>
    <AddPopUp triggerAttribute={buttonAttributePopup} setTriggeredAttribute={setButtonAttributePopup} setElements={props.data.setElements} 
                      setEdges={props.data.setEdges} idEntity={props.id} elements={props.data.elements} AttrList={AttrList} 
                      setAttrList={setAttrList}/>
    <div className="entity-node">
      <div>
      <div className="add-attribute" onClick={() => setButtonAttributePopup(true)}>+</div>
      </div>
      
      <Handle
        type="target"
        position="top"
        id="a"
        isConnectable={true}/>
      <h2 >{props.data.label}</h2>
      <Handle
        type="source"
        position="bottom"
        id="b"
        isConnectable={true} />
    </div>
    </>
  );
}

export default EntityNode;