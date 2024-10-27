const myQuotes = [
    "Comparison kills creativity.",
    "Only you and you alone can change your situation.",
    "Don't compare your chapter 1 to someone else's chapter 20.",
    "Only person who can help you is you.",
    "The purpose of our lives is to be happy."
];

function quoteGenerator() {
    const randomIndex = Math.floor(Math.random() * myQuotes.length);
    $('#quote').fadeOut(1500, function() {
        $(this).text(myQuotes[randomIndex]).fadeIn(2000);
    });
}

$('#new-quote').on('click', quoteGenerator);


const initialIndex = Math.floor(Math.random() * myQuotes.length);
$('#quote').text(myQuotes[initialIndex]).show();
