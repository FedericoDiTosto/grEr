import { useState, useCallback, Fragment } from 'react';
import ReactFlow,{applyEdgeChanges, applyNodeChanges, Controls, useNodesState, useEdgesState, ReactFlowProvider} from 'react-flow-renderer';
import EntityPopUp from './EntityPopUp'

import EntityNode from './nodes/EntityNode.js';
import AttributeNode from './nodes/AttributeNode';
import '../components/nodes/EntityNode.css';
import '../components/nodes/AttributeNode.css';

const nodeTypes = { entityNode: EntityNode, attributeNode: AttributeNode };


function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgeChange] = useEdgesState([]);
  const [buttonEntityPopup, setButtonEntityPopup] = useState(false)

  return (
  <Fragment>
    <EntityPopUp trigger={buttonEntityPopup} setTriggered={setButtonEntityPopup} elements={nodes} setElements={setNodes} setEdges={setEdges}/>
    <ReactFlowProvider>
    <ReactFlow nodes={nodes} edges={edges} fitView style={{width:'100%', height:'90vh'}} nodeTypes={nodeTypes} onNodesChange={onNodesChange} onEdgeChange={onEdgeChange}>
    <Controls />
  </ReactFlow>
  </ReactFlowProvider>
  <div className='add_item' onClick={() => setButtonEntityPopup(true)}>+</div>
  
  </Fragment>
  )}

export default Flow;
