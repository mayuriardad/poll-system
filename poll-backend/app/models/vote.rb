class Vote < ApplicationRecord
  after_commit :broadcast

  def broadcast
    ActionCable.server.broadcast("poll_#{polls_id}", {votes: Vote.where(polls_id: self.polls_id)})
  end
end
