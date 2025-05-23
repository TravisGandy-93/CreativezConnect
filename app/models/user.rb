class User < ApplicationRecord
    has_secure_password

    has_many :photos
    has_many :posts, dependent: :destroy
    has_many :videos
    has_many :tracks
    has_many :albums
    has_many :comments
    has_many :album_collections, dependent: :nullify
    # The album_collections table is a join table between users and albums
    has_many :albums, through: :album_collections
    has_many :artists
    has_many :likes, dependent: :destroy
    has_many :liked_posts, through: :likes, source: :likeable, source_type: "Post"
    has_many :liked_photos, through: :likes, source: :likeable, source_type: "Photo"
    has_many :liked_artists, through: :likes, source: :likeable, source_type: "Artist"

    has_many :active_follows, class_name: "Follow", foreign_key: "follower_id", dependent: :destroy
    has_many :passive_follows, class_name: "Follow", foreign_key: "followed_id", dependent: :destroy
    has_many :following, through: :active_follows, source: :followed
    has_many :followers, through: :passive_follows, source: :follower
    has_one :profile
    # Validates that the email is present and not empty
    validates :email, presence: true
    validates :username, presence: true
    # Validates that the email is unique across all users
    validates :email, uniqueness: true
    validates :username, uniqueness: true
end
