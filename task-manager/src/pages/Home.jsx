import Card from "../components/Card";
import Button from "../components/Button";

const Home = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <Card title="Welcome Back! 💖">
        <p className="mb-4">Let’s manage your day beautifully 🌸</p>
        <Button variant="primary">Add Task</Button>
      </Card>
    </div>
  );
};

export default Home;
