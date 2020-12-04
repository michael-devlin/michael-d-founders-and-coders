function newQuote() {
  var quotes = {
      "― Mahatma Gandhi": '“Be the change that you wish to see in the world.”',
      "― Martin Luther King Jr.": '“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”',
      "― Antoine de Saint-Exupéry": '“And now here is my secret, a very simple secret: It is only with the heart that one can see rightly; what is essential is invisible to the eye.”',
      "― William Shakespeare": '“There is nothing either good or bad, but thinking makes it so.”',
      "― Albert Einstein": '“The most beautiful experience we can have is the mysterious. It is the fundamental emotion that stands at the cradle of true art and true science.”',
      "― Wei Wu Wei": '“Why are you unhappy? Because 99.9 percent of everything you think, and of everything you do, is for yourself — and there isn’t one.”',
      "― Lao Tsu": '“Those who know do not speak. Those who speak do not know.”',
      "― Alan Moore": '“The main thing that I learned about conspiracy theory, is that conspiracy theorists believe in a conspiracy because that is more comforting. The truth of the world is that it is actually chaotic. The truth is that it is not The Iluminati, or The Jewish Banking Conspiracy, or the Gray Alien Theory. The truth is far more frightening - Nobody is in control. The world is rudderless.”',
      "― Ursula Le Guin": '“It is good to have an end to journey toward; but it is the journey that matters, in the end.”',
      "- Ayishat Akanbi": '"It’s naive to think that you wouldn’t have taken part in historical atrocities once considered normal if you embrace all the trendy ideas of today."',
      "― Martin Luther King Jr.": '“I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.”',
      "― Sam Harris": '“Consider it: every person you have ever met, every person will suffer the loss of his friends and family. All are going to lose everything they love in this world. Why would one want to be anything but kind to them in the meantime?”',
      "― Mahatma Gandhi": '“Live as if you were to die tomorrow. Learn as if you were to live forever.”',
      "― Alan Watts": '“This is the real secret of life -- to be completely engaged with what you are doing in the here and now. And instead of calling it work, realise it is play.”',
      "― Albert Einstein": '“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”',
      "― Arthur Schopenhauer": '“Compassion is the basis of morality.”',
      "― Erwin Schrödinger": '“The present is the only thing that has no end.”',
      "― Lao Tzu": '“When I let go of what I am, I become what I might be.”',
      "― Buddha": '“You only lose what you cling to.”',
      "― Thich Nhat Hanh": '“To be beautiful means to be yourself. You don’t need to be accepted by others. You need to accept yourself.”',
      "― Dalai Lama": '"I’m Tibetan, I’m Buddhist and I’m the Dalai Lama, but if I emphasize these differences it sets me apart and raises barriers with other people. What we need to do is to pay more attention to the ways in which we are the same as other people."',
      "― Ayishat Akanbi": '"It’s not empathy if you can <i>only</i> direct it to those you deem unfortunate. It’s just moralistic pity which often stems from an inferiority complex, guilt, and the desperation to be perceived as ‘good’."',
      "― Maya Angelou": '“Hate, it has caused a lot of problems in the world, but has not solved one yet.”',
      "― Deeyah Khan": '"Self-expression should not be a challenge that demands extraordinary talent but should be a right accessible to all."',
      "― Peter Singer": '“We are, quite literally, gambling with the future of our planet - for the sake of hamburgers”',
      "― Elif Shafak": '“Do not go with the flow. Be the flow.”',
      "― Hermann Hesse": '“Whoever wants music instead of noise, joy instead of pleasure, soul instead of gold, creative work instead of business, passion instead of foolery, finds no home in this trivial world of ours.”',
      "― Ramana Maharshi": "“Wanting to reform the world without discovering one's true self is like trying to cover the world with leather to avoid the pain of walking on stones and thorns. It is much simpler to wear shoes.”",
      "― Nisargadatta Maharaj": '“You will receive everything you need when you stop asking for what you do not need”',
      "― Bhagavad Gita II, 47": '“Be intent on action, not on the fruits of action, avoid attraction to the fruits and attachment to inaction!"',
      "― Rumi": '“Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.”',
      "― Plato": '“Be kind, for everyone you meet is fighting a harder battle.”',
      "― Marcus Aurelius": '“Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.”'
    };

  // get all keys (authors)
  var keys = Object.keys(quotes);
  // get a random key (author) and store it in author
  var author = keys[Math.floor(Math.random() * keys.length)];
  // get the value (quote) that belongs to that key
  var quote = quotes[author];

  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author-name").innerHTML = author;
}
