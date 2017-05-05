class Api::SkillsController < ApplicationController
  # GET /api/notes
  def index
    @skills = Skill.all

    render json: @skills
  end
end
