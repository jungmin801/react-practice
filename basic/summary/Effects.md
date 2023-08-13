# Effects 정리

# useEffect

## 언제 사용할까?

- 기본적으로 state가 변경될 때마다 재렌더링이 일어난다.
- 하지만 처음에만 렌더링하고 다시 렌더링하지 않도록 하려면?? (예를 들어, api call 등)
- 특정 코드의 실행을 제한하고 싶을 때 사용한다.

```jsx
function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter((prev) => prev + 1);
  console.log('i run all the time');

  useEffect(()=>{
    console.log('Call the API')
    }, []); // 한번만 출력됨

  return (
    <div className="App">
        <h1>{ counter }</h1>
        <button onClick={ onClick }>Click me</button>
    </div>
  );
}
```

- 코드의 특정한 부분만이 변했을 때, 원하는 코드를 실행하고 싶을 경우라면? Dependency를 이용한다.


```jsx

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log('i run all the time');

  useEffect(()=>{
    console.log('Call the API');
  },[]);

  useEffect(()=>{
    console.log('Search for', keyword);
  },[keyword]); // keyword가 변할때(input값을 입력할때)만 실행된다.

  
  return (
    <div className="App">
      <input
            value={ keyword }
            onChange={ onChange }
            type="text"
            placeholder="Search here..."></input>
      <h1>{ counter }</h1>
      <button onClick={ onClick }>Click me</button>
    </div>
  );
}
```

## Clean Up Function
- useEffect를 실행하기 전에 특정 코드를 먼저 실행하고 싶을 때 사용한다.
- return 안에 적힌 코드가 먼저 실행된다.

```jsx
function Hello(){
  function byeFn(){
    console.log('bye :(')
  }

  function hiFn(){
    console.log('Created :)');
    return byeFn; 
  }
  useEffect(hiFn, []);
  return <h1>hello</h1>
}

```
