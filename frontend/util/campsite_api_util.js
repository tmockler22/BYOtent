export const fetchCampsites = () => {
  return $.ajax({
    method: 'GET',
      url: '/api/campsites',
    error: (err) => console.log(err)
  })
}