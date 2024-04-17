export const generateComponentTable = (routesObject, componentsArray) => {

  const componentTable = {};
  const values = Object.values(routesObject)

  if (values.length > componentsArray.length || componentsArray.length > values.length)
    throw new Error('GenerateComponentTable Length Error: ')
  // If the lengths are not equal, throw an error

  for (let i = 0; values.length > i; i++) {
    componentTable[values[i]] = componentsArray[i]
  }

  return componentTable;
};


export const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn.apply(this, args), delay)
  }
}
export const scrollUp = () => {
  window.addEventListener("load", () => {
    window.scrollTo(0, 0); // scroll to start position when website is loaded
  })
}

export const convertToDate = (timestamp) => {
  const date = new Date(timestamp * 1000)

  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Month is zero-based, so we add 1
  const day = date.getDate();

  const formattedDate = `${day.toString().padStart(2, '0')}.${month.toString().padStart(2, '0')}.${year}`;

  return formattedDate // Output: 08.03.2024
}