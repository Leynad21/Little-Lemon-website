import React, { useState } from 'react'

const BookingForm = ({ formData, setFormData, availableTimes, dispatch, submitForm }) => {

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
        console.log(formData);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        submitForm(formData)
    }

    const handleDateChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
        dispatch({ type: 'UPDATE_TIMES', payload: e.target.value })
    }


    return (
        <>
            <form className='styled-form'>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" name='date' value={formData.date} onChange={handleDateChange} />
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" name='time' value={formData.time} onChange={handleChange}>
                    {availableTimes.map((time, index) => (
                        <option key={index}>
                            {time}
                        </option>
                    ))
                    }
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" name='numberGuests' value={formData.numberGuests} onChange={handleChange} />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" name='occasion' value={formData.occasion} onChange={handleChange}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" onClick={handleSubmit} value="Make Your reservation" />
            </form >
        </>
    )
}

export default BookingForm