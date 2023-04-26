const Modal = ({ isOpen, onClose, children }) => {
  const modalClass = isOpen ? "block" : "hidden";
  return (
    <div
      className={`fixed top-0 w-[100px]  h-screen  flex items-center justify-center ${modalClass}`}
    >
      <div className="bg-black rounded-xl shadow-xl p-1">
        <button onClick={onClose} className="float-right text-lg font-bold">
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
export default Modal