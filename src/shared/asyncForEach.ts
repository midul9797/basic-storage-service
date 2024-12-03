/**
 * Asynchronously executes a callback function for each element in an array
 * @param array - The array to iterate over
 * @param callback - Async function to execute for each element, receives (element, index, array)
 */
export const asyncForEach = async (array: any[], callback: any) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
};
