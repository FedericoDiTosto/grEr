import { Handle } from 'react-flow-renderer';

function AttributeNode(props) {
  return (
    <div className={props.data.attributeType}>
      <div className="intern">
      <Handle type="target" position="top"
             id="a" isConnectable={true}/>
      <label>{props.data.label}</label>
      <Handle type="source" position="bottom"
               id="b" isConnectable={true}/>
      </div>
    </div>
  );
}

export default AttributeNode;