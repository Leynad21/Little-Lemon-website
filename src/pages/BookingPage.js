import React, { useState, useReducer } from 'react'
import BookingForm from '../components/functionalComponents/BookingForm'
import { useNavigate } from 'react-router-dom';


const availableTimesReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return ['17:00', '18:00', '19:00', '20:00'];
        default:
            return state;
    }
}


const BookingPage = () => {

    const [formData, setFormData] = useState({
        date: '',
        time: '',
        numberGuests: '',
        occasion: ''
    })

    const navigate = useNavigate()

    const seedRandom = function (seed) {
        var m = 2 ** 35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }

    const fetchAPI = (date) => {
        let result = []
        let random = seedRandom(date.getDate())

        for (let i = 17; i <= 23; i++) {
            if (random() < 0.5) {
                result.push(i + ':00');
            }
            if (random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    }

    const submitAPI = (formData) => {
        return true
    }

    const initialState = fetchAPI(new Date())
    const [availableTimes, dispatch] = useReducer(availableTimesReducer, initialState)

    const updateTimes = (date) => {
        const dateObj = new Date(date)
        return fetchAPI(dateObj)
    };

    const submitForm = (formData) => {
        const isSubmitted = submitAPI(formData);

        if (isSubmitted) {
            navigate("/confirmed");
        }
    }

    return (
        <>
            <BookingForm
                formData={formData}
                setFormData={setFormData}
                availableTimes={availableTimes}
                dispatch={dispatch}
                submitForm={submitForm}
            />
        </>
    )
}

export default BookingPage