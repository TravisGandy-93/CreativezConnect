class Like < ApplicationRecord
  belongs_to :user
  belongs_to :likeable, polymorphic: true

  # Validate uniqueness of like per user and likeable object
  validates :user_id, uniqueness: { scope: [ :likeable_id, :likeable_type ], message: "You've already liked this item" }
end
