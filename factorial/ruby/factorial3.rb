
def factorialize(num)

  return num if num == 1

  return num * factorialize(num - 1)

end

puts factorialize(5)  # 120
puts factorialize(8)  # 40320
