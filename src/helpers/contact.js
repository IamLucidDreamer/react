import { API } from '../api';

export const updateContact = (data, token) => {
  const url = `${API}/contact/update`;
  return fetch(url, {
    method: 'PUT',
    headers: {
      Accept: 'application/JSON',
      'Content-Type': 'application/JSON',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};