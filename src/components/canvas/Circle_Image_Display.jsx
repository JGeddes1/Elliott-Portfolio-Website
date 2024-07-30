const Circle_Image = ({ src, alt }) => {
  return (
    <div className="circle-container ">
      <img src={src} alt={alt} className="circle-image " />
    </div>
  );
};

export default Circle_Image;