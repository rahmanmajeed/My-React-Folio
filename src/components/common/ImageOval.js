function ImageOval({src,alt}) {
  return (
    <>
      <div className="shadow-lg rounded-full h-12 w-12">
           <img src={src} alt={alt} className="h-full rounded-full w-fit p-1"/>
      </div>
    </>
  );
}

export default ImageOval;
