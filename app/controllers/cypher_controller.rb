class CypherController < ApplicationController
  protect_from_forgery with: :null_session
  def index
    @posts = Post.left_joins(:likes)
    .joins(:user)
    .select('posts.*, users.username, COUNT(likes.id) as likes_count')
    .group('posts.id, users.username')
    .order(created_at: :desc)
    #render json: @posts
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      @cypher_post = Post.joins(:user)
      .select('posts.*, users.username')
      .find(@post.id)
      render json: @cypher_post, status: :created
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end
  
  def update
    @post = Post.find(post_params)

    if @post.save
      @cypher_post = Post.joins(:user)
      .select('posts.*, users.username')
      .find(@post.id)
      render json: @cypher_post, status: :created
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  private

  def post_params
    params.require(:post).permit(:content, :user_id)
  end
end