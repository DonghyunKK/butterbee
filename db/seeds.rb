# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Cleaning database..."
Cake.destroy_all
Cupcake.destroy_all

puts "Creat user"
admin = User.create!(
  email: "admin@gmail.com",
  password: '123456',
  admin: true
)


puts "Creating cakes..."
vanilla_cake = { name: "Vanilla", item_code: "M426", user_id: 1 }
peanut_cake =  { name: "Peanut", item_code: "P368", user_id: 1 }

[ vanilla_cake, peanut_cake ].each do |attributes|
  cake = Cake.create!(attributes)
  puts "Created #{cake.name}"
end

puts "Creating cupcakes..."
carrot_cupcake = { name: "Carrot", item_code: "C656", user_id: 1 }
sesame_cupcake =  { name: "Sesame", item_code: "S528", user_id: 1 }

[ carrot_cupcake, sesame_cupcake ].each do |attributes|
  cupcake = Cupcake.create!(attributes)
  puts "Created #{cupcake.name}"
end
puts "Finished!"