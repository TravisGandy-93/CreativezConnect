class AddUserIdToArtists < ActiveRecord::Migration[8.0]
  def change
    add_column :artists, :user_id, :integer
    # The above line adds a new column 'user_id' of type integer to the 'artists' table.
    # This is necessary to establish a relationship between artists and users.
  end
end
