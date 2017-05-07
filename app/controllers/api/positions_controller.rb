class Api::PositionsController < ApplicationController
    def index
        @positions = Position.all
        render json: @positions
    end

    def show
        @position = Position.find(params[:id])
        render json: @position
    end

    def create
        @position = Position.new(position_params)

        if @position.save
            render json: @position, staus: :created
        else
            render json: @position.errors, status: :unprocessable_entity
        end
    end

    def update
        @position = Position.find(params[:id])

        if @position.update(position_params)
            # binding.pry
            render json: @position, status: :ok
        else
            render json: @position.errors, status: :unprocessable_entity
        end
    end

    def destroy
        @position = Position.find(params[:id])

        @position.destroy

        render json: '', status: :no_content
    end



    private
    def position_params
        params.require(:position)
              .permit(:name, :description, :qualification)
    end

end
