import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import { Dialog, DialogContent, DialogTitle, DialogContentText, DialogActions, Button } from '@material-ui/core';

const ErrorDialog = (props) => {

    const [displayDialog, setDisplayDialog] = useState(true);

    const closeDialogHandler = () => {
        setDisplayDialog(false);
        props.onCloseDialog();
    }

    return (
        <Dialog open={displayDialog} onClose={closeDialogHandler}>
            <DialogTitle>Error</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Sorry, a technical error has occurred.
                    Please try again later.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={closeDialogHandler}>OK</Button>
            </DialogActions>
        </Dialog>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        onCloseDialog: () => dispatch(actions.clearError())
    }
}

export default connect(null, mapDispatchToProps)(ErrorDialog);
