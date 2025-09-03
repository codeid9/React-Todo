
function ButtonSet(props) {
  const {active,setActive}=props.type;
  const btn_set = [
    { id: 0, text: "All" },
    { id: 1, text: "Active" },
    { id: 2, text: "Completed" },
  ];
  return (
    <div className="button-set">
      {btn_set.map((btn) => (
        <button
          key={btn.id}
          className={active === btn.text ? "active" : null}
          onClick={() => setActive(btn.text)}
        >
          {btn.text}
        </button>
      ))}
    </div>
  );
}

export default ButtonSet;
