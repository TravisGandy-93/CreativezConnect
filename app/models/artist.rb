class Artist < ApplicationRecord
    belongs_to :user

    has_many :likes, as: :likeable, dependent: :destroy
    has_many :liked_by_users, through: :likes, source: :user

    has_many :albums, dependent: :destroy
    has_many :photos, dependent: :destroy
    has_many :tracks, dependent: :destroy
    validates :name, presence: true
    # Validates that the name is present and not empty
    validates :name, uniqueness: true
  # Validates that the name is unique across all artists
end
