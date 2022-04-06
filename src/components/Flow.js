import { useState, useCallback, Fragment } from 'react';
import ReactFlow,{applyEdgeChanges, applyNodeChanges, Controls, useNodesState, useEdgesState, ReactFlowProvider} from 'react-flow-renderer';
import EntityPopUp from './EntityPopUp'

import EntityNode from './nodes/EntityNode.js';
import AttributeNode from './nodes/AttributeNode';
import RelationNode from './nodes/RelationNode'
import '../components/nodes/EntityNode.css';
import '../components/nodes/AttributeNode.css';
import '../components/nodes/RelationNode.css';

const nodeTypes = { entityNode: EntityNode, attributeNode: AttributeNode , relationNode: RelationNode,};


function Flow() {
  //Contains list of nodes (necessary for react-flow library)
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  //Contains list of edges(connections) (necessary for react-flow library)
  const [edges, setEdges, onEdgeChange] = useEdgesState([]);
  //set clicked or not the button to create an entity
  const [buttonEntityPopup, setButtonEntityPopup] = useState(false)
  
  return (
  <Fragment>
    <EntityPopUp trigger={buttonEntityPopup} setTriggered={setButtonEntityPopup} elements={nodes} 
                  setElements={setNodes} setEdges={setEdges}/>
    <ReactFlowProvider>
    <ReactFlow nodes={nodes} edges={edges} fitView style={{width:'100%', height:'90vh'}} nodeTypes={nodeTypes} 
                onNodesChange={onNodesChange} onEdgeChange={onEdgeChange}>
    <Controls />
  </ReactFlow>
  </ReactFlowProvider>
  <div className='add_item' onClick={() => setButtonEntityPopup(true)}>+</div>
  
  </Fragment>
  )
}

export default Flow;
