print "Enter a string and I will switch case for you: "
input_str = gets.chomp
puts "The switch case string is #{input_str.swapcase}"
extension_str = input_str.gsub(/[ .]/,"_")
puts "The Extension string is #{extension_str}"