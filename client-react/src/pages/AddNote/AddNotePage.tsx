import React, { FC } from 'react';
import NoteForm from '../../components/NoteForm/NoteForm';
import useAddNotePageStyles from './AddNotePageStyles';
import useNotes from '../../hooks/useNotes';
import Note from '../../models/note';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const AddNotePage: FC = () => {
    const classes = useAddNotePageStyles();
    const history = useHistory();
    const { addNote } = useNotes();
    const { t } = useTranslation();

    const onSubmit = (data: any) => {
        addNote({
            label: data.label,
            text: data.text,
        } as Note, () => history.push(""));
    }

    return (
        <div>
            <NoteForm className={classes.form} title={t("addNotePage.title")} onSubmit={onSubmit} />
        </div>
    );
}

export default AddNotePage;