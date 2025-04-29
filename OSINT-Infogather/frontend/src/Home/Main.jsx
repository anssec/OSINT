import { Helmet } from "react-helmet";
import Nav from "./Nav";
const Main = () => {
  return (
    <>
      <Helmet>
        <title>Home | OSINT</title>
      </Helmet>
      <div>
        <Nav />
      </div>
    </>
  );
};

export default Main;
