import * as React from 'react';
import { AppBar, UserMenu, MenuItemLink, translate } from 'react-admin';
import { Typography } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import { withStyles, Theme } from '@material-ui/core/styles';
import { createStyles } from '@material-ui/styles';

const styles:any = ({ palette, spacing }: Theme) => createStyles({
    title: {
        flex: 1,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
});

const CustomUserMenu = translate(({ translate, ...props }) => (
    <UserMenu {...props}>
        <MenuItemLink
            to="/configuration"
            primaryText={translate('pos.configuration')}
            leftIcon={<SettingsIcon />}
        />
    </UserMenu>
));

interface IAdminAppBarProps {
    classes: {
        title: string,
        spacer: string,
    },
}


class AdminAppBar extends React.Component<IAdminAppBarProps, any> {
    render(){
        const { classes } = this.props;
        return (
            <AppBar {...this.props} userMenu={<CustomUserMenu />}>
            <Typography
                variant="h5"
                color="inherit"
                className={classes.title}
                id="react-admin-title"
            />
        </AppBar>
        )

        
    }
}

export default withStyles(styles)(AdminAppBar);