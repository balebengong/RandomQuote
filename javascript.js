var quotes = [
  '\"Life is about making an impact, not making an income." <br /><br />-Kevin Kruse',
  '\"Whatever the mind of man can conceive and believe, it can achieve." <br /><br />-Napoleon Hill',
  '\"Strive not to be a success, but rather to be of value." <br /><br />-Albert Einstein',
  '\"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference." <br /><br />-Robert Frost',
  '\"I attribute my success to this: I never gave or took any excuse." <br /><br />-Florence Nightingale',
  '\"You miss 100% of the shots you don\'t take." <br /><br />-Wayne Gretzky',
  '\"I\'ve missed more than 9000 shots in my career. I\'ve lost almost 300 games. 26 times I\'ve been trusted to take the game winning shot and missed. I\'ve failed over and over and over again in my life. And that is why I succeed." <br /><br />-Michael Jordan',
  '\"The most difficult thing is the decision to act, the rest is merely tenacity." <br /><br />-Amelia Earhart',
  '\"Every strike brings me closer to the next home run." <br /><br />-Babe Ruth',
  '\"Definiteness of purpose is the starting point of all achievement." <br /><br />-W. Clement Stone',
  '\"Life isn\'t about getting and having, it\'s about giving and being." <br /><br />-Kevin Kruse',
  '\"Life is what happens to you while you\'re busy making other plans." <br /><br />-John Lennon',
  '\"We become what we think about." <br /><br />-Earl Nightingale',
  '\"Twenty years from now you will be more disappointed by the things that you didn\'t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover." <br /><br />-Mark Twain',
  '\"Life is 10% what happens to me and 90% of how I react to it." <br /><br />-Charles Swindoll',
  '\"The most common way people give up their power is by thinking they don\'t have any." <br /><br />-Alice Walker',
  '\"The mind is everything. What you think you become.  –Buddha',
  '\"The best time to plant a tree was 20 years ago. The second best time is now." <br /><br />-Chinese Proverb',
  '\"An unexamined life is not worth living." <br /><br />-Socrates',
  '\"Eighty percent of success is showing up." <br /><br />-Woody Allen',
  '\"Your time is limited, so don\'t waste it living someone else\'s life." <br /><br />-Steve Jobs',
  '\"Winning isn\'t everything, but wanting to win is." <br /><br />-Vince Lombardi',
  '\"I am not a product of my circumstances. I am a product of my decisions." <br /><br />-Stephen Covey',
  '\"Every child is an artist.  The problem is how to remain an artist once he grows up." <br /><br />-Pablo Picasso',
  '\"You can never cross the ocean until you have the courage to lose sight of the shore." <br /><br />-Christopher Columbus'
]

function getNewRandomQuote() {
  var randomNbr = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNbr];
  var tweetQuote = quotes[randomNbr].split(' ').join('%20');
  tweetQuote = tweetQuote.split('<br>').join('');
  tweetQuote = "https://twitter.com/intent/tweet?text=" + tweetQuote.split('"').join('')
  $('.twitter-button').attr('href', tweetQuote);
}
