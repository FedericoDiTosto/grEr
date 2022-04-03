import { Handle, Position } from 'react-flow-renderer';

function AttributeNode(props) {
  return (
    <div className="attribute-node">
      <Handle type="target" position={Position.Top} isConnectable={true}/>
      <label>{props.data.label}</label>
      <Handle type="source" position={Position.Bottom} id="b" isConnectable={true}/>
    </div>
  );
}

export default AttributeNode;