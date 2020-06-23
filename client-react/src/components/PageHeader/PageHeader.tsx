import React, { FC } from 'react';
import usePageHeaderStyles from './PageHeaderStyles';

type Props = & { className?: string, text?: string }

const PageHeader: FC<Props> = (props) => {
    const classes = usePageHeaderStyles();

    return (
        <div className={classes.root}>
            <p style={{ margin: 0 }}>{props.text}</p>
            <div>
                {props.children}
            </div>
        </div>
    );
}

export default PageHeader;