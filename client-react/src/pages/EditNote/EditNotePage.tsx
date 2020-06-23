import React, { FC, useEffect, useState } from 'react';
import useNotes from '../../hooks/useNotes';
import useEditNotePageStyles from './EditNotePageStyles';
import Note from '../../models/note';
import NoteForm from '../../components/NoteForm/NoteForm';
import { useParams, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const EditNotePage: FC = () => {
    const { updateNote, getNoteById } = useNotes();
    const [note, setNote] = useState<Note>();
    const { noteId } = useParams();
    const { t } = useTranslation();
    const history = useHistory();
    const classes = useEditNotePageStyles();

    useEffect(() => {
        setNote(getNoteById(noteId));
    }, [noteId, getNoteById]);

    const onSubmit = (data: any) => {
        note!.label = data.label;
        note!.text = data.text;

        updateNote(note!, () => history.push(""));
    }

    return (
        <div>
            {note && <NoteForm className={classes.form} title={t("editNotePage.title")} defaultValues={note} onSubmit={onSubmit} />}
        </div>
    );
}

export default EditNotePage;