class CreateVideos < ActiveRecord::Migration[8.0]
  def change
    create_table :videos do |t|
      t.string :title, null: false
      t.string :description
      t.string :url
      t.string :genre
      t.integer :likes, default: 0
      t.references :album, null: true, foreign_key: true
      t.references :artist, null: false, foreign_key: true
      t.references :track, null: true, foreign_key: true

      t.timestamps
    end
  end
end
