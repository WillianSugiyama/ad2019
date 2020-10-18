const draw = async (peoples) => {
  if(peoples.length % 2 !== 0) {
    return false;
  }

  const result = [];
  const people = peoples.slice();


  for(let i = 0; i < peoples.length; i++) {
    let sender = peoples[i];
    let peopleIndex = Math.floor(Math.random() * people.length);

    while(people[peopleIndex] === sender) {
      peopleIndex = Math.floor(Math.random() * people.length);
    }

    const receiver = people.splice(peopleIndex, 1)[0];

    result.push({
      sender: sender,
      receiver: receiver
    });
  };

  return result;
}

export default draw;