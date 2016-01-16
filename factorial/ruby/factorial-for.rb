
#
# Factorial using for loop and a range.
#


def factorialize(num)

  return num if num == 1

  total = 1

  #
  # Goes from 2 to num (thus, in ascendant order).
  #
  for i in 2..num do
    total *= i
  end

  #
  # As in “Lisp”, in Ruby, the last expression of a function/method
  # is returned by default. Thus, we don't need the `return` keyword.
  #

  total
end

puts factorialize 5   # →  120
puts factorialize 8   # →  40320
