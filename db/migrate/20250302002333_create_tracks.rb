class CreateTracks < ActiveRecord::Migration[8.0]
  def change
    create_table :tracks do |t|
      t.string :title, null: false
      t.string :length
      t.string :genre
      t.references :album_id, null: true, foreign_key: true
      t.references :artist_id, null: false, foreign_key: true

      t.timestamps
    end
  end
end
