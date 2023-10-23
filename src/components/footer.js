export default function Footer() {
  const listItemStyle = {
    color: "#0d1117",
    display: "inline-block",
    fontSize: "18px",
    margin: "2px 10px",
  };

  const lastStyle = {
    display: "inline-block",
    margin: "0 10px",
    fontSize: "15px",
    marginTop: "20px",
    marginBottom: "50px",
    textDecoration: "none",
    color: "#3a97ff",
    fontWeight: "bold",
    
  };

  return (
    <>
      <footer>
        <ul style={{ textAlign: "center" }}>
          <li style={listItemStyle}>Name: Yash Anand</li>
          <li style={listItemStyle}>Email: 0xyashanand@gmail.com </li>
          <br />
          <li style={listItemStyle}>Address: Nagpur</li>
          <li style={listItemStyle}>Mobile: +91 7258986760</li>
          <br />
          <li style={listItemStyle}>
            Website :{" "}
            <a href="https://www.linkedin.com/in/0xyashanand/">yashanand.me</a>
          </li>
          <br />
          <li style={lastStyle}>
            Made With ❤️ by{" "}
            <a
              href="https://github.com/0xyashanand"
              style={{
                color: "#0d1117",
              }}
            >
              0xYashAnand
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
