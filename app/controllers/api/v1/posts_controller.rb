module Api
  module V1
    class PostsController < ApplicationController
      protect_from_forgery with: :null_session

      def index
        page = params[:page] || 1
        limit = params[:limit] || 10

        # Fetch the posts with pagination
        @posts_page = Post.page(page).per(limit)

        @posts = @posts_page.left_joins(:likes)
        .joins(:user)
        .select("posts.*, users.username")
        .group("posts.id, users.username")
        .order(created_at: :desc)

        render json: {
          current_page: @posts.current_page,
          total_pages: @posts.total_pages,
          total_posts: @posts.total_count,
          posts: @posts.map do |post|
            post.attributes.merge("likes_count" => Like.where(likeable_id: post.id).count)
          end
        }
      end

      def create
        @post = Post.new(post_params)

        if @post.save
          @cypher_post = Post.joins(:user)
          .select("posts.*, users.username")
          .find(@post.id)
          render json: @cypher_post, status: :created
        else
          render json: @post.errors, status: :unprocessable_entity
        end
      end
      
      def update
        @post = Post.find(post_params)
        @post.update(post_params)

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
        params.require(:post).permit(:content, :likes, :user_id)
      end
    end
  end
end