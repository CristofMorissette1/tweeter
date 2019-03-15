// import { create } from "domain";

/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": {
          "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];

  var tweets = [
    {
      "user": {
        "name": "Newton",
        "avatars": {
          "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ]
  $( document ).ready(function() {
 //creating tweets object
 function createTweetElement(tweet) {
  let currentDate = new Date(Date.now());
  let tweetDate = new Date(tweet.created_at);
  let numYear = currentDate.getFullYear() - tweetDate.getFullYear();
  let numMonths = currentDate.getMonth() - tweetDate.getMonth();
  let numDays = currentDate.getDate() - tweetDate.getDate();
  let numHours = currentDate.getHours() - tweetDate.getHours();
  let numMin = currentDate.getMinutes() - tweetDate.getMinutes();
  let displayDate;
    const resolveS = (num) => num !== 1 ? 's' : ''; //This just checks if an 's' should be added to the string
    //All this is just comparing the numbers from above to determine the amount of time that has passed
    //Set displayDate to string
    if (numYear >= 1) {
      displayDate = `${numYear} year${resolveS(numYear)} ago`;
    } else if (numMonths >= 1) {
      displayDate = `${numMonths} month${resolveS(numMonths)} ago`;
    } else if (numDays >= 1) {
      displayDate = `${numDays} day${resolveS(numDays)} ago`;
    } else if (numHours >= 1) {
      displayDate = `${numHours} hour${resolveS(numHours)} ago`;
    } else if (numMin >= 1) {
      displayDate = `${numMin} minute${resolveS(numMin)} ago`;
    } else {
      displayDate = 'Recent Post';
    }
return ` <article class="tweet-container">
<header class="tweet-header">
<div id="header">
 <img class="image" src=${tweet.user.avatars.small}>
 <p class="user">${tweet.user.name}</p>
 <p class="name">${tweet.user.handle}</p>
</div>
</header>
<section>
  <p> ${tweet.content.text}</p>
</section>
<footer class="tweet-footer">
<div id="icons">
<i class="fas fa-flag"></i>
<i class="fas fa-retweet"></i>
<i class="far fa-thumbs-up"></i>
</div>
  <p id="date">${displayDate}</p>
</footer>
</article>`
}

// accessing tweets saving to a variable and prepending to tweets container
function renderTweets(tweets) {
  $('#tweets1').html('');
  for (tweet in tweets) {
      let $newTweet = createTweetElement(tweets[tweet]);
      $('#tweets1').prepend($newTweet);
    }
}

  //getting tweets
function getAllTweets() {
  $.get("/tweets", function(data) {
    renderTweets(data);
  });
}




let $form = $(".textbox");
// bind a submit event handler to the right form
$form.on('submit', function(event) {
  event.preventDefault()
  let $textArea = $('.tweet_text_area').val().trim();
  var counter = $('.counter').text();
 if (counter < 0) {
   $('.errorChar').show().fadeOut(3000);
  
 } else if (counter == 140) {
   $('.errorEmpty').show().fadeOut(3000);
 } else if ($textArea === '') {
   $('.errorEmpty').show().fadeOut(3000);
 }
 else {
  $.ajax( "/tweets", {
    method: 'post',
    data: $($form).serialize(),
    complete: function() {
      $('.text').val('');
      $('.counter').text(140);
      getAllTweets();
      $('.text').focus();
    } 
  })
}
})
 
let newTweetMargin = $('.new-tweet').css('margin-top');

$('#compose').on('click', function(event) {
  if ($(".new-tweet").css('margin-top') === '-194px') {
    $(".new-tweet").animate({'margin-top': newTweetMargin}, 500);
    $('.text').focus();
  }
  if ($(".new-tweet").css('margin-top') === newTweetMargin) {
    $(".new-tweet").animate({'margin-top': -194}, 500);
  }
})
getAllTweets();
  })
