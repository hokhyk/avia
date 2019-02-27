export const fetchGet = (url) => {
  const request = {
    credentials: 'include',
    method: 'GET',
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
  };
  return fetch(url, request);
};

export const fetchPost = (url, data) => {
  const request = {
    credentials: 'include',
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
  };
  return fetch(url, request);
};

export const fetchPut = (url, data) => {
  const request = {
    credentials: 'include',
    method: 'PUT',
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    body: JSON.stringify(data),
  };
  return fetch(url, request);
};
