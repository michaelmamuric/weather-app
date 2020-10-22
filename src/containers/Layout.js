import React from 'react';
import Container from '@material-ui/core/Container';

const Layout = (props) => (
    <Container>
        {props.children}
    </Container>
);

export default Layout;