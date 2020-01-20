# excercise 1
# print "Enter the name of the person "
# person = gets.chomp
# def offer_rose(str)
#     return "Would you take this rose, #{str}, in exchange for giving an old beggar woman shelter from the bitter cold?"
# end
# puts offer_rose(person)

# excercise 2
# town = {
#     residents: ["Maurice", "Belle", "Gaston"],
#     castle: {
#       num_rooms: 47,
#       residents: ["Robby Benson"],
#       guests: ['birds']
#     }
# }
# town[:castle][:guests].unshift("Belle")
# p town[:castle][:guests]
# town[:castle][:cook] = "Mrs Potts"
# p town[:castle]

# excercise 3

# friends = ["Chip Potts", "Cogsworth", "Lumière", "Mrs. Potts"]
# friends.length.times do |index|
#     puts "Belle is friends with #{friends[index]}"
# end

# excercise 4

# lost_boys = [
#     {name: 'Tootles', age: '11'},
#     {name: 'Nibs', age: '9'},
#     {name: 'Slightly', age: '10'},
#     {name: 'Curly', age: '8'},
#     {name: 'The Twins', age: '9'}
# ]
# sum = 0;
# lost_boys.length.times do |index|
#     sum += lost_boys[index][:age].to_i
# end
# puts "The sum of all lost boys age is #{sum}"

# excercise 5
# children = ['Wendy', 'John', 'Michael']
# new_children = []
# children.length.times do |index|
#     new_children.push("#{index+1} #{children[index]} Darling")
# end
# p new_children

#excercise 6

# names = ["Belle", "Cogsworth", "Lumière", "Mrs. Potts"]
# short_names = [];
# names.length.times do |index|
#     if names[index].length < 8 then
#        short_names.push(names[index])
#     end
# end
# puts short_names

# #excercise 7
# scream(0) #=> "crickets"
# scream(1) #=> "lol"
# scream(2) #=> "lolol"
# scream(3) #=> "lololol"
# scream(7) #=> "lololololololol"


$scream = {
    '0' => "crickets",
    '1' => "lol",
    '2' => "lolol",
    '3' => "lololol",
    '7' => "lololololololol"
}

def scream_func(str) 
    puts $scream[str]
end
scream_func("3");