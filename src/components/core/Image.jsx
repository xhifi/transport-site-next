import NImage from "next/image";

const Image = ({ src, cover, position, width, height, ...rest }) => {
  if (cover) {
    return (
      <div
        className="d-block"
        style={{
          width: width,
          height: height,
          position: "relative",
        }}
        {...rest}
      >
        <NImage
          src={src}
          fill
          style={{ objectFit: "contain", objectPosition: position }}
        />
      </div>
    );
  }

  return <NImage src={src} width={width} height={height} {...rest} />;
};

export default Image;
