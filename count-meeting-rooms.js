// Count how many meeting rooms will be needed according to given array of starting and ending hours of meetings.
// F.ex [[10,12],[11,14],[15,17],[17,18]] this schedule needs 2 rooms.

const countRooms = (arr) => {
  const rooms = 0;
  const schedules = [];
  const meetings = {};

  for (let i = 0; i < arr.length; i++) {
    for (let j = arr[i][0]; j < arr[i][1]; j++) {
      schedules.push(j);
    }
  }
  for (let i = 0; i < schedules.length; i++) {
    meetings[schedules[i]] = meetings[schedules[i]]
      ? meetings[schedules[i]] + 1
      : 1;
  }
  return Math.max(...Object.values(meetings));
};

// Following schedule needs 2 rooms:
console.log(
  countRooms([
    [10, 12],
    [11, 14],
    [15, 17],
    [17, 18],
  ])
);

// Following schedule needs 3 rooms:
console.log(
  countRooms([
    [10, 12],
    [11, 14],
    [15, 17],
    [17, 18],
    [17, 18],
    [17, 18],
  ])
);
