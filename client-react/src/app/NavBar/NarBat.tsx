import React, { FC } from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import ChangeLanguage from '../../components/ChangeLanguage/ChangeLanguage';
import { useHistory, useLocation } from 'react-router-dom';
import useNavBarStyles from './NavBarStyles';

const NavBar: FC = () => {
    const { t } = useTranslation();
    const history = useHistory();
    const location = useLocation();
    const classes = useNavBarStyles();

    const navigateTo = (path: string) => {
        history.push(path);
    }

    const addNoteButton = () => {
        if (location.pathname === '/' || location.pathname === '/notes') {
            return (
                <Button onClick={() => navigateTo("/notes/add")}>
                    {t("navbar.addNoteButton")}
                </Button>
            );
        }
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Button onClick={() => navigateTo("")}>
                    {t("navbar.notesButton")}
          </Button>
                {addNoteButton()}
                <ChangeLanguage className={classes.changeLanguage} />
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;