export default async function getCapsules (url) {
    const response = await fetch(url)
    return await response.json()
  }

  

 