class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :post
  belongs_to :photo
  belongs_to :video
  belongs_to :album
  belongs_to :track
  has_many :likes, as: :likeable, dependent: :destroy
  has_many :liked_by_users, through: :likes, source: :user
end
