class Track < ApplicationRecord
  include ActiveModel::Model

  belongs_to :album, optional: true
  # Optional because a track may not belong to an album
  belongs_to :artist

  has_many :photos, dependent: :destroy
  has_many :videos
  has_many :comments, dependent: :destroy
  has_many :likes, as: :likeable, dependent: :destroy
  has_many :liked_by_users, through: :likes, source: :user

  has_one_attached :audio_file
  #validates :audio_file, attached: true

  validates :title, presence: true
  validates :length, presence: true
end
