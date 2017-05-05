class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
    has_many :skills, dependent: :destroy
    has_many :jobs
    # make sure this is working
    has_many :jobs, through: :locations


    devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

end
