class CreateMessages < ActiveRecord::Migration[6.0]
  def change
    create_table :messages do |t|
      t.text :note

      t.timestamps
    end
  end
end
