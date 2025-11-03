### Sending requests to /api route

The frontend is meant to send requests to the `/api` route on the server.
To send a request, you can use the `fetch` function and provide the full URL of the API endpoint.

Example:
```ts
const response = await fetch('/api/endpoint', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
```