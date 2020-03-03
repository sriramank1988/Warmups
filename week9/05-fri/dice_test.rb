require 'minitest/autorun'
require "minitest/reporters"
Minitest::Reporters.use!(Minitest::Reporters::SpecReporter.new) # optional

require_relative 'dice'

class DiceTest < MiniTest::Test

  def test_pass_no_argument
    number = Dice.roll
    assert_equal "/[1-6]/", number
  end
  def test_pass_no_argument
    number = Dice.roll("(123) 456-7890").number
    assert_equal "1234567890", number
  end

end
