import * as React from 'react'
import { editNote } from './editnote.module.css'

const EditNote = ({ edited, created }) => {
    return (
        <div className={editNote}>
            {edited !== created && <p>Last edited: {edited}</p>}
        </div>
    );
};

export default EditNote