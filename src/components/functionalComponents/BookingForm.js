import React, { useState } from 'react';

const BookingForm = ({ formData, setFormData, availableTimes, dispatch, submitForm }) => {
    const [errors, setErrors] = useState({}); // State to store validation errors

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        // Check if date is empty
        if (!formData.date) {
            newErrors.date = 'Date is required';
        }

        // Check if time is empty
        if (!formData.time) {
            newErrors.time = 'Time is required';
        }

        // Check if number of guests is empty or not within the range of 1 to 10
        if (!formData.numberGuests || formData.numberGuests < 1 || formData.numberGuests > 10) {
            newErrors.numberGuests = 'Number of guests must be between 1 and 10';
        }

        // Check if occasion is selected
        if (!formData.occasion) {
            newErrors.occasion = 'Occasion is required';
        }

        setErrors(newErrors);

        // If there are no errors, return true; otherwise, return false
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate the form
        const isValid = validateForm();

        if (isValid) {
            submitForm(formData);
        }
    };

    const handleDateChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
        dispatch({ type: 'UPDATE_TIMES', payload: e.target.value });
    };

    return (
        <>
            <form className="styled-form">
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" name="date" value={formData.date} onChange={handleDateChange} />
                {errors.date && <span className="error" style={{ "color": "red" }}>*{errors.date}</span>}

                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" name="time" value={formData.time} onChange={handleChange}>
                    {availableTimes.map((time, index) => (
                        <option key={index}>{time}</option>
                    ))}
                </select>
                {errors.time && <span className="error" style={{ "color": "red" }}>*{errors.time}</span>}

                <label htmlFor="guests">Number of guests</label>
                <input
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    name="numberGuests"
                    value={formData.numberGuests}
                    onChange={handleChange}
                />
                {errors.numberGuests && <span className="error" style={{ "color": "red" }}>*{errors.numberGuests}</span>}

                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" name="occasion" value={formData.occasion} onChange={handleChange}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                {errors.occasion && <span className="error" style={{ "color": "red" }}>*{errors.occasion}</span>}

                <input type="submit" onClick={handleSubmit} value="Make Your reservation" />
            </form>
        </>
    );
};

export default BookingForm;
