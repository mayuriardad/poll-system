class AddIsActiveToPoll < ActiveRecord::Migration[6.1]
  def change
    add_column :polls, :is_active, :boolean, default: false
  end
end
