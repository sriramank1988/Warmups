#He answers 'Sure.' if you ask him a question. He answers 'Whatever.' if you tell him something. He answers 'Woah, chill out!' if you yell at him (ALL CAPS). He says 'Fine. Be that way!' if you address him without actually saying anything.

puts "Talk to daniel, to quit program input 'q'"
input_str = gets.chomp
while input_str != "q" do
    if input_str.include? "?"
        puts 'Sure'
    elsif input_str.upcase == input_str
        puts 'Woah, chill out!'
    elsif input_str == 'Daniel'
        puts 'Fine. Be that way!'
    else
        puts 'Whatever.'
    end
    input_str = gets.chomp
end