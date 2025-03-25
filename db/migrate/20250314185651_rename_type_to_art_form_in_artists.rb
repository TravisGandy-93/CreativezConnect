class RenameTypeToArtFormInArtists < ActiveRecord::Migration[8.0]
  def change
    rename_column :artists, :type, :art_form
  end
end
