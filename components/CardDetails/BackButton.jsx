import BackIcon from "../BackIcon";

const BackButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="font-bold uppercase text-black text-3xl cursor-pointer flex gap-2 items-center"
  >
    <BackIcon />
    Back
  </button>
);

export default BackButton;
