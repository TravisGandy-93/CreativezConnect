class AlbumsController < ApplicationController
  def create
    @album = Album.new(album_params)

    if @album.save
      render json: @album, status: :created
    else
      render json: @album.errors, status: :unprocessable_entity
    end
  end

  def show
    @album = Album.find(params[:id])
  end

  private

  def album_params
    params.require(:album).permit(
      :title,
      :description,
      :release_date,
      :genre,
      :cover,
      :artist_id,
      :user_id
      )
  end
end
