import PricingCard from "./components/PricingCard";
function App() {
  return (
    <>
      <div className="max-w-6xl m-auto my-10">
        <div className="flex justify-between">
          <PricingCard
            title={"Starter"}
            description={"Best option for personal use & for next project"}
            price={"29"}
            features={[
              "Individual configuration",
              "No setup, or hidden fees",
              "Team size: 1 developer",
              "Premium support: 6 months",
              "Free updates: 6 months",
            ]}
          />
          <PricingCard
            title={"Company"}
            description={
              "Revelant for multiple users, extended & premium support."
            }
            price={"99"}
            features={[
              "Individual configuration",
              "No setup, or hidden fees",
              "Team size: 10 developer",
              "Premium support: 24 months",
              "Free updates: 24 months",
            ]}
          />
          <PricingCard
            title={"Company"}
            description={
              "Best for large scale uses and extended redistribution rights."
            }
            price={"499"}
            features={[
              "Individual configuration",
              "No setup, or hidden fees",
              "Team size: 100+ developer",
              "Premium support: 36 months",
              "Free updates: 36 months",
            ]}
          />
        </div>
      </div>
    </>
  );
}

export default App;
