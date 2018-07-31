## Git Jamming

[Instructions](#instructions) | [User Stories](#user) | [Week One Summary](#one) | [Week Two Goals](#two) | [Pictures/Screenshots](#pictures) | [Expansion](#expansion)

Welcome to Git Jamming - this is a project we worked on during the final two weeks at Makers, in a team of four, with the aim to create a web application that allows the user to share a recording by joining a jamming session with other users, where they can then create music together.

### <a name="instructions"></a>Instructions to use the website
1. Our application is on this website, supported on Firefox: www.gitjamming8.herokuapp.com
2. Once you have the page loaded - enter your name and the instrument you would like to use. You will also need to specify whether you are joining an existing Jamming Session or starting a new one. This will take you to another page where you can start to create music.
3. Play the keyboard to hear music - press the `play session` button to hear the music already stored on the jamming session. Once you are ready - press `record` and whatever you play from then on will be stored. You can press `record` again to stop the recording.
4. To listen to the track you've created (which will be played over the current jamming session if it exists) - press `play`.
5. Click the button Sign Out if you want to log in as a new player
6. Click the button Leave Session if you would like to start a new jamming session but continue to use the website.

### <a name="user"></a>User Stories
```
As a user
So that I can make a sound from a computer,
I would like to press a button and hear sound.
```

```
As a user
So that I can play a series of sounds,
I would like to press a series of buttons and hear different sounds.
```

```
As a user
So that I can have a better experience using the website to create sounds,
I would like the buttons to be triggered by keys on the keyboard.
```

```
As a user
So that I can save the sounds that I create as a track,
I would like to record the sounds that I create in order.
```

```
As a user
So that I can hear previous ideas and tracks,
I would like to playback sounds that I have created.
```

```
As a user
So that I can store multiple tracks,
I would like to store tracks to the database.
```

### <a name="one"></a>Week One Summary

We were given our groups and the focus of our group project (Music/Product) on Monday 23rd July and from there began to discuss what we wanted to achieve - align our goals - and begin the planning process. By the end of Monday we had decided on our idea and that our MVP would be to have buttons that could play sounds triggered with MIDI inputs and sent through the browser. We thought it would be both challenging and interesting to learn more about MIDI data, audio files seemed a little bit too simple, and it would also allow us to use the same code with various different instruments which might help us going forward with the project.

We set up a Trello Board, Git repo, and worked together in pairs throughout the week to complete user stories to help keep our goals in line with a good user experience. We worked on the musical side of the application alongside a firebase non-relational database (none of us had used this before and again we liked the idea of something to challenge us). This was in order that once the music was set up correctly we would then be able to work towards storing the tracks, playing them back and eventually allowing several users to work together on them.

At the end of the first week we have been able to create our MVP and build upon it. We have a full piano keyboard with 12 notes, with front end design, and the ability to store the track (not yet to the database) and play each note back in the order and speed that it was originally played. We have also created a database with methods to add and delete from the database which are fully tested.

### <a name="two"></a>Week Two Goals

At this stage, we will aim to first allow a different user to access the same track within a 'jamming session', so that two different users can store their updates and harmonies onto the track and work together on it. We will of course aim to have everything fully connected to the database too. We will then make sure that multiple users can work on multiple tracks and that there is a simple user friendly way to access these different elements of the Application. Finally we will try to implement different instruments - and perhaps even a chatroom feature to allow users working in the same 'jamming session' to communicate with each other in real time.

### <a name="pictures"></a>Pictures/Screenshots of the Application



### Languages/Frameworks Used

- Languages: JavaScript (and jQuery), HTML/CSS
- Database: Firebase
- Testing Suites: Jasmine, Cypress
- CD: Heroku

### <a name="expansion"></a>Expansion (instrument library)

Our project has the potential to be expanded to include a full library of instruments, which would allow the user(s) to decide their 'band' setup.

From the 'Expansion Library' folder add the relevant instrument folder, mp3.js and ogg.js files to the 'soundfont' folder. From here add the relevant instrument name to the var in webmidi.js (line 352) and MIDI.js (line 352) in the same format as the other instruments listed - add 'instrument: "instrumentname"' (below line 28), and update the byName parameter (below onsuccess).

### Created by:

- [Arsalan Ahmed](https://github.com/arsalanabc)
- [Diego Fontecilla](https://github.com/ridginald)
- [Lucia Gore](https://github.com/luciagore)
- [Daniel Ridgway](https://github.com/diegofontecilla)
