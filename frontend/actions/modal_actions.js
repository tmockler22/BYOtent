export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_BOOKING_MODAL = 'OPEN_BOOKING_MODAL';

export const openModal = modal => {
  return {
    type: OPEN_MODAL,
    modal
  };
};

export const openBookingModal = (modal, booking) => {
  return {
    type: OPEN_BOOKING_MODAL,
    modal,
    booking
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};
