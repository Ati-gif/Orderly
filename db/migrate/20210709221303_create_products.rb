class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.string :image
      t.float :price
      t.text :description
      t.boolean :shopping_list
      t.belongs_to :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
