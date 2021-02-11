class CreateCupcakes < ActiveRecord::Migration[6.0]
  def change
    create_table :cupcakes do |t|
      t.string :name
      t.string :item_code
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
