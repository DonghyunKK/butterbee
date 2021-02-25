class AddPositionToCakes < ActiveRecord::Migration[6.0]
  def change
    add_column :cakes, :position, :integer
  end
end
