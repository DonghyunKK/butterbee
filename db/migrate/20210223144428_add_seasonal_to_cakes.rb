class AddSeasonalToCakes < ActiveRecord::Migration[6.0]
  def change
    add_column :cakes, :seasonal, :boolean, :default => false
  end
end
