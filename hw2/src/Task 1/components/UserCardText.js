import { drinkingAge } from "../helper/drinkAge";

export const UserCardText = (props) => {
  return (
    <div>
      <p>
        My info: {props.name}, {props.surname}, {props.age}!
      </p>
      <p>
        Hello {props.name}, you are {props.age} years old, I{" "}
        {drinkingAge(props.age)} pour you something to drink!
      </p>
    </div>
  );
};
