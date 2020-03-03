require 'minitest/autorun'
require_relative 'to_sentence'
require 'minitest/reporters'

Minitest::Reporters.use!(
    Minitest::Reporters::SpecReporter.new
)

class ToSentenceTest < MiniTest::Test 
    def test_one_item
     #   assert_equal(#expected, #actual)
        actual = to_sentence(['apple'])
        expected = "apple"
        assert_equal(expected,actual)
    end
    def test_two_items
        actual = to_sentence(['apple','kiwi'])
        expected = "apple and kiwi"
        assert_equal(expected,actual)
    end
    def test_two_items_with_different_fruit
        actual = to_sentence(['Mango','Orange'])
        expected = "Mango and Orange"
        assert_equal(expected,actual)
    end
    def test_three_items_with_different_fruit
        actual = to_sentence(['Mango','Orange','Apple'])
        expected = "Mango, Orange and Apple"
        assert_equal(expected,actual)
    end
    def test_empty_array
        actual = to_sentence([])
        expected = ""
        assert_equal(expected,actual)
    end
end