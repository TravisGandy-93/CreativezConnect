class RenameHashedPasswordToPasswordDigest < ActiveRecord::Migration[8.0]
  def change
    rename_column :users, :hashed_password, :password_digest
    # The above line renames the column 'hashed_password' to 'password_digest'
    # in the 'users' table.
    # This is necessary because the 'has_secure_password' method in Rails
  end
end
