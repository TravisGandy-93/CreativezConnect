module Api
  module V1
    class PostsController < ApplicationController
      protect_from_forgery with: :null_session
      def index
        @posts = Post.joins(:user).select('posts.*, users.username').order(created_at: :desc)
        render json: @posts
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
  end
end