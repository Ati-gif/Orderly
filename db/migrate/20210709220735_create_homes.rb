class CreateHomes < ActiveRecord::Migration[6.1]
  def change
    create_table :homes do |t|
      t.string :home_img
      t.text :main_title
      t.text :main_description

      t.timestamps
    end
  end
end
