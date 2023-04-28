
# katDB API

Welcome to the KatDB Movies and TV Shows API! Our API provides free access to a comprehensive collection of movies and TV shows, allowing you to retrieve detailed information about each title, including its title, year of release, genre, cast, ratings, and more.

Our API is currently deployed on Render and can be accessed through the following URL: https://katdb-bogk.onrender.com/. To use our API, simply make HTTP requests to our endpoints, passing the necessary parameters to retrieve the desired information. Our API supports various HTTP methods, including GET, POST, PUT, and DELETE, allowing you to perform various operations on our database.





## Documentation

Here are some of the key endpoints available in our API:

    GET /movies - Retrieves a list of all movies in our database

    GET /movies?id={id} - Retrieves information about a specific movie, based on its unique identifier

    GET /movies/?year={year} - Searches for movies that match the specified year

    GET /movies/?tag={tag} - Searches for movies that match the specified tag

    GET /shows?name={name} - Retrieves a list of all TV shows in our database based on its unique name

    GET /shows?id={id} - Retrieves information about a specific TV show, based on its unique id

    GET /shows/?tag={tag} - Searches for TV shows that match the specified tag

    GET /random/?type={show/movie} - Searches for a random TV show or a Movie
                        
    GET /tags - Get the list of all tags for TV shows and Movies

To access our API, you don't need to sign up for an API key. Our API documentation provides detailed instructions on how to make requests, as well as examples of the JSON responses you can expect to receive.

We hope you find our KatDB Movies and TV Shows API useful! If you have any questions or encounter any issues, please don't hesitate to contact us through our website or email.
