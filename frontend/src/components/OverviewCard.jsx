const OverviewCard = ({ title, value, growth }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">

      <h3 className="text-gray-500 text-sm">
        {title}
      </h3>

      <h1 className="text-3xl font-bold mt-2">
        {value}
      </h1>

      <p className="text-green-500 mt-2 text-sm">
        ↑ {growth} from last month
      </p>

    </div>
  );
};

export default OverviewCard;