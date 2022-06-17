import WorldClock from "./WorldClock/WorldClock";

const ClockWrapper = ({ clocks, setClocks, editForm, setEditForm }) => {
  const handleEdit = (uId) => {
    // console.log(uId);
    let Values = clocks.find(({ id }) => id === uId);
    setEditForm(Values);
  };

  const handleDelete = (id) => {
    setClocks(clocks.filter((clock) => clock.id !== id));
  };

  return (
    <div className="container">
      <div className="row">
        {clocks.map((clock) => (
          <WorldClock
            key={clock.id}
            id={clock.id}
            title={clock.input.clockTitle}
            zone={clock.input.clockZone}
            note={clock.input.clockNote}
            removeClock={handleDelete}
            changeClock={handleEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default ClockWrapper;
