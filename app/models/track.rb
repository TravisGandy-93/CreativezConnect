class Track < ApplicationRecord
  belongs_to :album, optional: true
  # Optional because a track may not belong to an album
  belongs_to :artist

  has_many :photos, dependent: :destroy
  has_many :videos
  has_many :comments, dependent: :destroy
  has_many :likes, as: :likeable, dependent: :destroy
  has_many :liked_by_users, through: :likes, source: :user

  validates :title, presence: true
  validates :length, presence: true
end
