class Room < ApplicationRecord
  has_many :categories, dependent: :destroy
end
