import ReactLoading from "react-loading";
const Loader = () => {
  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <div>
            <ReactLoading
                type="spinningBubbles"
                color="#FFFFFF"
                height={100}
                width={50}
            />
        </div>
    </div>
  );
};

export default Loader