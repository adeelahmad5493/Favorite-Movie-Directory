# React: Favorite Movie Directory

![](https://hrcdn.net/s3_pub/istreet-assets/QP-nMkLcgVGyNqz4vKZCtw/favorite-movie-directory.gif)

The application has 3 components:

*   The Movieform component, which allows the user to enter data about movies.
*   The Movieslist component, which displays the movies data.
*   The Search component, which allows the user to filter through existing movies.

Each movie object in the Movielist has the following properties:

*   _name_: The name of the movie [STRING]
*   _rating_: The rating of the movie in the range of 0 to 100 [NUMBER]
*   _duration_: The duration of the movie in hours [STRING]

The application has the following functionalities:

*   The Movieform component has the followings fields:
    *   'Movie Name', which accepts a string denoting the movie name.
    *   'Ratings', which accepts an integer denoting the movie's rating.
    *   'Duration', which accepts a string denoting the movie's duration in hours (h) or minutes (m), e.g., in the format 132m or 2.5h.
*   The Movieslist component displays the movie data sorted by duration in descending order. The format is as follows:
    *   {movie name}
    *   Ratings: {ratings}/100
    *   {duration} Hrs
*   The following functionality has been implemented when the user clicks on the Add Movie button:
    *   If the duration format entered by the user is invalid, shows the alert error message with the text 'Please specify the time in hours or minutes (e.g. 2.5h or 150m)'. This error message gets cleared once the user starts typing into any of the input fields.
    *   If all the input fields are filled with a valid value, a new movie gets added to the list.
    *   If the duration is entered in minutes, it gets converted to hours. For example, 90m will be converted and displayed as '1.5 Hrs'.
*   The Search component allows the user to filter through existing movies in the directory by the beginning characters.
    *   It requires the user to input at least 1 characters before the search happens.
    *   If the search finds no matches, the message 'No Results Found' is displayed instead of the list.
*   Initially, the Movieslist component is not visible.


## Environment 

- React Version: 16.13.1
- Node Version: 14(LTS)
- Default Port: 8000


**Commands**
- run: 
```bash
npm start
```
- install: 
```bash
npm install
```
