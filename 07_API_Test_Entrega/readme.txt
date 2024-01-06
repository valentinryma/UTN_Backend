Postman acces_token:
    curl --location 'https://dev-utn-frc-iaew.auth0.com/oauth/token' \
    --header 'content-type: application/json' \
    --header 'Cookie:
    did=s%3Av0%3A76204e80-0ef1-11ee-8e12-b99ba3014b47.fKR174NkC7L0s9Z8riCysG
    37mMeRVakoS%2BTtye2lC3g;
    did_compat=s%3Av0%3A76204e80-0ef1-11ee-8e12-b99ba3014b47.fKR174NkC7L0s9Z
    8riCysG37mMeRVakoS%2BTtye2lC3g' \
    --data '{
    "client_id": "QiW8AlH9oykBg7ofBrHs6ToYvrdmhOeE",
    "client_secret":
    "7kZPQqNnhRAuCXipSVSdHUsV9MzgfUzBB3AYbfemGPqxtpXI6j1GNxDBfYBSUume",
    "audience": "http://localhost:3000/api/biblioteca",
    "grant_type": "client_credentials"
    }'

Postman cURL:
curl --location 'http://localhost:3000/api/libros' \
--header 'Authorization: Bearer TOKEN'

curl --location 'http://localhost:3000/api/libros' \
--header 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InBNSWhvbzg5VUxkeUlPRmFfNFBtXyJ9.eyJodHRwczovL2V4YW1wbGUuY29tL2NsaWVudF9uYW1lIjoiQ2xpZW50ZSBBUEkgUHJvZHVjdG8iLCJpc3MiOiJodHRwczovL2Rldi11dG4tZnJjLWlhZXcuYXV0aDAuY29tLyIsInN1YiI6IlFpVzhBbEg5b3lrQmc3b2ZCckhzNlRvWXZyZG1oT2VFQGNsaWVudHMiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2JpYmxpb3RlY2EiLCJpYXQiOjE3MDQ0OTA1MzksImV4cCI6MTcwNDU3NjkzOSwiYXpwIjoiUWlXOEFsSDlveWtCZzdvZkJySHM2VG9ZdnJkbWhPZUUiLCJzY29wZSI6InJlYWQ6bGlicm9zIHdyaXRlOmxpYnJvcyIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.eXyStC8NCgIQAmKl-DYwlz3pAAX4tbHG78GKGbGGATx8MK16oTZDaky_69-Gn72Wta0TU6bcyFR6_psr4lclggBjyMlC5lUqK1cYXy7OR6yOpMDrlPy3zIJON-8qZapnIjngPaSFNPJOZpozyuiSERbNJcyYnjHK3Me1OctHQgA9wiEVpOcjLrzpzcIuq_AvBaXS9QuSyMOemZ6QsnMt9J2PvDmQyf6b_SUPPp0VdkUOlLhmEAl3v3lN9va47Dl46prjzDcKGtgqV1W2owFOiWU4cT8NEV-1K4-gSJ9sXlCoMlunSO4zT5N9N9cvmRPULmfIzwHjfBn6IfRmQBXH6A'

Pruebas Unitaras:
npm i --save-dev jest

Pruebas de Integración:
npm i --save-dev supertest