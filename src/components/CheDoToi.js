import React from 'react';
import StyledNightmode from './styles/StyledNightmode'


const CheDoToi = ({ nightModeCallback, nightMode }) => {
    return (
        <StyledNightmode>
            <span>Chế độ tối!!!</span>
            <label className='switch'>
                <input type='checkbox' checked={nightMode} onChange={nightModeCallback} />
                <span className='slider round' />
            </label>
        </StyledNightmode>
    );
}

export default CheDoToi;