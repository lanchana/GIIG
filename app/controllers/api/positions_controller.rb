class Api::PositionsController < ApplicationController
    def index
        @positions = Position.all
        render json: @positions
    end

    def create
        @position = Position.new(position_params)

        if @position.save
            render json: @position, staus: :created
        else
            render json: @position.errors, status: :unprocessable_entity
        end
    end



    private
    def position_params
        params.require(:position)
              .permit(:name, :descripton, :qualification)
    end

end
