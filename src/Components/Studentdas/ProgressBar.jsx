const ProgressBar = ({ percent }) => (
  <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
    <div
      className="h-full bg-blue-500 rounded-full transition-all"
      style={{ width: `${percent}%` }}
    ></div>
  </div>
);
export default ProgressBar;
