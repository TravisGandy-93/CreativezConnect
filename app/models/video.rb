class Video < ApplicationRecord
  belongs_to :album, optional: true
  # Optional because a video may not belong to an album
  belongs_to :artist
  belongs_to :track, optional: true
  # Optional because a video may not belong to a track
  has_many :comments, dependent: :destroy
  has_many :likes, as: :likeable, dependent: :destroy
  has_many :liked_by_users, through: :likes, source: :user
  validates :title, presence: true
  validates :url, presence: true
end
