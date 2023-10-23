export default function Notes({ notes }) {
  return (
    <>
      <section className="my-8">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p style={{ fontSize: "15px", color: "red" }}>Notes: {notes}</p>
        </div>        
      </section>
    </>
  );
}


