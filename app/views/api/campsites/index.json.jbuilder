@campsites.each do |campsite| 
  json.set! campsite.id do   
    json.extract! campsite, 
        :id, 
        :title,
        :description,
        :site_type,
        :owner_id,
        :max_guests,
        :daily_rate,
        :address,
        :state,
        :zipcode,
        :country, 
        :lat, 
        :lng, 
        :pets_allowed,  
        :lake_nearby,  
        :wifi,  
        :fire_pits,  
        :showers,  
        :toilets,  
        :portable_water,  
        :RV_hookup,  
        :RV_sanitation,  
        :picnic_table,  
        :trash 
    if campsite.photo.attached?
      json.photo url_for(campsite.photo)
    end
    end
  end