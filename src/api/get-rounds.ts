import { api } from "../lib/axios";

export async function getRounds() {
  const { data } = await api.get('');

  return data;
}
