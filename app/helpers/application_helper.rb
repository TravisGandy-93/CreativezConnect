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
      }
    }
  end
end
