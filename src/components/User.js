import CustomButton from "./CustomButton";

function User(props) {
  return (
    <div className="square-style">
      <h2>{props.user.name}</h2> {props.user.age} <br></br>
      <br></br>
      <div>
        <CustomButton
          color="red"
          onClick={() => {
            props.handleDelete(props.user.id);
          }}
        >
          삭제하기
        </CustomButton>{" "}
        <span> &nbsp;&nbsp;</span>
        <CustomButton
          color="green"
          onClick={() => {
            props.handleEdit(props.user.id);
          }}
        >
          {props.user.isDone ? "취소" : "완료"}
        </CustomButton>
      </div>
    </div>
  );
}

export default User;
