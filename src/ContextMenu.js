export function ContextMenu({ x, y, open, li, handleOutsideClick }) {
  if (!open) return null;

  return (
    <div className="outsideClickListener" onClick={handleOutsideClick}>
      <div
        className="contextMenu"
        style={{ top: y, left: x }}
        onClick={(e) => e.stopPropagation()}
      >
        <p>{li}</p>

        <div className="menuItems">
          <button
            onClick={() => {
              console.log("Edit");
              handleOutsideClick();
            }}
          >
            Edit
          </button>
          <button
            onClick={() => {
              console.log("Remove");
              handleOutsideClick();
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
