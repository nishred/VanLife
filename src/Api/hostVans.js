export async function fetchHostVans() {
  const response = await fetch("/api/host/vans");

  const json = await response.json();

  return json.vans;
}
