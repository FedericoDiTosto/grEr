import React, { useState,} from 'react';
import { Handle, Position } from 'react-flow-renderer';
import AttrbutePopUp from '../AttributePopUp'

function EntityNode( {data}) {
const [buttonAttributePopup, setButtonAttributePopup] = useState(false)
/* const openAttributePopUp = () => {
  const
  setButtonAttributePopup(true)
} */
  return (
    

    <div className="entity-node">
      <AttrbutePopUp triggerAttribute={buttonAttributePopup} setTriggeredAttribute={setButtonAttributePopup} setElements={data.setElements} 
                      setEdges={data.setEdges} idEntity={data.idEntity} elemets={data.elemets}/>
      <div>
      <div className="add-attribute" onClick={() => setButtonAttributePopup(true)}>+</div>
      </div>
      
      <Handle
        type="target"
        position="top"
        id="a"
        isConnectable={true}/>
      <h2 >{data.label}</h2>
      <Handle
        type="source"
        position="bottom"
        id="b"
        isConnectable={true} />
    </div>
  );
}

export default EntityNode;