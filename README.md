Springboard: Movie Ratings App 


** 
What this project was about: 
This project was part of the unit on jQuery. The primary focus was getting comfortable utilizing jQuery for creating 
and updating elements on the DOM. 

There was also some further study on sorting items on the DOM.  

** 
What I did: 
I started with an input form for a movie (min 2 characters) and rating (0-10 in steps of 0.5). I also created a container for 
all of the movies the user would add. 

I then added a radio button that allows the user to sort the content by movie name or rating in both ascending and descending
order. 

User form submissions first create a movie object with a name, rating, and ID (variable that increments with every submit 
for continuous unique id assignment), and add it to a movieList array. The movie then gets added to the DOM along with a 
remove button which deletes the movie both from the DOM and the movieList. 

User clicks on the sorting buttons will first check whether the movieList is currently sorted in ascending or descending 
order, then sort the movieList accordingly based on user choice (movie or rating). 

** 
What I learned:
This was a great exercise for practicing jQuery. I appreciated how selecting, creating, modifying, and removing elements from 
the DOM was an easier/quicker process. I'll definitely be using this tool in the future to help keep my code concise.

I ran into a snag with getting $(this) to operate as expected inside an event handler, which helped me better understand the 
difference between anonymous and arrow functions and their relationships to 'this'.
The big one here for me was the .sort() compare function. 

Thus far, I've had limited experience with sorting algorithms (big one on the TODO list), so it was of incredibe value reading 
the docs on javascript's .sort() method, and how to properly pass a comparison function would allow me to sort an array of 
objects (based on both strings and/or numbers in those objects). 

On a non-technical level, I'm also learning to trust the process. I've often had a tendency to get down on myself if I don't 
understand a concept or know how to implement a solution immediately. I've realized how unproductive that is, and it's better 
to be patient with myself while learning something new. Easier said than done, but next time I get frustrated I'll try and
remember this experience. 

**
Looking forward: 
I would still like to style this app so it doesn't look so barebones. 
I'm sure once the app has a new look that will inspire me to refactor some of the functionality. 
