class AddTaskTable < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :name
      t.string :description
      t.integer :estimate
      t.timestamps
    end
  end
end
