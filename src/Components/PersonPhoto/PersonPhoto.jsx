import PropTypes from 'prop-types';

import "./PersonPhoto.css"

const PersonPhoto = (({personPhoto}) => {
    return (
        <>
         <img className="imgPerson" src={personPhoto} alt="personPhoto" />
        </>
    )
})

PersonPhoto.propTypes = {
    personPhoto: PropTypes.string
};

export default PersonPhoto;















