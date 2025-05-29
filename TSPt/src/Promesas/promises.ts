export function fetchData(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous network request
    setTimeout(() => {
      if (Math.random() > 0.5) { 
        resolve("Data fetched successfully!"); 
      } else { 
        reject(new Error("Network error")); 
      }
    }, 1000); 
  });
}

export async function fetchDataWithAsyncAwait(url: string): Promise<string> {
  try {
    const response = await fetch(url);
    const data = await response.text();
    return data;
  } catch (error) {
    throw new Error(`Error fetching data: ${error}`);  
  }
}