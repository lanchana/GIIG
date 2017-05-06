class Api::JobsController < ApplicationController
    def index
        @jobs = Job.all
        # binding.pry
        render json: @jobs
    end
end
