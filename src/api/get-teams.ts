import { api } from "../lib/axios";

export async function getTeams() {
  const { data } = await api.get('');

  return data;
}
