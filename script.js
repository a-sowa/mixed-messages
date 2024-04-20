// Messages components
const activitiesIdeas = ['read a book', 'listen to music', 'take care of you', 'call a friend', 'learn something new'];
const motivations = ['pleasant', 'cool', 'funny', 'stimulating', 'exciting', 'rewarding', 'comforting'];
const momentsSuggestions = ['at the end of the day', 'during the morning', 'in the evening', 'when it\'s most convenient for you'];

// Generates random index for messages
const getRandomIndex = arr => Math.floor(Math.random() * arr.length);

const genarateMessage = () => {
    // Generates different parts of the message
    const motivation = motivations[getRandomIndex(motivations)];
    const activity = activitiesIdeas[getRandomIndex(activitiesIdeas)];
    const moment = momentsSuggestions[getRandomIndex(momentsSuggestions)];
    const mixedMessage = `Today, it could be ${motivation} to ${activity} ${moment}!`; // Assembles the message
    const errorMessage = 'Oops, something gone wrong...'
    return motivation && activity && moment ? mixedMessage : errorMessage;
}

console.log(genarateMessage());