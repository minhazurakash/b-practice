import { Image, ImageProps } from "antd";
import React from "react";

interface IProps extends ImageProps {
  src: string;
  alt?: string;
  pdfOnly?: boolean;
}
const ImagePreview: React.FC<IProps> = ({
  src,
  alt = "icon",
  pdfOnly = false,
  ...props
}) => {
  if (src?.endsWith(".pdf") || pdfOnly) {
    return (
      <div
        style={{ height: props.height || 100, width: props.width || 100 }}
        className="relative overflow-hidden cursor-pointer"
      >
        {src?.endsWith(".pdf") ? (
          <iframe
            src={`${src}#toolbar=1&navpanes=0&scrollbar=0`}
            width={props.width || 100}
            height={props.height || 100}
            style={{ overflow: "hidden" }}
          />
        ) : (
          <div className="flex flex-col items-center justify-center w-full gap-5">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2456/2456867.png"
              alt={alt}
              width={(props.width as any) / 2 || 100}
              height={(props.height as any) / 2 || 100}
            />
            <p className="text-2xl">No Document Found</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <Image
      {...props}
      src={
        src ||
        "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
      }
      alt={alt}
      className="object-cover"
      width={props.width || 100}
      height={props.height || 100}
    />
  );
};
export default ImagePreview;
