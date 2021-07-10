require 'faker'

Room.destroy_all
Category.destroy_all
Product.destroy_all

random_boolean = [true, false]

    10.times do
    r = Room.create(
      name:Faker::House.room
    )
      5.times do
      c = r.categories.create(
        name:Faker::Commerce.department,
        category_img: 'https://i.imgur.com/cHXakmA.jpeg'
      )
        10.times do
          c.products.create(
            name:Faker::Commerce.product_name,
            image:'https://i.imgur.com/YQtK1Co.jpeg',
            price:Faker::Commerce.price,
            description:Faker::Food.description,
            shopping_list:random_boolean.sample
          )
      end
    end
  end

  puts "seeded #{Room.all.size} Rooms"
  puts "seeded #{Category.all.size} Categories"
  puts "seeded #{Product.all.size} Products"

