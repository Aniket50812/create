// Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank. 

function CityName(city) {
    if (city.startsWith("Los") || city.startsWith("New")) {
        return city;
    } else {
        return "";
    }
}
console.log(CityName("Los Angeles")); 
console.log(CityName("Los Altos"));    
console.log(CityName("New York"));    
console.log(CityName("New Delhi"));    
console.log(CityName("Chicago"));  
console.log(CityName("banglore"));  
