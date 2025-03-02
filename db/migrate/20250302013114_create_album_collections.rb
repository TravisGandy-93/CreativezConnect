class CreateAlbumCollections < ActiveRecord::Migration[8.0]
  def change
    create_table :album_collections do |t|
      t.references :user, null: false, foreign_key: true
      t.references :album, null: false, foreign_key: true

      t.timestamps
    end
  end
end
