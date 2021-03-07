// grab html tags via query selector (navbar menu)

const menu = document.querySelector(".menu");
const sectionLinks = document.querySelector(".section-links");
const links = document.querySelectorAll(".section-links li");

// add user response to click for dropdown 'hamburger' menu (navbar menu)

menu.addEventListener("click", () => {
  sectionLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

//Quote generator list of quotes

function newQuote() {
  var quotes = {
    "― Mahatma Gandhi": '“Be the change that you wish to see in the world.”',
    "― Greta Thunberg": '"I’ve learnt that no one is too small to make a difference.”',
    "― Dalai Lama XIV": '“Know the rules well, so you can break them effectively.”',
    "― Martin Luther King Jr.": '“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”',
    "― Malala Yousafzai": '“One child, one teacher, one book, one pen can change the world.”',
    "― Ayaan Hirsi Ali": '“Reality is not easy, but all this make-believe does not make it easier.”',
    "― Antoine de Saint-Exupéry": '“And now here is my secret, a very simple secret: It is only with the heart that one can see rightly; what is essential is invisible to the eye.”',
    "― William Shakespeare": '“There is nothing either good or bad, but thinking makes it so.”',
    "― Albert Einstein": '“The most beautiful experience we can have is the mysterious. It is the fundamental emotion that stands at the cradle of true art and true science.”',
    "― Wei Wu Wei": '“Play your part in the comedy – but do not identify yourself with your role.”',
    "― Lao Tzu": '“Those who know do not speak. Those who speak do not know.”',
    "― Naomi Klein": '"We can save ourselves, but only if we let go of the myth of dominance and mastery and learn to work with nature."',
    "― Nina Simone": '"I will tell you what Freedom is to me; No fear!”',
    "― Ursula Le Guin": '“It is good to have an end to journey toward; but it is the journey that matters, in the end.”',
    "- Ayishat Akanbi": '"Too many people think freedom is the ability to do anything you want, instead of the discipline to not be a slave to your compulsions."',
    "― Martin Luther King Jr.": '“But I know, somehow, that only when it is dark enough can you see the stars.”',
    "― Mahatma Gandhi": '“Live as if you were to die tomorrow. Learn as if you were to live forever.”',
    "― Alan Watts": '“This is the real secret of life -- to be completely engaged with what you are doing in the here and now. And instead of calling it work, realise it is play.”',
    "― Albert Einstein": '“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”',
    "― Arthur Schopenhauer": '“Compassion is the basis of morality.”',
    "― Erwin Schrödinger": '“The present is the only thing that has no end.”',
    "― Lao Tzu": '“When I let go of what I am, I become what I might be.”',
    "― Unknown": '“You only lose what you cling to.”',
    "― Thich Nhat Hanh": '“To be beautiful means to be yourself. You don’t need to be accepted by others. You need to accept yourself.”',
    "― Maya Angelou": '“Hate, it has caused a lot of problems in the world, but has not solved one yet.”',
    "― Deeyah Khan": '"Self-expression should not be a challenge that demands extraordinary talent but should be a right accessible to all."',
    "― Peter Singer": '“What one generation finds ridiculous, the next accepts; and the third shudders when it looks back on what the first did.”',
    "― Elif Shafak": '“Do not go with the flow. Be the flow.”',
    "― Nelson Mandela": "“Resentment is like drinking poison and then hoping it will kill your enemies.”",
    "― Nisargadatta Maharaj": '“You will receive everything you need when you stop asking for what you do not need”',
    "― Bhagavad Gita II, 47": '“Be intent on action, not on the fruits of action, avoid attraction to the fruits and attachment to inaction!"',
    "― Rumi": '“Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.”',
    "― Plato": '“Be kind, for everyone you meet is fighting a harder battle.”',
    "― Marcus Aurelius": '“Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.”',
    "― Virginia Woolf": '“All extremes of feeling are allied with madness.”'
  };

  // get all keys (authors)
  var keys = Object.keys(quotes);
  // get a random key (author) and store it in var name 'author'
  var author = keys[Math.floor(Math.random() * keys.length)];
  // get the value (quote) that belongs to that key
  var quote = quotes[author];


// change inner html tags and reassign it with stored variables in 'author' and 'quote'

  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author-name").innerHTML = author;
}
