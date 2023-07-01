export function getRandomItem<T>(arr: readonly T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}

export function getRandomItemWithWeights<T>(arr: readonly T[], weights: readonly number[] = []): T {
    const absoluteWeights = Array.from({ length: arr.length }, (_, i) =>
        weights[i] ? weights[i] : 1
    );
    const weightSum = absoluteWeights.reduce((acc, weight) => acc + weight, 0);
    const normalWeights = absoluteWeights.map((weight) => weight / weightSum);

    const rnd = Math.random();
    let w = 0;
    for (const i in normalWeights) {
        w += normalWeights[i];
        if (rnd < w) {
            return arr[i];
        }
    }
    throw new Error('Weights did not match up.');
}
