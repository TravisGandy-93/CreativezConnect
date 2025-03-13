class RemoveLikesFromPosts < ActiveRecord::Migration[8.0]
  def change
    remove_column :posts, :likes
  end
end
