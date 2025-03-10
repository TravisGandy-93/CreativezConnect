class CreateComments < ActiveRecord::Migration[8.0]
  def change
    create_table :comments do |t|
      t.string :content
      t.integer :likes, default: 0
      t.references :user, null: false, foreign_key: true
      t.references :post, null: false, foreign_key: true
      t.references :photo, null: false, foreign_key: true
      t.references :video, null: false, foreign_key: true
      t.references :album, null: false, foreign_key: true
      t.references :track, null: false, foreign_key: true

      t.timestamps
    end
  end
end
