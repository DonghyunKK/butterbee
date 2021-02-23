class AddSeasonalToCupcakes < ActiveRecord::Migration[6.0]
  def change
    add_column :cupcakes, :seasonal, :boolean, :default => false
  end
end
