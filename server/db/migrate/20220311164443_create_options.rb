class CreateOptions < ActiveRecord::Migration[7.0]
  def change
    create_table :options do |t|
      t.string :option
      t.integer :o_point
      t.text :o_text
      t.references :question, null: false, foreign_key: true

      t.timestamps
    end
  end
end
