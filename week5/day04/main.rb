require 'pry'
def series_sum(num)
    divider = 1;
    series = 0;
    num.times do
        series += (1.00/divider)
        divider +=3    
    end
    return "%0.2f" %[series]
end
print "enter a number and I will return the sum of series "
num = gets.chomp.to_i
    p series_sum(num)
