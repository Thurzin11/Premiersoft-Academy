import axios from "axios";
import { IUserCreate } from "../../models/IUserCreate";

export async function getPizzas(token: string): Promise<IPizza[]> {
  try {
    const response = await axios.get<IPizza[]>(
      `${process.env.NEXT_PUBLIC_HOST}/pizza`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
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

export async function getCategories(token: string): Promise<ICategory[]> {
  try {
    const response = await axios.get<ICategory[]>(
      `${process.env.NEXT_PUBLIC_HOST}/category`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getPizzasByCategory(
  id: string,
  token: string
): Promise<IPizza[]> {
  try {
    const response = await axios.get<IPizza[]>(
      `${process.env.NEXT_PUBLIC_HOST}/pizza/byCategory/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getCategoryById(
  id: string,
  token: string
): Promise<ICategory> {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_HOST}/category/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return {} as ICategory;
  }
}

export async function createCategory(
  category: {
    name: string;
    description: string;
  },
  token: string
) {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_HOST}/category`,
      category,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function createPizza(
  pizza: {
    name: string;
    description: string;
    price: number;
    isAvailable: boolean;
    categories: ICategory[];
  },
  token: string
) {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_HOST}/pizza`,
      pizza,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getCategoriesByName(
  nameSearch: string,
  token: string
): Promise<ICategory[]> {
  try {
    console.log(nameSearch);
    const response = await axios.get<ICategory[]>(
      `${process.env.NEXT_PUBLIC_HOST}/category/name/${nameSearch}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function createUser(user: IUserCreate) {
  try {
    console.log(user);
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_HOST}/user`,
      user
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
