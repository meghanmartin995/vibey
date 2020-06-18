class Message < ApplicationRecord
  validates :note, :presence => true
end
