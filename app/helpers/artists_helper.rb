module ArtistsHelper
  def musician_page_props
    artists = Artist.all.where(art_form: [ "musician", "Musician" ])
    {
      artists: artists.map do |artist|
        artist.attributes.merge("favorited_by" => Like.where(
            likeable_id: artist.id,
            likeable_type: "Artist"
            ).map { |like| like.user.id }
          )
        end,
      user: {
        username: current_user.username,
        userId: current_user.id,
        # userImage: current_user.image,
        userEmail: current_user.email
        # userBio: current_user.bio,
        # userLocation: current_user.location
      }
    }
  end

  def cinematographer_page_props
    artists = Artist.all.where(art_form: [ "photographer", "Photographer", "Cinematographer" ])
    {
      artists: artists.map do |artist|
        artist.attributes.merge("favorited_by" => Like.where(
            likeable_id: artist.id,
            likeable_type: "Artist"
            ).map { |like| like.user.id }
          )
        end,
      user: {
        username: current_user.username,
        userId: current_user.id,
        # userImage: current_user.image,
        userEmail: current_user.email
        # userBio: current_user.bio,
        # userLocation: current_user.location
      }
    }
  end

  def artist_show_props(artist)
    albums = Album.all.where(artist_id: artist.id)
    {
      artist: artist,
      albums: albums.map do |album|
        album.attributes.merge("favorited_by" => Like.where(
          likeable_id: album.id,
          likeable_type: "Album"
          ).map { |like| like.user.id }
          )
        end,
      user: {
        username: current_user.username,
        userId: current_user.id,
        # userImage: current_user.image,
        userEmail: current_user.email
        # userBio: current_user.bio,
        # userLocation: current_user.location
      }
    }
  end
end
