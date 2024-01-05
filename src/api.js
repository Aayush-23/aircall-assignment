const BASE_URL = `https://cerulean-marlin-wig.cyclic.app/activities`;

const moveActivityApi = async (id, value) => {
  const url = `${BASE_URL}/${id}`;
  return await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ is_archived: value }),
  });
};

const fetchActivitiesApi = async () => {
  const url = `${BASE_URL}`;
  return await fetch(url);
};

export { moveActivityApi, fetchActivitiesApi };
