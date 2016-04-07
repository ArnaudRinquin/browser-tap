export default [
  {
    "type": "test",
    "name": "<Foo />",
    "id": 0
  },
  {
    "id": 0,
    "ok": true,
    "name": "has a clickable button",
    "operator": "ok",
    "actual": true,
    "expected": true,
    "test": 0,
    "type": "assert"
  },
  {
    "type": "end",
    "test": 0
  },
  {
    "type": "test",
    "name": "<MyComponent />",
    "id": 1
  },
  {
    "id": 0,
    "ok": false,
    "name": "renders three <Foo /> components",
    "operator": "equal",
    "actual": 3,
    "expected": 4,
    "error": {},
    "functionName": "Test.assert",
    "file": "//localhost:8080",
    "line": 8080,
    "at": "Test.assert [as _assert] (http://localhost:8080/bundle.js:13227:18)",
    "test": 1,
    "type": "assert"
  },
  {
    "id": 1,
    "ok": true,
    "name": "renders an `.icon-star`",
    "operator": "equal",
    "actual": 1,
    "expected": 1,
    "test": 1,
    "type": "assert"
  },
  {
    "id": 2,
    "ok": true,
    "name": "renders children when passed in",
    "operator": "ok",
    "actual": true,
    "expected": true,
    "test": 1,
    "type": "assert"
  },
  {
    "type": "end",
    "test": 1
  },
  {
    "type": "test",
    "name": "top level test case",
    "id": 2
  },
  {
    "id": 0,
    "ok": true,
    "name": "top-level assertion",
    "operator": "ok",
    "actual": true,
    "expected": true,
    "test": 2,
    "type": "assert"
  },
  {
    "type": "test",
    "name": "sub level test case",
    "id": 4,
    "parent": 2
  },
  {
    "id": 0,
    "ok": true,
    "name": "sub level assertion",
    "operator": "ok",
    "actual": true,
    "expected": true,
    "test": 4,
    "type": "assert"
  },
  {
    "type": "end",
    "test": 4
  },
  {
    "type": "end",
    "test": 2
  },
  {
    "type": "test",
    "name": "using some extra lib",
    "id": 3
  },
  {
    "id": 0,
    "ok": true,
    "name": "works perfectly well",
    "operator": "ok",
    "actual": true,
    "expected": true,
    "test": 3,
    "type": "assert"
  },
  {
    "type": "end",
    "test": 3
  }
]
