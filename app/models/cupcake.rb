class Cupcake < ApplicationRecord
  belongs_to :user
  validates :name, presence: true
  validates :item_code, presence: true, uniqueness: true
  has_many_attached :photos
  acts_as_list
end
