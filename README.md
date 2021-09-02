# JSON server and Web Audio API challenge

## Overview

This repository holds two pages: One which uses mock data from the JSONPlaceholder API and the other using the Web Audio API. I have previously used the JSON Server used by the JSONPlaceholder API, so was familiar with it and the form of the data it would be returning. This was my first time working with the Web Audio API.

## Running application

I use VS Code for my editor, so hae been using the live editor extension in development. I believe if you bring up the files in any IDE, right click within the `index.html` file and select 'Inspect in the browser', this should allow you to run the app locally.

## Brief

Create a web application that has 2 pages:

**Page 1:**
* The user can request the list of posts from the JSONPlaceholder API and see the
results collated together
* The user can alphabetically sort the posts based on their title
* The user can group the posts by user ID


**Page 2:**
* The user can choose to play different audio samples in the browser via the Web
Audio API

**Requirements:**
* No bundler (example: Webpack, Rollup, Parcel, Create React App, Vue CLI)
* Runtime compilation accepted
* No CSS framework
* Chrome and/or Firefox support
* Recommended duration: 2 hours

## Notes/Walkthrough

The landing page for the app (`index.html`) presents links to the two other pages: one for posts and the other for music.

### JSON Placeholder API

The page presents the user with a button to 'Show posts', clicking this fetches the post data from the API and populates the page. The user can then sort posts alphabetically A to Z, Z to A or return the posts to their original, unsorted state. The user can also choose to see all the posts by any one author by clicking a button within each post which, if clicked, filters posts by author and groups them together. One improvement that I would make to this page is to allow the user to sort posts alphabetically for a particular author. Currently, if a user opts to see all posts by an author (e.g. User 2) and then selects to sort posts alphabetically, it will display all posts by all users. I woul dod this by refactoring the `handleSort` function to accept an array as a parameter which the sort is then performed on. I did not do that in this case because of time constraints, and it also seemed beyond the scope of the brief.

### Web Audio API

This is quite a simple page with two play/pause buttons that allow the user to start and stop samples. I tried to use the fetch API for the music samples, however ran into CORS issues. Given time constraints, I opted to include the files within the application itself. There is buggy behaviour with this page: the play/pause buttons are connected via their `playing` state and so if a sample is playing, clicking either one will pause the sound. It also means that the user sometimes has to click a button twice in order for music to play due to the current state. It also means that the samples cannot be played together at the same time - I am not sure based on the brief if this was the intention. In terms of improvement, this would be the first place that I would start: creating a `playing` state for each button which is updated by the relevant button click.