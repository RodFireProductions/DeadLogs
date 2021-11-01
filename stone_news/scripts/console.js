/*
    Rodrick hates their life.
--------------------------- # # # # #
    Welcome to the console log file!

    This is merely here to add some flavor to the underhood
    of your site.

    Just right click on your site and hit inspect to see it
    in the console log.

*/

// Feel free to change the default settings! ♡
credit({
	emoji: "○",
	name: siteName,
    author: author.name,
	description: [
        "I see you're looking under the hood of my site.",
        "Caught ya redhanded, didn't I?",
        "--------------------------------",
        "✨Trans Rights has been and will always be Human Rights!✨",
        "♡ POC lives will always matter! ♡",
		"Created using DeadJournals by Rodrick 'RodFireProductions'"
    ]
});

// Thank you Elliot Herriman for making th cool credit code. Very nice. Very nice.

function throwIntoVoid(func, ...parameters) {
	setTimeout(func.bind(console, ...parameters));
}

function credit(credits) {
	if (credits && credits.name) {
		throwIntoVoid(console.groupCollapsed, (credits.emoji ? credits.emoji + " " : "") + credits.name + (credits.author ? " %cby " + credits.author: "%c") + (credits.emoji ? " " + credits.emoji : ""), "color: grey");

		if (credits.description) {
			if (typeof credits.description === "string") {
				print(credits.description);
			} else {
				credits.description.forEach((line) => print(line));
			}
		}
    }

	function print(line) {
		if (typeof line == "string") {
			throwIntoVoid(console.log, line);
		} else if (line.length) {
			throwIntoVoid(console.log.apply, line);
		}
    }
}
