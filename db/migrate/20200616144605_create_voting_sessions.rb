class CreateVotingSessions < ActiveRecord::Migration[6.0]
  def change
    create_table :voting_sessions do |t|

      t.timestamps
    end
  end
end
