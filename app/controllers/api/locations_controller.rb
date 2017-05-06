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

  def destroy
    @location = current_user.locations.find(params[:id])
    @location.destroy

    render json: '', status: :no_content
  end

  private
  def location_params
    params.require(:location)
          .permit()
          .merge()
  end
end
