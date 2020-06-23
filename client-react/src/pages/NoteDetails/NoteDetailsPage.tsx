import React, { FC, useState, useEffect } from 'react';
import useNotes from '../../hooks/useNotes';
import { useParams, useHistory } from 'react-router-dom';
import { TableContainer, Table, TableRow, TableCell, TableBody, Typography, Container, IconButton } from '@material-ui/core';
import useNoteDetailsPageStyles from './NoteDetailsPageStyles';
import Note from '../../models/note';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { useTranslation } from 'react-i18next';
import PageHeader from '../../components/PageHeader/PageHeader';

const NoteDetailsPage: FC = () => {
    const classes = useNoteDetailsPageStyles();
    const { notes } = useNotes();
    const { noteId } = useParams();
    const [note, setNote] = useState<Note>();
    const { t } = useTranslation();
    const [elements, setElements] = useState<Array<Array<string>>>([
        [t("note.id"), ""],
        [t("note.label"), ""],
        [t("note.createdTime"), ""],
        [t("note.lastUpdatedTime"), ""],
    ]);
    const history = useHistory();


    useEffect(() => {
        if (!notes) {
            return;
        }

        const nt = notes.find(note => note.noteId === noteId);

        if (nt) {
            setNote(nt);
            return;
        }

        history.push('');
    }, [notes, noteId, history]);

    useEffect(() => {
        if (!note) {
            return;
        }

        setElements([
            [t("note.id"), note.noteId],
            [t("note.label"), note.label],
            [t("note.createdTime"), new Date(note.createdTime).toLocaleDateString()],
            [t("note.lastUpdatedTime"), new Date(note.lastUpdatedTime).toLocaleDateString()],
        ]);
    }, [note, t]);


    const headerSection = (text: string) => {
        return (
            <div className={classes.headerSection}>
                <Typography variant="h5">
                    {text}
                </Typography>
            </div>
        );
    }

    const tableRow =
        <>
            {elements?.map((element) => (
                <TableRow key={element[0]}>
                    <TableCell component="th" scope="row">{element[0]}</TableCell>
                    <TableCell align="right">{element[1]}</TableCell>
                </TableRow>
            ))}
        </>

    const generalInfo =
        <div className={classes.section}>
            {headerSection(t("noteDetailsPage.generalInfo"))}
            <TableContainer component={Container}>
                <Table aria-label="simple table">
                    <TableBody>
                        {tableRow}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    const text =
        <div className={classes.section}>
            {headerSection(t("note.text"))}
            <p className={classes.text}>{note?.text}</p>
        </div>

    return (
        <div className={classes.root}>
            <PageHeader text={note?.label}>
                <IconButton onClick={() => history.push("edit/" + noteId)}>
                    <EditOutlinedIcon fontSize="large" />
                </IconButton>
            </PageHeader>
            <div style={{ display: "flex" }}>
                {generalInfo}
                {text}
            </div>

        </div>
    );
}

export default NoteDetailsPage;