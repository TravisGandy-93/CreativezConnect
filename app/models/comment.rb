class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :post
  belongs_to :photo
  belongs_to :video
  belongs_to :album
  belongs_to :track
end
