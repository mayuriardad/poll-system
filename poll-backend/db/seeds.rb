# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.where(username: 'HarryP', password_digest: "haha").first_or_create!
Task.where(name: 'Edit audio file', description: 'update the pitch', user_id: user.id).first_or_create!
Task.where(name: 'Edit video file', description: 'update saturation', user_id: user.id).first_or_create!
Task.where(name: 'Edit text file', description: 'add description', user_id: user.id).first_or_create!
Task.where(name: 'Edit font', description: 'change to arial', user_id: user.id).first_or_create!
Task.where(name: 'merge video assets', description: 'add audio to video and update text', user_id: user.id).first_or_create!
