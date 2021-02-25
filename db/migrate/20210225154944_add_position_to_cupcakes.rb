class AddPositionToCupcakes < ActiveRecord::Migration[6.0]
  def change
    add_column :cupcakes, :position, :integer
  end
end
