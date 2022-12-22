# Timestamp Microservice

This is the code for the Timestamp Microservice project. Instructions for building your project can be found at https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice


## Requirements
- A GET request to `/api/:date` with a few scenarios:
  - Param is valid date:
    - return JSON with **utc** and **unix** time of timestamp
    - `{ unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }`
  - Param is UNIX time
    - return JSON with **utc** and **unix** time of timestamp
      - `{ unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }`
  - No param provided:
    - return JSON with **utc** and **unix** of current time
- Must handle all dates successfully parsed by `new Date(date_string)`
- Error handling:
  - If the input date is invalid, return
  - `{ error : "Invalid Date" }`