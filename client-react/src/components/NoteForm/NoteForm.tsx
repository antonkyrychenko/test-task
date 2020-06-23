import React, { FC } from 'react';
import { useForm, ErrorMessage } from 'react-hook-form';
import { TextField, Button, Typography } from '@material-ui/core';
import useNoteFormStyles from './NoteFormStyles';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

type Props = & { title: string, onSubmit: (data: any) => void, defaultValues?: any, className: string };

const NoteForm: FC<Props> = (props) => {
    const { register, handleSubmit, errors } = useForm({
        defaultValues: props.defaultValues
    });
    const { t } = useTranslation();
    const classes = useNoteFormStyles();

    const subTitle = (text: string) =>
        <Typography className={classes.subtitle} variant="h5" component="p"> {text} </Typography>

    const labelInput =
        <div>
            {subTitle(t("noteForm.label"))}
            <TextField
                inputRef={register({
                    required: "Label is required",
                    minLength: { value: 3, message: "Label cannot be shorter than 3 characters" },
                    maxLength: { value: 20, message: "Label cannot be longer than 20 characters" },
                })}
                name="label"
                fullWidth
                variant="outlined" />
            <ErrorMessage errors={errors} name="label" as="p" />
        </div>

    const textInput =
        <div>
            {subTitle(t("noteForm.text"))}
            <TextField
                inputRef={register({
                    required: "Text is required",
                    minLength: { value: 5, message: "Text cannot be shorter than 5 characters" },
                    maxLength: { value: 200, message: "Text cannot be longer than 200 characters" },
                })}
                name="text"
                fullWidth
                multiline
                rows={7}
                variant="outlined" />
            <ErrorMessage errors={errors} name="text" as="p" />
        </div>

    return (
        <div className={clsx(props.className, classes.root)}>
            <form className={classes.form} onSubmit={handleSubmit(props.onSubmit)}>
                <Typography color="primary" variant="h4" component="p"> {props.title} </Typography>
                {labelInput}
                {textInput}
                <Button className={classes.submitButton} variant="contained" color="primary" type="submit">{t("noteForm.submitButton")}</Button>
            </form>
        </div>
    );
}

export default NoteForm;