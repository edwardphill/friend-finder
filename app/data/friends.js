// DATA
// Data will hold possible friends.

var friends = [
  {
    name: "Mark Cuban",
    photo:
      "https://en.wikipedia.org/wiki/Mark_Cuban#/media/File:Mark_Cuban_by_Gage_Skidmore.jpg",
    scores: ["5", "1", "4", "4", "5", "1", "2", "5", "4", "1"]
  },
  {
    name: "Mary Meeker",
    photo:
      "https://en.wikipedia.org/wiki/Mary_Meeker#/media/File:Mary-meeker-hed-2015_(cropped1).jpg",
    scores: ["4", "2", "5", "1", "3", "2", "2", "1", "3", "2"]
  },
  {
    name: "Kara Swisher",
    photo:
      "https://www.facebook.com/KaraSwisher/photos/a.395682583932428/731411183692898/?type=1&theater",
    scores: ["5", "2", "2", "2", "4", "1", "3", "2", "5", "5"]
  },
  {
    name: "Elon Musk",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg",
    scores: ["3", "3", "4", "2", "2", "1", "3", "2", "2", "3"]
  },
  {
    name: "Jeff Bezos",
    photo:
      "https://en.wikipedia.org/wiki/Jeff_Bezos#/media/File:Secretary_of_Defense_Ash_Carter_meets_with_Jeff_Bezos,_May_5,_2016_(1)_(cropped).jpg",
    scores: ["4", "3", "4", "1", "5", "2", "5", "3", "1", "4"]
  },
  {
    name: "Elizabeth Holmes",
    photo:
      "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAisAAAAJGUxYzc4YzA0LWQxMzUtNGI4NS04YTFiLTkwYzM0YTZkNzA2NA.jpg",
    scores: ["4", "4", "2", "3", "2", "2", "3", "2", "4", "5"]
  }
];

// Here we export the array. This makes it accessible to other files using require.
module.exports = friends;

// Determine the user's most compatible friend using the following as a guide:
// Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
// With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.
// Example:

// User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
// User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
// Total Difference: 2 + 1 + 2 = 5

// Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
// The closest match will be the user with the least amount of difference.
// Once you've found the current user's most compatible friend, display the result as a modal pop-up.
// The modal should display both the name and picture of the closest match.
