import React, {useCallback, useEffect} from 'react';
import {Box, Modal, Typography} from "@mui/material";
import _ from 'lodash'
import Api from "../Api";
import * as events from "events";
import {useDispatch} from "react-redux";
import {postEventsRequest, updateEventsRequest} from "../state/actions";
import {ToastContainer, toast} from "react-toastify";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#1E1F21',
    color:"#DDDCDD",
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};





function DayForm(props)  {
    const dispatch = useDispatch();


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (props.id !== "update") {

                const newDate = {
                    id: _.uniqueId(),
                    title: props.value,
                    description: props.descriptionValue,
                    date: +props.id
                }

                if (!newDate.title){
                    toast.warn('You forgot write a title', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    return

                }
                dispatch(postEventsRequest(newDate, props.startDayQuery, props.endDayQuery))

        } else{
            const updatedDate = {
                title: props.value,
                description: props.descriptionValue,
            }

            if (!updatedDate.title){
                toast.warn('You forgot write a title', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                return

            }
            dispatch(updateEventsRequest(updatedDate, props.dateId, props.startDayQuery, props.endDayQuery))


        }

        props.handleClose()
    }

    return (
        <>
            <Modal
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Add an event or reminder
                </Typography>
                <form onSubmit={handleSubmit} className='d-flex flex-column gap-2'>
                    <input type="text"
                           onChange={(e) => props.onSetValue(e.target.value)}
                           value={props.value}
                    />
                    <textarea
                              onChange={(e) => props.onSetDescriptionValue(e.target.value)}
                              value={props.descriptionValue}
                              className='h-auto h-25'
                    />
                    <button type='submit'>Save</button>
                </form>

            </Box>

        </Modal>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>

    );
}

export default DayForm;