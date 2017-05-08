class Api::LocationsController < ApplicationController
  # GET /api/locations
  def index
    @locations = Location.all
    
    render json: @locations
  end

  def create
    @location = Location.new(location_params)
    if @location.save
      render json: @location, status: :created
    else
      render json: @location.errors, status: :unprocessable_entity
    end
  end

  def show
    @location = Location.find(params[:id])

    render json: @location
  end

  def update
    @location = Location.find(params[:id])
    if @location.update(location_params)
        render json: @location, status: :ok
    else
        render json: @location.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @location = Location.find(params[:id])
    @location.destroy
    render json: '', status: :no_content
  end

  private

  def location_params
    params.require(:location)
          .permit(:name, :business_type, :address, :city, :state, :zipcode, :description, :phone_num)
          .merge(user_id: current_user.id)
  end
end
