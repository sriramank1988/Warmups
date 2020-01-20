print "Enter the array of numbers "
input = gets.chomp.split(' ')
input.map!(&:to_i)
input = input.sort
def get_squares(array)
    result = [];
    array.each{ |item|
        if((Math.sqrt(item) % 1) == 0) then
            result.push(item)
        end
    }
    p result
end
get_squares(input)