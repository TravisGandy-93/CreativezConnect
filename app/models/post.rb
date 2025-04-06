class Post < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy
  has_many :media, dependent: :destroy
  has_many :likes, as: :likeable, dependent: :destroy
  has_many :liked_by_users, through: :likes, source: :user
end
