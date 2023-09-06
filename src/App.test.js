import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './components/functionalComponents/BookingForm';

const mockAvailableTimes = ['17:00', '18:00', '19:00', '20:00'];

const mockSetFormData = jest.fn();

const mockFormData = {
  date: '',
  time: '',
  numberGuests: '',
  occasion: '',
};

describe('BookingForm Component', () => {
  test('Renders the BookingForm heading', () => {
    render(<BookingForm formData={mockFormData} setFormData={mockSetFormData} availableTimes={mockAvailableTimes} />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
  });

  test('Form elements render correctly', () => {
    render(<BookingForm formData={mockFormData} setFormData={mockSetFormData} availableTimes={mockAvailableTimes} />);

    expect(screen.getByLabelText('Choose date')).toBeInTheDocument();
    expect(screen.getByLabelText('Choose time')).toBeInTheDocument();
    expect(screen.getByLabelText('Number of guests')).toBeInTheDocument();
    expect(screen.getByLabelText('Occasion')).toBeInTheDocument();
    expect(screen.getByText('Make Your reservation')).toBeInTheDocument();
  });

  test('Form data updates correctly on input change', () => {
    render(<BookingForm formData={mockFormData} setFormData={mockSetFormData} availableTimes={mockAvailableTimes} />);

    fireEvent.change(screen.getByLabelText('Choose date'), { target: { value: '2023-09-15' } });
    fireEvent.change(screen.getByLabelText('Choose time'), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText('Number of guests'), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText('Occasion'), { target: { value: 'Anniversary' } });

    expect(mockSetFormData).toHaveBeenCalledTimes(4);
    expect(mockSetFormData).toHaveBeenCalledWith({
      date: '2023-09-15',
      time: '18:00',
      numberGuests: '4',
      occasion: 'Anniversary',
    });
  });

});
