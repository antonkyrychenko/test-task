import { makeStyles, Theme } from "@material-ui/core/styles";

const usePageHeaderStyles = makeStyles((theme: Theme) => ({
    root: {
        fontFaily: "Verdana",
        display: "flex",
        alignItems: "center",
        padding: "5px 15px",
        margin: "20px 10px 10px 10px",
        fontSize: 23,
        backgroundColor: "#211717",
        borderBottom: "3px solid " + theme.palette.primary.dark,
    }
}));

export default usePageHeaderStyles;