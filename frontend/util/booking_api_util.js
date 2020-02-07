export const fetchBookings = () => (
  $.ajax({
    method: 'GET',
    url: 'api/bookings'
  })
);

export const createBooking = (booking, campsiteId) => {
  return (
    $.ajax({
      method: 'POST',
      url: `api/campsites/${campsiteId}/bookings`,
      data: { booking }
    })
  );
};

export const editBooking = (booking) => (
  $.ajax({
    method: 'PATCH',
    url: `api/bookings/${booking.id}`,
    data: {
      booking:
      {
        arrival_date: booking.arrival_date,
        depart_date: booking.depart_date,
        num_campers: booking.num_campers
      }
    }
  })
);

export const deleteBooking = (bookingId) => {
  return (
    $.ajax({
      method: 'DELETE',
      url: `api/bookings/${bookingId}`,
    })
  );
};

export const fetchBookingsForCampsite = (campsiteId) => {
  return (
    $.ajax({
      method: 'GET',
      url: `api/campsites/${campsiteId}/bookings`
    })
  );
};

export const fetchBookingsForUser= (camperId) => {
  return (
    $.ajax({
      method: 'GET',
      url: `api/user/${camperId}/bookings`
    })
  );
};

