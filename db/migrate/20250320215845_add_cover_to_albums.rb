class AddCoverToAlbums < ActiveRecord::Migration[8.0]
  def change
    add_column :albums, :cover, :string
  end
end
