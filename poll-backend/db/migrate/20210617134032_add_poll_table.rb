class AddPollTable < ActiveRecord::Migration[6.1]
  def change
    create_table :polls do |t|
      t.references :users, foreign_key: true
      t.references :tasks, foreign_key: true
      t.timestamps
    end
  end
end
