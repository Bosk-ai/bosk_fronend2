export const formatDate = (dateString) => {
  const monts = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const date = new Date(dateString);
  const month = monts[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month} ${day}, ${year} `
};

const handleAddZero = (number) => number > 10 ? number : `0${number}`;

export const formatInputDate = (dateString) => {
  const date = new Date(dateString);
  const month = date.getMonth()
  const day = date.getDate();
  const year = date.getFullYear();

  return `${handleAddZero(year)}-${handleAddZero(month)}-${handleAddZero(day)}`
}

