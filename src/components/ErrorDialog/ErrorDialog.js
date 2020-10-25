import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogContentText, DialogActions, Button } from '@material-ui/core';

const ErrorDialog = (props) => {

    const [displayDialog, setDisplayDialog] = useState(true);

    const closeDialogHandler = () => {
        setDisplayDialog(false);
        // Reload app
        window.location.reload();
    }

    return (
        <Dialog open={displayDialog} onClose={closeDialogHandler}>
            <DialogTitle>Error</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Sorry, a technical error has occurred: <br /><br />
                    {props.errorMessage} <br /><br />
                    You will now be redirected to the main page.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={closeDialogHandler}>OK</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ErrorDialog;
