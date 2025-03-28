function destinationMapper(arr) {
    let text = arr[0]
    let pattern = /(=|\/)(?<destination>[A-Z][A-Za-z]{2,})\1/g;
    let match = Array.from(text.matchAll(pattern));
    let travelPoints = 0;
    let destinations = [];
    for (const element of match) {
        let destination = element.groups.destination;
        destinations.push(destination)
        travelPoints += destination.length;
    }

    console.log(`Destinations: ${destinations.join(`, `)}`);
    console.log(`Travel Points: ${travelPoints}`);






}
destinationMapper([`ThisIs some InvalidInput`])