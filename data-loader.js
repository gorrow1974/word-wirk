export const DATA_FILE = "./data/cles_data_2026-05-17_reflected.json";

export async function loadClesData() {
  const res = await fetch(DATA_FILE, { cache: "no-store" });
  if (!res.ok) throw new Error(`failed to load ${DATA_FILE}: ${res.status}`);
  return await res.json();
}
