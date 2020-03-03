def can_make_word(word)
    blocks = [
        ['B','O'],
        ['X','K'],
        ['D','Q'],
        ['C','P'],
        ['N','A'],
        ['G','T'],
        ['R','E'],
        ['T','G'],
        ['Q','D'],
        ['F','S'],
        ['J','W'],
        ['H','U'],
        ['V','I'],
        ['A','N'],
        ['E','R'],
        ['F','S'],
        ['L','Y'],
        ['P','C'],
        ['Z','M']
    ];
    word_array = word.split("")
    count = 0 
    blocks.each_with_index do |block,index|
        word_array.each do |char|
            if
            count++
        end
    end
    puts count
end
