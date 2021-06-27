class VotesController < ApplicationController
  def vote
    @vote = Vote.new(vote_params)
    if @vote.save
      render json: @vote
    else
      render error: {error: 'unable to vote'}, status: 400
    end
  end

  private
  def vote_params
    params.permit(:users_id, :polls_id, :estimate)
  end
end
