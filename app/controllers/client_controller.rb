class ClientController < ApplicationController
  protect_from_forgery with: :exception
  before_action :authenticate_user!

    layout false

    def index

    end
end
