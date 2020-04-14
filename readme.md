# Snake to Camel

This is a small web app for converting snake case text to camel case. Enter snake case terms separated by whitespace and the camel case will be generated automatically.

The input can be mixed upper/lower case snake case or kebab case, the latter of which I didn't know existed. For example

```
TERM_ONE term-two Term_Three
```

will become

```
termOne termTwo termThree
```

Clicking the _capitalize first_ checkbox will convert all `camelCase` terms to `CamelCase` (also known as pascal case).
