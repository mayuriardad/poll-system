class AddVotesTable < ActiveRecord::Migration[6.1]
  def change
    create_table :votes do |t|
      t.references :users, foreign_key: true
      t.references :polls, foreign_key: true
      t.integer :estimate
      t.timestamps
    end
  end
end
