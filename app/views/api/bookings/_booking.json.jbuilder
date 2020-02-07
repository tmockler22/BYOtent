json.extract! booking, 
    :id, 
    :arrival_date, 
    :depart_date,
    :num_campers, 
    :campsite_id
json.set! :host_id, booking.host.id