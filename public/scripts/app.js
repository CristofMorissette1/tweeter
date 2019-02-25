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
  
 //creating tweets object
 function createTweetElement(tweet) {
return ` <article class="tweet-container">
<header class="tweet-header">
<div>
 <img class="image" src=${tweet.user.avatars.small}>
 <p class="user">${tweet.user.name}</>
</div>
</header>
<section>
  <p> ${tweet.content.text}</p>
</section>
<footer class="tweet-footer">
<i class="fas fa-flag"></i>
<i class="fas fa-retweet"></i>
<i class="far fa-thumbs-up"></i>
  <p>${new Date(tweet.created_at)}</p>
</footer>
</article>`
}
//accessing tweets saving to a variable and prepending to tweets container
function renderTweets(tweets) {
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
  var counter = $('.counter').text();
 if (counter < 0) {
   $('.errorChar').show().fadeOut(3000);
  
 } else if (counter == 140) {
   $('.errorEmpty').show().fadeOut(3000);
 } else {
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
 
let $compose = $(".new-tweet");
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
