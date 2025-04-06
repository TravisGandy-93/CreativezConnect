module ApplicationHelper
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
  
  def user_profile_props(user)
    #binding.pry
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

  def cypher_page_props(posts)
      home_page_props
  end

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

  def gallery_index_props
    {
      photos: Photo.all.map do |photo|
        photo.attributes.merge("favorited_by" => Like.where(
            likeable_id: photo.id,
            likeable_type: "Photo"
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

  def album_show_props(album)
    {
      album: {
        title: album.title,
        description: album.description,
        release_date: album.release_date,
        genre: album.genre,
        cover: album.cover,
        tracks: album.tracks
      },
      artist: Artist.find(album.artist_id),
      user: User.find(album.user_id)
    }
  end

  def photo_show_props(photo)
    {
      photo: photo,
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
