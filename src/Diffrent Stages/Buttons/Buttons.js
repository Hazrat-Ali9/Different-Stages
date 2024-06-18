export default function Buttons( { number, setNumber , stages } ) {
  console.log(number)
  
  return (
    <div className="d-flex justify-content-around align-items-center w-75">
        <h3
          onClick={number > 1 ? () => setNumber(number - 1) : null}
          key="pervious"
          style={{
            marginBottom: "0",
            color: "black",
          }}
        >
          <button
            style={{
              backgroundColor: "#6f45f1",
              borderRadius: "15px",
              fontSize: "20px",
              color: "white",
              border: "none",
              padding: "12px",
            }}
          >
            pervious
          </button>
        </h3>

        {/* next */}
        <h3
        onClick={stages > number ? () => setNumber(number + 1) : null}
          key="Next"
          style={{
            marginBottom: "0",
            color: "black",
          }}
        >
          <button
            style={{
              backgroundColor: "#6f45f1",
              borderRadius: "15px",
              fontSize: "20px",
              color: "white",
              border: "none",
              padding: "12px",
            }}
          >
            Next
          </button>
        </h3>
    </div>
  );
}
