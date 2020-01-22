new_pack = [{:Pikachu => 40},{:Rattata => 20},{:Pidgeot => 60},{:Alakazam =>80},{:Butterfree => 30},{:Gengar => 70},{:Moltres => 100},{:Vulpix => 40},{:Blastoise => 80},{:Hitmonchan => 50}]
sliced_pack = new_pack.reverse.each_slice(3).to_a
# sliced_pack.each do |index|
#     alfred = 
# # end
# sliced_pack.each_with_index.select {|slice, i| 
#     p slice
#     p i
# }

alfred = [sliced_pack[0],sliced_pack[2]].flatten
peter = [sliced_pack[1],sliced_pack[3]].flatten
puts "Alfred"
puts alfred
puts "peter"
puts peter

