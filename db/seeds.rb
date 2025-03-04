# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
User.destroy_all

20.times do |i|
 User.create!(
  username: "testuser#{i}",
  email: "test_user#{i}_email@gmail.com",
  password: "password#{i}"
  #bio: "This is a test user.",
  #location: "Test City, Test Country",
  #image: "https://example.com/test_user_image.jpg"
)
end