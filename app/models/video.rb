class Video < ApplicationRecord
  belongs_to :album, optional: true
  # Optional because a video may not belong to an album
  belongs_to :artist
  belongs_to :track, optional: true
  # Optional because a video may not belong to a track
  has_many :comments, dependent: :destroy
  has_many :likes, dependent: :destroy
  validates :title, presence: true
  validates :url, presence: true
end
