class Api::BookingsController < ApplicationController
  
  def show
    @booking = Booking.find(params[:id])
  end

  def index
    @bookings = Booking.where(campsite_id: params[:campsite_id])
    render :index
  end

  def bookings_by_user
    @bookings = Booking.where(camper_id: params[:camper_id])
    render :index
  end

  def create
    @booking = Booking.new(booking_params)
    @booking.camper = current_user
    @booking.campsite_id = params[:campsite_id]

    if @booking.save
      render 'api/bookings/show'
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def update
    @booking = Booking.find(params[:id])

    if @booking.update(booking_params)
      render 'api/bookings/show'
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def destroy
    @booking = Booking.find(params[:id])
    @booking.destroy
    render 'api/bookings/show'
  end

  private

  def booking_params
    params.require(:booking).permit(:arrival_date, :depart_date, :num_campers)
  end

end
