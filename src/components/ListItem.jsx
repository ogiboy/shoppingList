const ListItem = ({ userItem, deleteFunc, id, index }) => {
  return (
    <div className="userItem">
      <span>{index + 1}</span>
      <span className="listText">{userItem}</span>
      <span className="closeIcon" onClick={() => deleteFunc(id)}>
        X
      </span>
    </div>
  );
};

export default ListItem;
