# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Position.destroy_all

Postion.create(name: 'server',   description: 'Servers work in the front of the business taking orders, serving food and drinks, and removing dinnerware from the table in a timely manner.', qualification: 2);
Postion.create(name: 'busboy',   description: 'A busboy may also fill in as a dishwasher during non-service hours. He is responsible for setting and resetting the dining room tables. He refills water and assists the servers, and he spends most of his time cleaning, organizing and arranging dishes in the back of the kitchen,' qualification: 1);
Postion.create(name: 'dishwasher', description: 'Clean dishes, kitchen, food preparation equipment, or utensils. Wash dishes, glassware, flatware, pots, or pans, using dishwashers or by hand. Maintain kitchen work areas, equipment, or utensils in clean and orderly condition.', qualification: 1);

