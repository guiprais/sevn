import { api } from "../../lib/axios";
import { IRound } from "../../types/rounds";

export async function getRounds() {
  const { data } = await api.get<IRound[]>('');

  return data;
}
