import axios from "axios";

export async function getPizzas(): Promise<IPizza[]> {
  try {
    const response = await axios.get<IPizza[]>(
      `${process.env.HOST}/pizzas`,
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
