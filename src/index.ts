import pluralize from 'pluralize';
import { createInterface } from 'node:readline/promises';
import { words, articles, pluralities } from './languages/german/words.js';
import { getRandomItem, getRandomItemWithWeights } from './utils.js';
import { sentences } from './languages/german/sentences.js';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    historySize: 0,
});

async function main() {
    while (true) {
        // Get a random sentence (add more weight to the simple case)
        const { sentence, meaning, categories, type } = getRandomItemWithWeights(sentences, [4]);

        // Get a random word and plurality to generate the conjugation
        const word = getRandomItem(words.filter((w) => categories.includes(w.category)));
        const plurality = getRandomItemWithWeights(pluralities, [3, 1]);

        // Put together parameters for the sentence and meaning creation
        const isPlural = plurality === 'plural';
        const noun = !isPlural ? word.noun : word.plural;
        const translation = !isPlural ? word.meaning : pluralize.plural(word.meaning);

        // Generate the question and the solution
        const questionSentence = sentence({ isPlural, noun });
        const translationSentence = meaning({ isPlural, noun: translation });
        const solution = articles[plurality][word.gender][type];

        // Read the user input
        const answer = await rl.question(`${questionSentence} (${translationSentence}) `);

        // Compare the use input with the solution
        if (answer.trim() === solution) {
            // TODO: add colors
            console.log('Great job!');
        } else {
            // Print the correct solution if it is wrong
            const solutionSentence = sentence({ isPlural, noun, solution });
            const explanationSentence = `No, the solution is "${solutionSentence}".`;

            // Add more information for the cases
            // For example: den Menschen (dative) -> die Menschen (plural) -> der Mensch (masculine)
            const detailedExplanation = [
                `${solution} ${noun} (${type === 'nominative' ? word.gender : type})`,
            ];
            if (isPlural) {
                const pluralNominative = articles.plural[word.gender].nominative;
                detailedExplanation.push(`${pluralNominative} ${word.plural} (plural)`);
            }
            if (type !== 'nominative') {
                const nominative = articles.singular[word.gender].nominative;
                detailedExplanation.push(`${nominative} ${word.noun} (${word.gender})`);
            }
            console.log(`${explanationSentence}\n  ${detailedExplanation.join(' -> ')}`);

            // TODO: add hints for usual cases (e.g. das for -chen)
        }
    }
}

main();
