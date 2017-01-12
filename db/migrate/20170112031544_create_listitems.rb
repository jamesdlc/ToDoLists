class CreateListitems < ActiveRecord::Migration[5.0]
  def change
    create_table :listitems do |t|
      t.string :task
      t.references :todolist, foreign_key: true

      t.timestamps
    end
  end
end
