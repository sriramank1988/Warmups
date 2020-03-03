require 'minitest/autorun'
require "minitest/reporters" # optional
require "pry"
Minitest::Reporters.use! Minitest::Reporters::SpecReporter.new() # optional
require_relative './can_make_word'
class CanMakeWord < MiniTest::Test
    def test_enough_block_with_one_letter
        isPossible = can_make_word("A")
        assert_equal true, isPossible
    end
    def test_enough_block_with_more_than_one_letter
        isPossible = can_make_word("BARK")
        assert_equal true, isPossible
    end
    def test_enough_block_with_more_than_one_letter_having_same_letter
        isPossible = can_make_word("TREAT")
        assert_equal true, isPossible
    end
    def test_not_enough_block_with_more_than_one_letter
        isPossible = can_make_word("BOUGHT")
        assert_equal false, isPossible
    end
    def test_not_enough_block_with_more_than_one_letter_having_same_letter
        isPossible = can_make_word("BOOK")
        assert_equal false, isPossible
    end
end
