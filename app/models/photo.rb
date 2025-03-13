class Photo < ApplicationRecord
  belongs_to :album, optional: true
  # Optional because a photo may not belong to an album
  belongs_to :artist
  belongs_to :track, optional: true
  # Optional because a photo may not belong to a track
  has_many :comments, dependent: :destroy
  has_many :likes, as: :likeable, dependent: :destroy
  has_many :liked_by_users, through: :likes, source: :user
  
  validates :title, presence: true
  validates :url, presence: true
  # Validates that the URL is a valid format
  validates :url, format: { with: URI::regexp(%w[http https]), message: 'must be a valid URL' }
end
