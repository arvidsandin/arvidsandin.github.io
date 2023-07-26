import * as React from 'react'
import { editNote } from './editnote.module.css'

const EditNote = ({ edited, created }) => {
    return (
        <div className={editNote}>
            {<p>Last edited: {edited || created}</p>}
        </div>
    );
};

export default EditNote