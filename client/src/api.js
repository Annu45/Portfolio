const BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

async function get(path) {
  const res = await fetch(`${BASE}${path}`);
  if (!res.ok) throw new Error(`Failed to load ${path}`);
  return res.json();
}

export const api = {
  getProjects: () => get('/projects'),
  getSkills: () => get('/skills'),
  getAchievements: () => get('/achievements'),
  getExperience: () => get('/experience'),
  getLeadership: () => get('/leadership'),
  sendMessage: (payload) =>
    fetch(`${BASE}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).then(async (res) => {
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Failed to send message');
      return data;
    })
};
