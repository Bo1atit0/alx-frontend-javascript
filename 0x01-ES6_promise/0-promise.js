export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const success = 1;

    if (success) {
      resolve('API call successful');
    } else {
      reject(new Error('API call failed'));
    }
  });
}
