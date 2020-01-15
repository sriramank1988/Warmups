symbol = "$"
size = 10
chess_str = ""
4.times do |i|
    size.times do
        chess_str = chess_str.concat("#{symbol} ")
    end
    chess_str = chess_str.concat("\n")
    if(i.even?)
        chess_str = chess_str.concat(" ")
    end
end
puts chess_str