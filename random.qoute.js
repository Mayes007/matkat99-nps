const quotes = [
"never tell  me the odds,", // Han Solo 
"do or do not, there is no try,", // Yoda
"i find your lack of faith disturbing,", // Darth Vader
"it's a trap!", // Admiral Ackbar
"i've got a bad feeling about this,", // multiple characters
"i am your father,", // Darth Vader
"i love you,", // Leia Organa
"i know,", // Han Solo
"may the force be with you,", // multiple characters
"i've got a bad feeling about this,", // multiple characters
"I will finish what you started.", // Kylo Ren
"Chewie, we're home.", // Han Solo
"I won't lose you the way I lost my mother.", // Anakin Skywalker
"I am a Jedi, like my father before me.", // Luke Skywalker
"Your focus determines your reality.", // Qui-Gon Jinn
"Your eyes can deceive you; don't trust them.", // Obi-Wan Kenobi
"In my experience, there's no such thing as luck.", // Obi-Wan Kenobi
"Who's the more foolish, the fool or the fool who follows him?", // Obi-Wan Kenobi
"Why, you stuck-up, half-witted, scruffy-looking nerf herder!", // Leia Organa
"I am become more powerful than any Jedi has ever dreamed of.", // Anakin Skywalker
"This is where the fun begins.", // Anakin Skywalker


];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

console.log(getRandomQuote());