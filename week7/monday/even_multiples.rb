list_of_numbers = [14, 5, 7, 2, 25, 10, -4, 3, 3, 25, 2, 6, 5];

def multiples_of_2_and_5(array_of_numbers)
    result_array = []
    array_of_numbers.each do |item|
        if item %2 == 0 or item %5 == 0
            result_array << item
        end
    end
    result_array
end

p multiples_of_2_and_5(list_of_numbers)
