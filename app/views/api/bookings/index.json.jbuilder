@bookings.each do |b|
  json.set! b.id do
    json.partial! 'api/bookings/booking', booking: b
  end
end