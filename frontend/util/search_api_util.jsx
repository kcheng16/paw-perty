export const searchListings = (string) => {
  return $.ajax({
    method: "GET",
    url: `/api/listings_search`,
    data: string,
  });
};