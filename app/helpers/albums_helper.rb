module AlbumsHelper
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
end
