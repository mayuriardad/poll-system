class PollChannel < ApplicationCable::Channel
  def subscribed
    stream_from "poll_#{params[:polls_id]}"
  end
end