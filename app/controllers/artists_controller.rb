class ArtistsController < ApplicationController
  def musician_index
  end
  
  def cinematographer_index
  end

  def show
    @artist = Artist.find(params[:id])
  end

  def create
    @artist = Artist.new(artist_params)
    if @artist.save
      render json: @artist, status: :created
    else
      render json: @artist.errors, status: :unprocessable_entity
    end
  end
  
  def update
    @artist = Artist.find(params[:id])

    if @artist.update(artist_params)
      render json: @artist, status: :successful
    else
      render json: @artist.errors, status: :unprocessable_entity
    end
  end

  private

  def artist_params
    params.require(:artist).permit(:name, :art_form, :genre, :bio, :image_url, :user_id)
  end
end
