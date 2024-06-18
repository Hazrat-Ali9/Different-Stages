export default function Stages({ number }) {
  const numbers = [1, 2, 3];
  return (
    <div className="col-12 d-flex justify-content-around align-items-center ">
      {numbers.map((num) => (
        <p
          key={num}
          style={{
            border: num == number ? "3px solid black" : "none",
            marginBottom: "0",
            color: "white",
            backgroundColor: "#6f45f1",
            borderRadius: "50%",
            height: "50px",
            width: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {num}
        </p>
      ))}
    </div>
  );
}
