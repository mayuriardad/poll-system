class VotesController < ApplicationController
  def vote
    @vote = Vote.new(vote_params)
    if @vote.save
      render json: @vote
    else
      render error: {error: 'unable to vote'}, status: 400
    end
  end

  def index
    votes = Vote.broadcast_data(index_params[:polls_id])
    render json: votes
  end

  private
  def index_params
    params.require(:polls_id)
    params.permit(:polls_id)
  end
  def vote_params
    params.permit(:users_id, :polls_id, :estimate)
  end
end
