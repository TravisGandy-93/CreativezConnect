# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
Post.destroy_all
Photo.destroy_all
Track.destroy_all
Album.destroy_all
Artist.destroy_all
User.destroy_all

20.times do |i|
 User.create!(
  username: "testuser#{i}",
  email: "test_user#{i}_email@gmail.com",
  password: "password#{i}"
  # bio: "This is a test user.",
  # location: "Test City, Test Country",
  # image: "https://example.com/test_user_image.jpg"
)

Post.create!(
  title: "Test Post #{i}",
  content: "This is a test post content for post number #{i}.",
  likes: rand(1..100),
  user_id: User.last.id
)

Artist.create!(
  name: "Test Artist #{i}",
  bio: "This is a test artist bio for artist number #{i}.",
  genre: "rap",
  user_id: User.last.id
)

Album.create!(
  title: "Test Album #{i}",
  description: "This is a test album description for album number #{i}.",
  genre: "Test Genre",
  release_date: Date.today,
  artist_id: Artist.last.id,
  user_id: User.last.id
)

Photo.create!(
  title: "Test Photo #{i}",
  description: "This is a test photo description for photo number #{i}.",
  url: "https://example.com/test_photo_1.jpg",
  genre: "Test Genre",
  likes: rand(1..100),
  album_id: nil,
  artist_id: Artist.last.id,
  track_id: nil
)

Track.create!(
  title: "Test Track #{i}",
  length: "#{rand(1..5)}:#{rand(0..59).to_s.rjust(2, '0')}",
  genre: "Test Genre",
  album_id: nil,
  artist_id: Artist.last.id
)
end
