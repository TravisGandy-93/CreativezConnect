module HomeHelper
  def home_page_props
    {
      user: {
        username: current_user.username,
        userId: current_user.id,
        # userImage: current_user.image,
        userEmail: current_user.email,
        # userBio: current_user.bio,
        # userLocation: current_user.location
        favoriteArtists: current_user.liked_artists
      },
      photo_uploads: current_user.artists.map { |artist|
      artist.photos if artist.art_form != "musician"}.compact.flatten,
      liked_photos: current_user.likes.map { |pic|
      pic.likeable if pic.likeable_type == "Photo" }.compact,
      audio_uploads: current_user.artists.map { |artist|
      artist.albums if artist.art_form == "musician"}.compact.flatten
    }
  end
end
