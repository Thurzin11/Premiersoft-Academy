import axios from "axios";

export async function getPizzas(): Promise<IPizza[]> {
  try {
    const response = await axios.get<IPizza[]>(
      `${process.env.NEXT_PUBLIC_HOST}/pizza`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getPizzaById(id: string): Promise<IPizza> {
  try {
    const response = await axios.get<IPizza>(
      `${process.env.NEXT_PUBLIC_HOST}/pizza/${id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return {} as IPizza;
  }
}

export async function getCategories(): Promise<ICategory[]> {
  try {
    const response = await axios.get<ICategory[]>(
      `${process.env.NEXT_PUBLIC_HOST}/category`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getPizzasByCategory(id: string): Promise<IPizza[]> {
  try {
    const response = await axios.get<IPizza[]>(
      `${process.env.NEXT_PUBLIC_HOST}/pizza/byCategory/${id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getCategoryById(id: string): Promise<ICategory> {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_HOST}/category/${id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return {} as ICategory;
  }
}

export async function createCategory(category: {
  name: string;
  description: string;
}) {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_HOST}/category`,
      category
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function createPizza(pizza: { name: string; description: string; price: number; isAvailable: boolean; categories: ICategory[] }) {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_HOST}/pizza`,
      pizza
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getCategoriesByName(
  nameSearch: string
): Promise<ICategory[]> {
  try {
    console.log(nameSearch);
    const response = await axios.get<ICategory[]>(
      `${process.env.NEXT_PUBLIC_HOST}/category/name/${nameSearch}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
