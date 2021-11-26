## Explanation of error

This error is relevant as of typescript v4.5.2.

Function types seem to allow for excess properties, however typing a function using the equivalent parameter and return types gives a compiler error as expected. See index.ts
