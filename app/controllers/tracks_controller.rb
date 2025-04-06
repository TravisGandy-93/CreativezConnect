class TracksController < ApplicationController
  def create
    @album = Album.find(params[:album_id])
    @track = @album.tracks.new(track_params)
    
    @track.audio_file.attach(io: track_params[:audio_file].tempfile, # Assuming track_params[:audio_file] is from a file field in params.
    filename: track_params[:audio_file].original_filename,
    content_type: track_params[:audio_file].content_type)

    if @track.save
      render json: @track, status: :created
    else
      render json: @track.errors, status: :unprocessable_entity
    end
  end

  private

  def track_params
    params.require(:track).permit(
      :title,
      :audio_file,
      :length,
      :genre,
      :artist_id
    )
  end
end
