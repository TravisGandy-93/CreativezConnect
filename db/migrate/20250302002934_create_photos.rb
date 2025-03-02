class CreatePhotos < ActiveRecord::Migration[8.0]
  def change
    create_table :photos do |t|
      t.string :title, null: false
      t.string :description
      t.string :url
      t.string :genre
      t.integer :likes, default: 0
      t.references :album_id, null: true, foreign_key: true
      t.references :artist_id, null: false, foreign_key: true
      t.references :track_id, null: true, foreign_key: true

      t.timestamps
    end
  end
end
