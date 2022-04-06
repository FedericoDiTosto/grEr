import React, { useState,} from 'react';
import { Handle, Position } from 'react-flow-renderer';

const handleBottom = { left: 110 };
const handleTop = { left: 0 };

//Relation component
//it is a custom node for the react-flow library
//declare how relation is composed and what can do
function RelationNode(props) {
//RelationList is the number to assign to the composed id
//of the relation, it will be incremented adding a relation
  return (
    <div className="relation-node">
      <Handle
        type="target"
        id="a"
        isConnectable={true}
        style={handleTop}/>
        <div className='name-box'>
        <p>{props.data.label}</p>
        </div>
      <Handle
        type="source"
        position="bottom"
        id="b"
        isConnectable={true} 
        style={handleBottom}/>
    </div>
  );
}

export default RelationNode;