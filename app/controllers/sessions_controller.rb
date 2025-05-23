class SessionsController < ApplicationController
  skip_before_action :require_login, only: [ :new, :create ]
  skip_before_action :verify_authenticity_token, only: [ :create ]

  def new
    @user = User.new
  end

  def create
    @user = User.find_by(email: params[:email])
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      redirect_to root_path, notice: "Logged in successfully."
    else
      flash.now[:alert] = "Invalid email or password."
      render :new
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path, notice: "Logged out successfully."
  end
end
