# Props 공부 정리

# Props는 왜 쓸까?

- 부모 컴포넌트에 있는 데이터를 자식에게 전달하기 위해서는 props로 전송해야한다.

```jsx
function App() {
  return (
    <div>
      <Btn text="Save Changes"/>
      <Btn text="Continue" />
    </div>
  );
}

function Btn({ text, big }) {
  return (
    <button
      style={{
        backgroundColor: "tomato",
        color: "white",
        padding: "10px 20px",
        border: 0,
        borderRadius: 10,
        fontSize: big ? 18 : 16,
      }}
    >
      { text }
    </button>
  );
}
```

- Btn은 function이므로, `Save Changes`, `Continue`가 담긴 객체를 인자로 전달하는 것이라고 볼 수 있다.
- 자식 컴포넌트에서 해당 props를 쓰려면, `props.text`로 쓸 수 있다. `Object.key`의 형태라고 할 수 있다.


**주의할점**
- props로는 불리언, 함수, 문자열, 숫자 등 다양하게 보낼 수 있다.
- 다만, props를 보내면 반드시 컴포넌트에서 받아서 원하는 곳에 넣어줘야 적용이 된다.

# Memo
- props가 변경되지 않으면 재렌더링하지 않도록 설정할 수 있다.

```js
function Btn({ text, changeValue }) {
    console.log(text, "was rendered");
    return (
        <button
            onClick= { changeValue }
            style={{
                backgroundColor: 'tomato',
                color: 'white',
                padding: '10px 20px',
                border: 0,
                borderRadius: 10,
            }}>
            { text }
        </button>)
}

const MemorizedBtn = React.memo(Btn);
// state가 변경되지 않는다면 Btn은 재렌더링 되지 않는다. -> 렌더링을 컨트롤할 수 있다.


function App() {
    const [value, setValue] = React.useState('Save Changes')
    const changeValue = () => setValue('Revert Changes')

    return (
        <div>
            <MemorizedBtn text={value} changeValue={changeValue} />
            <MemorizedBtn text="Continue" />
        </div>
    )
};
```

# PropTypes
- props의 타입을 이미 정해놓을 수 있다. 타입이 맞지 않으면 에러가 발생한다.
- isRequired를 통해 필수값을 지정할 수 있다.
- default 파라미터 문법으로 만약 값을 입력하지 않았을 때의 디폴트값을 지정할 수도 있다.

```js
function Btn({ text, fontSize = 12 }) {
        return (
            <button
                
                style={{
                    backgroundColor: 'tomato',
                    color: 'white',
                    padding: '10px 20px',
                    border: 0,
                    borderRadius: 10,
                    fontSize : { fontSize }
                }}>
                { text }
            </button>)
    }

    Btn.propTypes = {
        text : PropTypes.string,
        fontSize : PropTypes.number.isRequired,
    }

    function App() {
                return (
            <div>
                <Btn text='Save Changes' fontSize={18}/>
                <Btn text={'Continue'} />
            </div>
        )
    };

```