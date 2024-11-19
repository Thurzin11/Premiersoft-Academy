const url = "https://jsonplaceholder.typicode.com/albums/1/photos";

async function getAlbum() {
  try {
    const response = await fetch(url);
    const dados = await response.json();
    console.log(dados);
  } catch (error) {
    console.error(error);
  }
}

getAlbum();
