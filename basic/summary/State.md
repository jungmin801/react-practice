React 기초 
==========================
# 리액트의 멋진 점
1. 리액트는 interactivity에 중점을 두었다.
2. 따로 html을 작성하지 않아도 html태그를 생성할 수 있고, 보관해두었다가 재사용도 가능하다.
    - 이때 jsx를 사용한다. jxs는 자바스크립트 확장 문법으로 리액트에서 html을 작성할 때 사용할 수 있다.
3. 오래된 만큼 유저도 많다.
4. 재렌더링을 할 때, 바뀐 데이터 부분만 재렌더링할 수 있다.
5. SPA를 구축할 수 있다.




# State
## 왜 사용할까?
 - 일반 변수를 변경하면 html에 자동으로 반영이 되지 않는다. html에 반영을 해주고 싶다면 재렌더링하는 코드를 원할 때마다 실행해줘야한다. 
 - state를 이용하면 데이터가 변경되었을 때 자동으로 재렌더링이 된다. 그것도 변경된 부분만!

## 어떻게 사용할까?
```jsx
const [data, setData] = useState(0);
```
- state와 그 state를 변경하는 함수로 이루어져있다.
- state를 직접 변경하면 값이 변하긴 하지만 html에 자동으로 반영이 안된다.
- state를 변경하는 함수를 이용해서 값을 변경해주면 html에 자동으로 반영된다.
- state 변경함수를 쓸 때는 직접 값을 주는 것보다는 현재 값을 기준으로 할 수 있도록 함수를 이용하는 것이 좋다. (에러 방지) 

```jsx
function App() {
        const [counter, setCounter] = React.useState(0);
        const onClick = () => {
            //setCounter(counter + 1)
            setCounter((current) => current + 1) // counter의 현재 값을 기준으로 계산된다.
        }

        return (
            <div>
                <h3>
                    Total Click : {counter}
                </h3>
                <button onClick={ onClick }>
                    Click Me
                </button>
            </div>
        )
    }
```

- input에 입력한 값을 가지고 오고 싶다면? value 속성과 onChange를 이용한다.
```jsx
function App() {
        const [minutes, setMinutes] = React.useState(); 
        const onChange = (event) =>{ 
            setMinutes(event.target.value);
        }
        return (
            <div>
                <label htmlFor="minutes">Minutes</label>
                <input 
                    value={ minutes } 
                    id="minutes" 
                    placeholder="Minutes" 
                    type="number"
                    onChange={ onChange }
                />
                <h4>You want to convert {minutes}</h4>
            </div>
        )
    };

```