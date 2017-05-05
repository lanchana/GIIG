class Api::SkillsController < ApplicationController
  # GET /api/skills
  def index
    @skills = Skill.all
    # binding.pry
    render json: @skills
  end
end
