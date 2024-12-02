import axios from "axios";

const getLatestRepos = async (data, token) => {
  try {
    const username = data.githubUsername;

    const url = `https://api.github.com/users/${username}/repos?sort=created&direction=desc`;

    const headers = token
      ? {
          Authorization: `Bearer ${token}`,
        }
      : {};

    const res = await axios.get(url, { headers });
    const repos = res.data;
    const latestSixRepos = repos.slice(0, 6); // Select the latest 6 repositories

    return latestSixRepos;
  } catch (err) {
    console.error("Error fetching repositories:", err.response?.data || err.message);
    return [];
  }
};

export default getLatestRepos;
