const Heading = (props: any) => {
    return (
      <h2 className="text-xl font-semibold text-gray-800 sm:text-xl">
        {props.title}
      </h2>
    );
};

export default Heading;