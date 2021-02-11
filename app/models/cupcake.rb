class Cupcake < ApplicationRecord
  belongs_to :user
  validates :name, presence: true
  validates :item_code, presence: true, uniqueness: true
end
