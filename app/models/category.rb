class Category < ApplicationRecord
  belongs_to :room
  has_many :products, dependent: :destroy
end
