import React, { FC } from 'react';
import { Select, MenuItem } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

type Props = & {className?: string}

const ChangeLanguage: FC<Props> = (props) => {
    const { i18n } = useTranslation();

    const handleChange = (
        event: React.ChangeEvent<{
            name?: string | undefined;
            value: unknown;
        }>) => {
        i18n.changeLanguage(event.target.value as string);
    }

    return (
        <Select defaultValue="en" className={props.className} style={{width:60}} onChange={handleChange}>
            <MenuItem value="en">EN</MenuItem>
            <MenuItem value="rus">RUS</MenuItem>
        </Select>
    );
}

export default ChangeLanguage;