class MakeLikesPolymorphic < ActiveRecord::Migration[8.0]
  def change
    remove_reference :likes, :post, index: true, foreign_key: true
    add_reference :likes, :likeable, polymorphic: true, null: false

    # Optional: Add index for efficient look-up
    add_index :likes, [ :user_id, :likeable_id, :likeable_type ], unique: true, name: 'index_likes_on_user_and_likeable'
  end
end
