class UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user
    else
      render error: { error: 'unable to create user' }, status: 400
    end
  end

  def login
    user = User.find_by(username: params[:username])
    if user.nil?
      if params[:password].present?
        user = User.create(username: params[:username], password: params[:password])
      else
        render json: {error: 'user not found, please sign up'}, status: 400
        return
      end
    end
    is_authenticated = user.authenticate(params[:password])
    if is_authenticated
      render json: user
    else
      render json: {error: 'Wrong username/password. Please try again!'}
    end
  end

  private
  def user_params
    params.permit(:username, :password, :email)
  end
end
