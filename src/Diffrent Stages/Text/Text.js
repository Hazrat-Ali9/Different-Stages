export default function Text({ text }) {
  const texts = [
    "Step 1: Learn JavaScript",
    "Step 2: Learn React",
    "Step 3: Invest Your new Income",
  ];
  return (
    <div className="col-12 w-75 d-flex flex-column justify-content-around align-items-center">
      <h3
        key={text}
        style={{
          marginBottom: "0",
          color: "black",
        }}
      >
        {text}
      </h3>
    </div>
  );
}
