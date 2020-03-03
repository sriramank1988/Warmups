# def to_sentence(arr)
#     if arr.length == 0
#         return ""
#     elsif arr.length == 1
#         return arr[0]
#     else 
#         return arr[0..-2].join(', ') + " and " + arr[-1]
#     end
# end
def to_sentence(arr)
    case arr.length
    when 0
        ""
    when 1
        arr.first
    when 2
        arr.join(' and ')
    else
        *head, tail = arr
        "#{head.join(', ')} and #{tail}"
        #return arr[0..-2].join(', ') + " and " + arr[-1]
    end
end
