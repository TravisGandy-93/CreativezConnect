class CreateArtists < ActiveRecord::Migration[8.0]
  def change
    create_table :artists do |t|
      t.string :name, null: false
      t.string :bio
      t.string :genre

      t.timestamps
    end
  end
end
