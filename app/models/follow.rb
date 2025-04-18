class Follow < ApplicationRecord
  # Follow model to represent the relationship between users
  belongs_to :follower, class_name: 'User'
  belongs_to :followed, class_name: 'User'

  # Validations to ensure a user cannot follow themselves
  validates :follower_id, uniqueness: { scope: :followed_id }
  validate :cannot_follow_self

  def cannot_follow_self
    if follower_id == followed_id
      errors.add(:follower_id, "can't follow themselves")
    end
  end
end
