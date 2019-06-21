import * as React from 'react';
import { connect } from 'react-redux';
import { Layout, Sidebar } from 'react-admin';
import AdminAppBar from './AdminAppBar';

class CustomLayout extends React.Component {
    render(){
        return(
            <Layout {...this.props} appBar={AdminAppBar} />
        )
    }
}

export default CustomLayout;