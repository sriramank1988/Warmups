class Say
    def initialize(num)
        @number = num
    end
    def in_english()
        if(@number < 0 || 99 < @number)
            "Out of range"
        elsif(@number >= 0 && @number < 20)
            case @number
            when 0
                "Zero"
            when 1
                "one"
            when 2
                "two"
            when 3
                "three"
            when 4
                "four"
            when 5
                "five"
            when 6
                "six"
            when 7
                "seven"
            when 8
                "eight"
            when 9
                "nine"
            when 10
                "ten"
            when 11
                "eleven"
            when 12
                "twelve"
            when 13
                "thirteen"
            when 14
                "fourteen"
            when 15
                "fifteen"
            when 16
                "sixteen"
            when 17
                "seventeen"
            when 18
                "eighteen"
            when 19
                "nineteen"
            end
        elsif(@number % 10 == 0)
            case @number/10
            when 2
                "twenty"
            when 3
                "thirty"
            when 4
                "forty"
            when 5
                "fifty"
            when 6
                "sixty"
            when 7
                "seven"
            when 8
                "eighty"
            when 9
                "ninety"
            else
                "Edge case found. work on it"
            end
        else
            first_digit_in_word = Say.new((@number / 10)*10).in_english
            second_digit_in_word = Say.new(@number % 10).in_english
            "#{first_digit_in_word}-#{second_digit_in_word}"
        end
    end
end
