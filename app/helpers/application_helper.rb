module ApplicationHelper

  def home_page_props
    {
      user: {
        username: current_user.username,
        userId: current_user.id,
        #userImage: current_user.image,
        userEmail: current_user.email,
        #userBio: current_user.bio,
        #userLocation: current_user.location
        favoriteArtists: current_user.liked_artists
      }
    }
  end

  def cypher_page_props(posts)
      home_page_props
  end

  def artist_page_props
    {
      artists: Artist.all.map do |artist|
        artist.attributes.merge('favorited_by' => Like.where(
            likeable_id: artist.id, 
            likeable_type: 'Artist'
            ).map {|like| like.user.id}
          )
        end,
      user: {
        username: current_user.username,
        userId: current_user.id,
        #userImage: current_user.image,
        userEmail: current_user.email,
        #userBio: current_user.bio,
        #userLocation: current_user.location
      }
    }
  end

  def artist_show_props(artist)
    {
      artist: artist,
      user: {
        username: current_user.username,
        userId: current_user.id,
        #userImage: current_user.image,
        userEmail: current_user.email,
        #userBio: current_user.bio,
        #userLocation: current_user.location
      }
    }
    
  end
end
