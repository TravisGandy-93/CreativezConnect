class UsersController < ApplicationController
def show
  @user = User.find(params[:id])
  # @posts = @user.posts
  # @comments = @user.comments
  # @photos = @user.photos
  # @videos = @user.videos
  # @tracks = @user.tracks
  # @albums = @user.albums
  # @artists = @user.artists
  # @album_collections = @user.album_collections
end
end
