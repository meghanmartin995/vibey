# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first

puts 'Cleaning database...'
Post.destroy_all

Post.create!(title: "covid")
Post.create!(title: "fancier")
Post.create!(title: "fonts")
Post.create!(title: "freelance")
Post.create!(title: "thirtydays")
Post.create!(title: "replastic")

puts "#{Post.count} posts created!"
