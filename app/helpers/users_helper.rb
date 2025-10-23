module UsersHelper
  def user_profile_props(user)
    {
      current_user: {
        username: current_user.username,
        userId: current_user.id,
        # userImage: user.image,
        userEmail: current_user.email,
        # userBio: user.bio,
        # userLocation: user.location
        favoriteArtists: current_user.liked_artists
      },
      user: {
        username: user.username,
        userId: user.id,
        # userImage: user.image,
        userEmail: user.email,
        # userBio: user.bio,
        # userLocation: user.location
        posts: user.posts,
        favoriteArtists: user.liked_artists
      },
      photo_uploads: user.artists.map { |artist|
        artist.photos if artist.art_form != "musician"}.compact.flatten,
      liked_photos: user.likes.map { |pic|
        pic.likeable if pic.likeable_type == "Photo" }.compact,
      audio_uploads: user.artists.map { |artist|
        artist.albums.map do |album|
          album.tracks.map do |track|
            {
              id: track.id,
              title: track.title,
              audio_url: track.audio_file # This generates the URL for the file
            }
          end
        end if artist.art_form == "musician"}.compact.flatten
    }
  end

end
