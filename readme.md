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

Props In React :
-the props are a type of object where the value of attributes of a tag is stored. The word “props” implies “properties”.
-props, or properties, are objects that pass data from one component to another
1)Props are used to pass data between components in a ReactJS application.

2) Props are passed in a unidirectional flow from parent to child component.

3)  Props are similar to HTML attributes, but can pass any JavaScript value, including objects, arrays, and functions

4)Props data is read-only, so child components can't change data from the parent component.


```

## React Router
``` javascript


The React Router is a JavaScript library that helps developers manage routing in React applications.It enables developers to create complex navigation structures, manage different URL paths, and render specific components based on the current route.

React Router's role: This library is invaluable for managing routing in both SPA and MPA architectures, providing a consistent and efficient way to navigate between different components or pages.

SPA: A single HTML page is loaded initially, and subsequent interactions update the page dynamically without requiring full reloads.
MPA: Multiple HTML pages are loaded as needed, each representing a distinct view or resource.

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user:/userid' element={<User/>}/>
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github/>}
      />

    </Route>
  )
)



```
