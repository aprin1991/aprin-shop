import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import FormInput from "./../../components/form-input/FormInput";

const INITIAL_STATE = {
  user: "",
  email: "",
};
const reducer = (state, action) => {
  switch (action?.type) {
    case "SET_USER":
      return { ...state, user: action?.payload };
    case "SET_EMAIL":
      return { ...state, email: action?.payload };
    default:
      return state;
  }
};
const setUser = (user) => ({
  type: "SET_USER",
  payload: user,
});
const setEmail = (email) => ({
  type: "SET_EMAIL",
  payload: email,
});
function Css() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const [test, setTest] = useState(0);
  const [test1, setTest1] = useState(true);
  const timer = useRef();
  const myObj = useMemo(
    () => ({
      a: `my value of a is : ${test1}`,
    }),
    [test1]
  );
  useEffect(() => {
    console.log(myObj.a);
  }, [myObj]);
  useEffect(() => {
    let total = 0;
    timer.current = setInterval(() => {
      total++;
      console.log(total);
    }, 1000);
    return () => {
      clearInterval(timer.current);
    };
  }, []);
  return (
    <div>
      <div className="">
        <button onClick={() => setTest((prev) => prev + 1)}>
          click on {test}
        </button>
        <button onClick={() => setTest1((prev) => !prev)}>
          Test click on {test1}
        </button>
        <FormInput
          name="user"
          type="text"
          value={state?.user || ""}
          handleChange={(e) => dispatch(setUser(e.target.value))}
          required
          label="User Name"
        />
      </div>
      <div className="">
        <FormInput
          name="email"
          type="email"
          value={state?.email || ""}
          handleChange={(e) => dispatch(setEmail(e.target.value))}
          required
          label="Email"
        />
      </div>
    </div>
  );
}

export default Css;
