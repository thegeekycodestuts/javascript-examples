const coordinates = "40.7128° N, 74.0060° W";
const latitude = parseFloat(coordinates.substring(0, coordinates.indexOf("°")));
const longitude = parseFloat(
    coordinates.substring(
        coordinates.indexOf(", ") + 2,
        coordinates.lastIndexOf("°")
    )
);

console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
