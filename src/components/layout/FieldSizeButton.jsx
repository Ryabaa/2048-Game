function FieldSizeButton({ button, buttonIndex, editButton, setFieldSize }) {
    let { name, value, active } = button;

    const handleChangeFieldSize = () => {
        editButton({ ...button, active: true }, buttonIndex);
        setFieldSize(value);
    };

    return (
        <button className={active ? "start__button start__button--active" : "start__button"} onClick={handleChangeFieldSize}>
            {name}
        </button>
    );
}

export default FieldSizeButton;
