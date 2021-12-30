class Api::ReservationsController < ApplicationController
  def create 
    @reservation = Reservation.create!(reservation_params)
    if @reservation.save
        render :show
    else
      render json @reservation.errors.full_messages, status: 422
    end
  end

  def destroy
    @reservation = Reservation.find(params[:id])
    @reservation.destroy
  end

  def show 
    @reservation = Reservation.find_by(id: params[:id])
  end

  def update
    @reservation = Reservation.find_by(id: params[:id])
    
    if @reservation.update(reservation_params)
      render :show
    else
      render json: @reservation.errors.full_messages, status: 422
    end
  end

  private 
  def reservation_params 
      params.require(:reservation).permit(:start_date, :end_date, :listing_id, :guest_id, :total_price, :num_of_guests)
  end
end
