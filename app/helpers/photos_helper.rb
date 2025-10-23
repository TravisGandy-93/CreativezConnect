module PhotosHelper
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
