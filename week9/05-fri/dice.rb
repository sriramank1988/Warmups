require 'pry'
class Dice
    def self.roll(*number_of_rolls) #args are assigned in an array named num
        dice_rolls = []
        dice_faces = [1,2,3,4,5,6]
        case num.size
        when 0
            dice_faces.sample
        else
            number_of_rolls[0].times do
                dice_rolls << dice_faces.sample
            end
        dice
        end
    end
end
binding.pry
