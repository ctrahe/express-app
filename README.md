## Requirements:

- State stored in a global object for simplicity
- Datamodel suggestion: a list of strings, the index of the string is the identifier
    - note difference between for-in and for-of iteration in Javascript
- GET /todos redirects to /todos/
- GET /todos/ returns a list in format [“put on sock”, “put on shoe”, “tie laces”]
- GET /todos/:id fetches a todo item {“title”: “put on sock”, “idx”: 0}
- DELETE /todos/:id will remove a todo item
- PUT /todos/:id will overwrite the item at the index with the contents of the request body (e.g. a string)
- POST /todos/ will append the request body (e.g. a string) to the list of strings in memory
- Try to use mocha.js and expect.js to write a unit test suite to test the API. Using setup and teardown methods and sub-suites can help organize the tests.

## Learnings / Good focus areas 

Debugging in VSCode:
- Debug: Toggle Auto Attach - Always
- Run nodemon index.ts, debugger will auto-attach and intercept any requests

Running locally with auto-reload:
```
yarn global add nodemon
nodemon index.ts
```