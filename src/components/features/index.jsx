import Featurette from "./Featurette";

const mockData = {
  heading: "Featured Content",
  features: [{ image: "" }],
};

const index = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Features</h2>
      <Featurette
        heading="Angry Wolf"
        image="https://plus.unsplash.com/premium_photo-1668279471288-4e712d40c989?q=80&w=2046&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      >
        <p>Hello There</p>
      </Featurette>
      <Featurette
        heading="Lone Shark"
        image="https://images.unsplash.com/photo-1694813646634-9558dc7960e3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        invert={true}
      >
        <p>Hello There</p>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </Featurette>
    </div>
  );
};
export default index;
