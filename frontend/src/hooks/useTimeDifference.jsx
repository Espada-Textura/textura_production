export const useTimeDifference = (time) => {
  let difference = Date.now() - time * 1000;

  const daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);

  difference -= daysDifference * 1000 * 60 * 60 * 24;

  const weeksDifference = Math.floor(daysDifference / 7);
  const monthsDifference = Math.floor(daysDifference / 30);
  const yearDifference = Math.floor(daysDifference / 365);

  const hoursDifference = Math.floor(difference / 1000 / 60 / 60);
  difference -= hoursDifference * 1000 * 60 * 60;

  const minutesDifference = Math.floor(difference / 1000 / 60);
  difference -= minutesDifference * 1000 * 60;

  const secondsDifference = Math.floor(difference / 1000);

  return {
    all: {
      yearDifference,
      monthsDifference,
      weeksDifference,
      daysDifference,
      hoursDifference,
      minutesDifference,
      secondsDifference,
    },
    biggest: !yearDifference
      ? !monthsDifference
        ? !weeksDifference
          ? !daysDifference
            ? !hoursDifference
              ? !minutesDifference
                ? secondsDifference
                : minutesDifference
              : hoursDifference
            : daysDifference
          : weeksDifference
        : monthsDifference
      : yearDifference,
  };
};
