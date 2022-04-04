import React,{useState} from 'react'
import '../styles/AddPopUp.css'

export default function AddPopUp(props) {
    const [attributeName, setAttributeName] = useState("")
    const [selected, setSelected] = useState("")
    const closePopup = () => {
        props.setTriggeredAttribute(false);
    }

    const addAttribute = () => {
      props.setAttrList(e => e + 1)
      console.log(props.AttrList)
         props.setElements(e => e.concat({
          id: "a"+props.idEntity+props.AttrList.toString(),
          data: {label : `${attributeName}`,},
          position: {x: Math.random() * window.innerWidth/3, y: Math.random() * window.innerHeight/3},
          type: 'attributeNode',
        }))

        

        props.setEdges(e => e.concat({
          id: "aConnet"+(Math.random().toString()),
          type: 'straight',
          source:  props.idEntity,
          target: "a"+props.idEntity+props.AttrList.toString(),
        }))
      } 


      const addRelation = () => {
        props.setAttrList(e => e + 1)
        console.log(props.AttrList)
           props.setElements(e => e.concat({
            id: "a"+props.idEntity+props.AttrList.toString(),
            data: {label : `${attributeName}`,},
            position: {x: Math.random() * window.innerWidth/3, y: Math.random() * window.innerHeight/3},
            type: 'attributeNode',
          }))
  
          
  
          props.setEdges(e => e.concat({
            id: "aConnet"+(Math.random().toString()),
            type: 'straight',
            source:  props.idEntity,
            target: "a"+props.idEntity+props.AttrList.toString(),
          }))
        } 
      
      function onChangeValueRadio(event) {
        setSelected(event.target.value);
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
        
        {selected =="Attributo" ? 
                (<>
                <div className='input-block'>
                <label for="nome">Nome {selected}</label>
                <input className='attribute-values' id="nome" onChange={e => setAttributeName(e.target.value)}></input>
                </div>
                <button className='create-btn' onClick={addAttribute}>Aggiungi</button>
                </>) : "" 
        }
        {selected =="Relazione" ? 
                (<>
                <div className='input-block'>
                <label for="nome">Nome {selected}</label>
                <input className='attribute-values' id="nome" onChange={e => setAttributeName(e.target.value)}></input>
                </div>
                <button className='create-btn' onClick={addAttribute}>Aggiungi</button>
                </>) : "" 
        }
        {selected =="Specializzazine" ? 
                (<>
                <div className='input-block'>
                <label for="nome">Nome {selected}</label>
                <input className='attribute-values' id="nome" onChange={e => setAttributeName(e.target.value)}></input>
                </div>
                <button className='create-btn' onClick={addAttribute}>Aggiungi</button>
                </>) : "" 
        }
        
        {props.children}
        </div>
  
  
  
  
  ) : "";
}
