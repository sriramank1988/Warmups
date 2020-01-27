params = {
  username: 'chocolate',
  password: 'pudding',
  friends: ['vanilla', 'strawberry', 'caramel'],
  image_url: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
}

puts "username : #{params[:username]}"
puts "Last friend from friends : #{params[:friends][-1]}"
puts "Password at least 8 characters : #{params[:password].length >= 8}"
params[:data_sent_time] = Time.now
puts "data_sent_time = #{params[:data_sent_time]}"