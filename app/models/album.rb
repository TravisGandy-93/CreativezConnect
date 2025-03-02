class Album < ApplicationRecord
  belongs_to :artist
  belongs_to :user
  has_many :photos, dependent: :destroy
  has_many :tracks, dependent: :destroy
  has_many :videos, dependent: :destroy
  has_many :album_collections, dependent: :destroy
  has_many :users, through: :album_collections
  has_many :comments, dependent: :destroy
  validates :title, presence: true
end
