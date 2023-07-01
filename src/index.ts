import pluralize from 'pluralize';
import { createInterface } from 'node:readline/promises';
import { words, articles, pluralities, cases } from './languages/german/words.js';
import { getRandomItem, getRandomItemWithWeights } from './utils.js';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});

async function main() {
    while (true) {
        const word = getRandomItem(words);
        const plurality = getRandomItemWithWeights(pluralities, [3, 1]);
        const randomCase = getRandomItemWithWeights(cases, [2, 1, 1]);

        const question = plurality === 'singular' ? word.noun : word.plural;
        const meaning = plurality === 'singular' ? word.meaning : pluralize.plural(word.meaning);
        const solution = articles[plurality][word.gender][randomCase];

        const answer = await rl.question(`${randomCase}: ___ ${question} (${meaning}) `);
        if (answer === solution) {
            console.log('Great job!');
        } else {
            const explanation = [`No it's ${solution} ${question}.`];
            if (randomCase !== 'nominative') {
                if (plurality === 'plural') {
                    const pluralNominative = articles.plural[word.gender].nominative;
                    explanation.push(`Plural form is ${pluralNominative} ${word.plural}.`);
                }

                const nominative = articles.singular[word.gender].nominative;
                explanation.push(`Nominative form is ${nominative} ${word.noun} (${word.gender}).`);
            }

            console.log(explanation.join(' '));
        }
    }
}

main();
