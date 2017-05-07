class Api::SkillsController < ApplicationController
  # GET /api/skills
  def index
    @skills = Skill.all
    # binding.pry
    render json: @skills
  end

  def create
    # binding.pry
    @skill = Skill.new(skill_params)
    if @skill.save
      render json: @skill, status: :created
    else
      render json: @skill.errors, status: :unprocessable_entity
    end
    # binding.pry
  end

  def update
    @skill = current_user.skills.find(params[:id])

    if @skill.update(skill_params)
      render json: @skill, status: :ok
    else
      render json: @skill.errors, status: :unprocessable_entity
    end

  end

  def destroy
    @skill = current_user.skills.find(params[:id])
    # binding.pry
    @skill.destroy

    render json: '', status: :no_content
  end



  private
  def skill_params
    params.require(:skill)
          .permit(:position_type, :rating)
          .merge(user_id: current_user.id)
  end
end
