import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddEvents = () => {

    const [eventData, setEventData] = useState({
        eventId: null,
        eventName: '',
        eventDetails: '',
        eventDate: ''
    })
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        reset('', {
            keepValues: false,
        })
        const tempEventData = {
            ...eventData,
            eventId: data.eventId,
            eventName: data.eventName,
            eventDetails: data.eventDetails,
            eventDate: data.eventDate
        }
        console.log(tempEventData)
        const url = 'http://localhost:3000/addAnEvent'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(tempEventData)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    };

    return (
        <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-8 component-bg-color">
            <div className="page-header">
                <div className="row">
                    <div className="col-sm-12">
                        <h2 className="page-title my-3">Add New Events</h2>
                    </div>
                </div>
            </div>
            <div className="row my-4">
                <div className="col-sm-12">
                    <div className="card shadow-lg bg-white">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h5 className="form-title"><span>Event Details</span></h5>
                                    </div><div className="col-sm-6 col-12">
                                        <div className="form-group">
                                            <label className="form-label">Event ID</label>
                                            <input {...register("eventId", { required: true })} placeholder="Event ID" type="number" className="form-control field-box" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-12">
                                        <div className="form-group">
                                            <label className="form-label">Event Name</label>
                                            <input {...register("eventName", { required: true })} placeholder="Event Name" type="text" className="form-control field-box" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-12">
                                        <div className="form-group">
                                            <label className="form-label">Event Details</label>
                                            <input {...register("eventDetails", { required: true })} placeholder="Event Details" type="text" className="form-control field-box" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-12">
                                        <div className="form-group">
                                            <label className="form-label">Event Date</label>
                                            <input {...register("eventDate", { required: true })} type="date" placeholder="Event Date" className="form-control field-box" />
                                            {errors.eventDate && <span className="text-danger">Select an event date</span>}
                                        </div>
                                    </div>
                                </div>
                                <input className="btn btn-primary mt-3" type="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default AddEvents;