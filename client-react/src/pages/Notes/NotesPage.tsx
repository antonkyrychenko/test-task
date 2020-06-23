import React, { FC } from 'react';
import useNotes from '../../hooks/useNotes';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import useNotesPageStyles from './NotesPageStyles';
import DeleteIcon from '@material-ui/icons/Delete';
import { useTranslation } from 'react-i18next';

const NotesPage: FC = () => {
    const { notes, deleteNote } = useNotes();
    const history = useHistory();
    const classes = useNotesPageStyles();
    const { t } = useTranslation();

    const onClick = (noteId: string) => {
        history.push('/note/' + noteId);
    }

    const onClickDelete = (noteId: string) => {
        deleteNote(noteId);
    }

    return (
        <div className={classes.root}>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>{t("note.label")}</TableCell>
                            <TableCell align="right">{t("note.createdTime")}</TableCell>
                            <TableCell align="right">{t("note.lastUpdatedTime")}</TableCell>
                            <TableCell align="right">{t("note.id")}</TableCell>
                            <TableCell align="right">{t("notes.remove")}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {notes?.map((note) => (
                            <TableRow key={note.noteId}>
                                <TableCell onClick={() => onClick(note.noteId)} component="th" scope="row">{note.label}</TableCell>
                                <TableCell onClick={() => onClick(note.noteId)} align="right">{note.createdTime}</TableCell>
                                <TableCell onClick={() => onClick(note.noteId)} align="right">{note.lastUpdatedTime}</TableCell>
                                <TableCell onClick={() => onClick(note.noteId)} align="right">{note.noteId}</TableCell>
                                <TableCell onClick={() => onClickDelete(note.noteId)} align="right"><IconButton><DeleteIcon /></IconButton></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default NotesPage;