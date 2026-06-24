
// export const geoLocation = async (address) => {
//     const res = await fetch(
//         `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${API_KEY}`
//     )
//     const data = await res.json();
//     return data.results[0].geometry.location;
// }


//     export const getNearbyRestaurants = async (lat, lng) => {
//         const res = await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=1500&type=restaurant&key=${API_KEY}`)
//         const data = await res.json();
//         return data.results;
//     }
