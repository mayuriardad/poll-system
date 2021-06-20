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

  def finishPoll
    @poll = Poll.find(params[:id])
    if @poll
      @poll.update(poll_params)
      render json: @poll
    else
      render json: {error: 'unable to finish poll, please try again later'}, status: 400
    end
  end

  private
  def poll_params
    params.permit(:tasks_id, :users_id, :is_active)
  end
end
