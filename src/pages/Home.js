import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container  mb-5">
        <div className="col-10">
          <h2>Home page</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
            labore eaque quae maiores? Distinctio nisi harum obcaecati, culpa
            repellendus amet doloremque incidunt sunt eveniet odit
            necessitatibus inventore dolorem enim quidem repellat consectetur
            veritatis hic perspiciatis similique vitae, natus aspernatur eius.
          </p>
          <Link className="btn btn-dark" to="/posts">
            posts
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
