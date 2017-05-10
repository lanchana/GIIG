class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
    has_many :skills, dependent: :destroy
    has_many :jobs
    # make sure this is working
    has_many :jobs, through: :locations


    devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :omniauthable, :omniauth_providers => [:facebook]

  def self.from_omniauth(auth)
      where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
        user.provider = auth.provider
        user.uid = auth.uid
        user.full_name = auth.info.name
        user.email = auth.info.email
        user.avatar = auth.info.image
        user.password = Devise.friendly_token[0,20]
      end
  end

   has_attached_file :avatar
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/

end
