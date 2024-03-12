function spareChairs(rooms, need) {
    let chairsTaken = 0;
    const chairsToTake = [];

    for (let i = 0; i < rooms.length && chairsTaken < need; i++) {
        // const  = rooms[i][1];
        const [occupants, chairsAvailable] = rooms[i];
        const numOccupants = occupants.split('').length;
        const chairsNeeded = Math.max(0, need - chairsTaken);

        if (numOccupants < chairsAvailable) {
            const chairsToTakeFromRoom = Math.min(chairsNeeded, chairsAvailable - numOccupants);
            chairsTaken += chairsToTakeFromRoom;
            chairsToTake.push(chairsToTakeFromRoom);
        } else {
            chairsToTake.push(0);
        }
    }

    return chairsToTake;
}

// Example usage:
const rooms = [['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX', 2]];
const need = 4;
console.log(spareChairs(rooms, need));
