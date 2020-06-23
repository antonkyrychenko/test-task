import { makeStyles, Theme } from "@material-ui/core/styles";

const useNoteDetailsPageStyles = makeStyles((theme: Theme) => ({
    root: {
        fontFaily: "Verdana"
    },
    sections: {
        display: "flex",
    },
    section: {
        flex: 1,
        margin: 10,
        backgroundColor: "#424242",
        borderBottom: "3px solid " + theme.palette.primary.dark,
        borderColor: theme.palette.primary.dark
    },
    headerSection: {
        backgroundColor: "#211717",
        padding: 10
    },
    text: {
        padding: "0px 10px",
    }
}));

export default useNoteDetailsPageStyles;