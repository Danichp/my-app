import React from "react";
import { connect } from "react-redux";
import { addMessageCreator, updateNewSendTextCreator } from "./../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewSendText: (text) => {
            dispatch(updateNewSendTextCreator(text));
        },
        addMessage: () => {
            dispatch(addMessageCreator());
        },
    }
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);


export default DialogsContainer; 