import "./PeopleList.css"

const PeopleList = ({ people }) => {  
    return (       
        <ul>       
        {people.map(({name, id, img}) => 
         <li key={id}>
            <img src={img} alt={name} />
            <p>{name}</p>            
            </li>
        )}     
         </ul>        
    )
}




export default PeopleList;
