export const metadata = {
  title: "Reservation",
};

function page() {
  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Your reservations
      </h2>
      <p className="text-lg">
        You have no reservations yet. Check out our{" "}
        <a className="underline text-accent-500" href="/cabins">
          luxury cabins &rarr;
        </a>
      </p>
    </div>
  );
}

export default page;
