class User < ApplicationRecord
    has_secure_password
    
    has_many :photos
    has_many :videos
    has_many :tracks
    has_many :albums
    has_many :comments
    has_many :album_collections, dependent: :destroy
    # The album_collections table is a join table between users and albums
    has_many :albums, through: :album_collections
    has_many :artists
    # Validates that the email is present and not empty
    validates :email, presence: true
    validates :username, presence: true
    # Validates that the email is unique across all users
    validates :email, uniqueness: true
    validates :username, uniqueness: true
end
