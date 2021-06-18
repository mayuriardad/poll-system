class PollsController < ApplicationController
  def create
    @poll = Poll.new(poll_params)
    if @poll.save
      render json: @poll
    else
      render error: {error: 'unable to create a poll'}
    end
  end
    
  def show
    @poll = Poll.find(params[:id])
    render json: @poll
  end

  private
  def poll_params
    params.permit(:task_id, :user_id)
  end
end
