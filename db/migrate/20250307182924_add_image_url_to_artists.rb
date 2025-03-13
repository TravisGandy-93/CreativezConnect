class AddImageUrlToArtists < ActiveRecord::Migration[8.0]
  def change
    add_column :artists, :image_url, :string
  end
end
