const BoxTriangleCard = ({children, cardStyle, ...rest}) => {
  return (
    <>
      <div className={`float-left relative ${cardStyle}`} {...rest}>
        <div
          className="right-2 -top-7
                 absolute after:border-t-0  
                 after:border-r-[15px] after:border-r-transparent
                 after:border-b-[15px] after:border-solid after:border-white
                 after:border-l-[15px] after:border-l-transparent
                 "
        />
        <div>{children}</div>
      </div>
    </>
  );
};

export default BoxTriangleCard;
