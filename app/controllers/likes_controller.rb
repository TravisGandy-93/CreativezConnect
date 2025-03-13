class LikesController < ApplicationController
  protect_from_forgery

  def create
    likeable = find_likeable
    like = likeable.likes.new(user: current_user)

    if like.save
      render json: likeable.likes.count, status: :created
    else
      render json: { error: like.errors.full_messages.to_sentence }, status: :unprocessable_entity
    end
  end

  private

  def find_likeable
    puts "likeable: #{params}"
    # Finding likeable object by type and ID
    params.each do |name, value|
      puts "name: #{name}, value: #{value}"
      if name =~ /(.+)_id$/
        puts "id type name: #{name}"
        return $1.classify.constantize.find(value)
      end
    end
    nil
  end
end
