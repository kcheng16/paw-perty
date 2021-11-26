export const fetchUser = (userId) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}`
  })
)

// not within Backend Routes MVP
// export const updateUser = user => (
//   $.ajax({
//     method: 'PATCH',
//     url: `/api/events/${user.id}`,
//     data: {user}
//   })
// )