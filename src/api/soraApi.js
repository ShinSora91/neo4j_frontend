export const soraGet = async (payload) => {
  const res = await axios.get(`neo4jbackend-production-f300.up.railway.app`,
    payload
  );

  return res.data;
};