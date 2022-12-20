import "./PeopleList.css"

const PeopleList = ({ people }) =>(
    <ul className={'list__container'}>
        {people.map(({ id, name, img }) =>
            <li className={'list__item'} key={id}>               
                    <img className={'person__photo'} src={img} alt={name} />
                    <p>{name}</p>              
            </li>
        )}
    </ul>
)


export default PeopleList;
