class Coffee 
    def initialize (name,type,size,sugars)
        @customer_name = name
        @coffee_type = type
        @cup_size = size
        @no_of_sugars = sugars
    end
    def to_s
        puts "#{@customer_name}'s #{@coffee_type}, #{@cup_size}, #{@no_of_sugars} sugars."
    end
end
