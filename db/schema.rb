# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.0].define(version: 2025_03_25_220902) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pg_catalog.plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum"
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "album_collections", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "album_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["album_id"], name: "index_album_collections_on_album_id"
    t.index ["user_id"], name: "index_album_collections_on_user_id"
  end

  create_table "albums", force: :cascade do |t|
    t.string "title", null: false
    t.string "description"
    t.string "release_date"
    t.string "genre"
    t.bigint "artist_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
    t.string "cover"
    t.index ["artist_id"], name: "index_albums_on_artist_id"
  end

  create_table "artists", force: :cascade do |t|
    t.string "name", null: false
    t.string "bio"
    t.string "genre"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
    t.string "image_url"
    t.string "art_form"
  end

  create_table "comments", force: :cascade do |t|
    t.string "content"
    t.integer "likes", default: 0
    t.bigint "user_id", null: false
    t.bigint "post_id", null: false
    t.bigint "photo_id", null: false
    t.bigint "video_id", null: false
    t.bigint "album_id", null: false
    t.bigint "track_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["album_id"], name: "index_comments_on_album_id"
    t.index ["photo_id"], name: "index_comments_on_photo_id"
    t.index ["post_id"], name: "index_comments_on_post_id"
    t.index ["track_id"], name: "index_comments_on_track_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
    t.index ["video_id"], name: "index_comments_on_video_id"
  end

  create_table "likes", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "likeable_type", null: false
    t.bigint "likeable_id", null: false
    t.index ["likeable_type", "likeable_id"], name: "index_likes_on_likeable"
    t.index ["user_id", "likeable_id", "likeable_type"], name: "index_likes_on_user_and_likeable", unique: true
    t.index ["user_id"], name: "index_likes_on_user_id"
  end

  create_table "photos", force: :cascade do |t|
    t.string "title", null: false
    t.string "description"
    t.string "url"
    t.string "genre"
    t.integer "likes", default: 0
    t.bigint "album_id"
    t.bigint "artist_id", null: false
    t.bigint "track_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["album_id"], name: "index_photos_on_album_id"
    t.index ["artist_id"], name: "index_photos_on_artist_id"
    t.index ["track_id"], name: "index_photos_on_track_id"
  end

  create_table "posts", force: :cascade do |t|
    t.string "title"
    t.string "content"
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_posts_on_user_id"
  end

  create_table "tracks", force: :cascade do |t|
    t.string "title", null: false
    t.string "length"
    t.string "genre"
    t.bigint "album_id"
    t.bigint "artist_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["album_id"], name: "index_tracks_on_album_id"
    t.index ["artist_id"], name: "index_tracks_on_artist_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "videos", force: :cascade do |t|
    t.string "title", null: false
    t.string "description"
    t.string "url"
    t.string "genre"
    t.integer "likes", default: 0
    t.bigint "album_id"
    t.bigint "artist_id", null: false
    t.bigint "track_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["album_id"], name: "index_videos_on_album_id"
    t.index ["artist_id"], name: "index_videos_on_artist_id"
    t.index ["track_id"], name: "index_videos_on_track_id"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "album_collections", "albums"
  add_foreign_key "album_collections", "users"
  add_foreign_key "albums", "artists"
  add_foreign_key "comments", "albums"
  add_foreign_key "comments", "photos"
  add_foreign_key "comments", "posts"
  add_foreign_key "comments", "tracks"
  add_foreign_key "comments", "users"
  add_foreign_key "comments", "videos"
  add_foreign_key "likes", "users"
  add_foreign_key "photos", "albums"
  add_foreign_key "photos", "artists"
  add_foreign_key "photos", "tracks"
  add_foreign_key "posts", "users"
  add_foreign_key "tracks", "albums"
  add_foreign_key "tracks", "artists"
  add_foreign_key "videos", "albums"
  add_foreign_key "videos", "artists"
  add_foreign_key "videos", "tracks"
end
