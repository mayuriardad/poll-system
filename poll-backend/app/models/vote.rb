class Vote < ApplicationRecord
  after_commit :broadcast

  def broadcast
    ActionCable.server.broadcast("poll_#{self.polls_id}", Vote.broadcast_data(self.polls_id))
  end

  def self.broadcast_data(polls_id)
    votes = Vote.where(polls_id: polls_id).all().map do |v|
      username = User.find_by_id(v.users_id).username
      {username: username, polls_id: v.polls_id, estimate: v.estimate, users_id: v.users_id}
    end
  end
end
