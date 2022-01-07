# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Seller.destroy_all

categories = [
  'Jewelry & Accessories',
  'Clothing & Shoes',
  'Home & Living',
  'Toys & Entertainment',
  'Beauty',
]

5.times do
  s = Seller.create(
    name: Faker::Name.name,
    email: Faker::Internet.email
  )

  7.times do
    num_categories = rand(1..categories.length - 1);
    Buyer.create(
      name: Faker::Name.name,
      max_price: rand(10.00..1200.00).round(2),
      categories: categories.sample(num_categories),
      seller_id: s.id
    )
  end
  
  15.times do
    price = rand(10.00..1000.00).round(2)
    p = Product.create(
      price: price,
      description: Faker::House.furniture,
      category: categories.sample,
      seller_id: s.id
  )
  end
end