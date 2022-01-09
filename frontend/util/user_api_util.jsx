export const fetchUser = (userId) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}`
  })
)

export const createUser = (user) => (
  $.ajax({
    method: 'POST',
    url: "/api/users"
  })
)

// Update: not yet implemented
// export const updateUser = user => (
//   $.ajax({
//     method: 'PATCH',
//     url: `/api/events/${user.id}`,
//     data: {user}
//   })
// )