import { useDispatch, useSelector } from "react-redux";
import { setName } from "../../../Store/C2P/C2PSlice";

const ReduxChild = () => {
  const name = useSelector((state) => state.C2P.name);

  const dispatch = useDispatch();
  return (
    <div>
      <h2>
        Name from the context -{" "}
        <i>
          <b>{name}</b>
        </i>
      </h2>
      <input
        type="text"
        onChange={(e) => {
          dispatch(setName(e.target.value));
        }}
      />
    </div>
  );
};

export default ReduxChild;
