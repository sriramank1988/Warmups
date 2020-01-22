file = File.new("orders.txt","w");
place_order = 'y';
until place_order == 'n' do
    print "Enter the name of the person "
    file.print "#{gets.chomp} ordered " 
    more_item = 'y'
    until more_item == 'n' do
        print "Please enter an item in the order "
        file.print gets.chomp
        print "Do you wan to add more item?"
        more_item = gets.chomp
        if more_item == 'y'
            file.print " & "
        end
    end
    file.print " at #{Time.now}\n"
    print "Do you want place another order? "
    place_order = gets.chomp
end
file.close