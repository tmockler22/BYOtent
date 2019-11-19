export const fetchCampsites = () => {
  return $.ajax({
    method: 'GET',
      url: '/api/campsites',
    error: (err) => console.log(err)
  })
}

export const fetchCampsite = (campsiteId) => (
  $.ajax({
    method: 'GET',
    url: `api/campsites/${campsiteId}`
  })
);

