test
```react
react virtual dom 
Link :https://github.com/acdlite/react-fiber-architecture

virtual Dom :
The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM

The key points are:

1)In a UI, it's not necessary for every update to be applied immediately; in fact, doing so can be wasteful, causing frames to drop and degrading the user experience.

2)Different types of updates have different priorities — an animation update needs to complete more quickly than, say, an update from a data store.

3)A push-based approach requires the app (you, the programmer) to decide how to schedule work. A pull-based approach allows the framework (React) to be smart and make those decisions for you.

```