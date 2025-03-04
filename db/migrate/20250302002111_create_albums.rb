class CreateAlbums < ActiveRecord::Migration[8.0]
  def change
    create_table :albums do |t|
      t.string :title, null: false
      t.string :description
      t.string :release_date
      t.string :genre
      t.references :artist, null: false, foreign_key: true

      t.timestamps
    end
  end
end
