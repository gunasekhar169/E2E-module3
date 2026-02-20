import React, { useState, useEffect } from 'react';

function BookingHistory() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('bookings') || '[]');
    setBookings(stored);
  }, []);

  const updateStatus = (index, status) => {
    const updated = [...bookings];
    updated[index].status = status;
    setBookings(updated);
    localStorage.setItem('bookings', JSON.stringify(updated));
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center', margin: '2rem 0' }}>My Bookings</h1>
      
      {bookings.length === 0 ? (
        <div className="card" style={{ textAlign: 'center' }}>
          <p>No bookings yet</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gap: '1rem' }}>
          {bookings.map((booking, index) => (
            <div key={index} className="card">
              <h3>Booking #{index + 1}</h3>
              <p><strong>Date:</strong> {booking.date}</p>
              <p><strong>Time:</strong> {booking.time}</p>
              <p><strong>Description:</strong> {booking.description}</p>
              <p><strong>Status:</strong> <span style={{ 
                color: booking.status === 'Accepted' ? 'green' : booking.status === 'Rejected' ? 'red' : 'orange' 
              }}>{booking.status}</span></p>
              
              {booking.status === 'Pending' && (
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                  <button className="btn btn-primary" onClick={() => updateStatus(index, 'Accepted')}>Accept</button>
                  <button className="btn" style={{ background: '#ef4444' }} onClick={() => updateStatus(index, 'Rejected')}>Reject</button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BookingHistory;
