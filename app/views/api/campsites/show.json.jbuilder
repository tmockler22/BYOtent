json.set! :campsite do
  json.partial! 'api/campsites/campsite', campsite: @campsite 
  if @campsite.photo.attached?
    json.photo url_for(@campsite.photo)
  end
end