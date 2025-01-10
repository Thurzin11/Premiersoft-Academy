import axios from "axios";

export async function getPizzas(): Promise<IPizza[]> {
  try {
    const response = await axios.get<IPizza[]>(`${process.env.HOST}/pizza`);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getPizzaById(id: string): Promise<IPizza> {
  try {
    const response = await axios.get<IPizza>(`${process.env.HOST}/pizza/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return {} as IPizza;
  }
}

export async function getCategories(): Promise<ICategory[]> {
  try {
    const response = await axios.get<ICategory[]>(
      `${process.env.HOST}/category`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
