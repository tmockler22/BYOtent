class Api::CampsitesController < ApplicationController

  def create 
    @campsite = Campsite.new(campsite_params)

    if @campsite.save 
      render 'api/campsites/show'
    else 
      render json: @campsite.errors.full_messages, status: 422
    end
  end

  def index 
    @campsites = Campsite.all 
    render :index 
  end

  def show 
    @campsite = Campsite.find(params[:id])
    render :show
  end

  def campsite_params
    params.require(:campsite).permit(
           :title,
           :description,
           :type,
           :owner_id,
           :max_guests,
           :daily_rate,
           :address,
           :state,
           :zipcode,
           :country, 
           :lat, 
           :lng, 
        )
  end
end
