import { makeStyles, Theme } from "@material-ui/core/styles";

const useNoteFormStyles = makeStyles((theme: Theme) => ({
    root: {
    },
    submitButton: {
        display: "block",
        fontSize: 19,
        margin: "15px 10px 15px auto"
    },
    form: {
        "& > *": {
            marginTop: 15,
            marginBottom: 15
        }
    },
    subtitle: {
        padding: 10
    }
}));

export default useNoteFormStyles;