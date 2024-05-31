import { Modal } from "antd";
import React, { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

interface IProps {
  className: string;
  url: string;
  thumbUrl?: string;
}
const VideoPreview: React.FC<IProps> = ({ className, url = "/", thumbUrl }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <React.Fragment>
      <div
        className={`relative cursor-pointer ${className}`}
        onClick={() => setOpenModal(true)}
      >
        <img
          className="absolute w-10 h-10 transform -translate-x-1/2 left-1/2 top-[45%]"
          src="/play-icon.png"
        />
        {thumbUrl ? (
          <img
            className="object-cover w-full h-full"
            src={thumbUrl}
            alt="video thumb"
          />
        ) : (
          <video
            className={`object-cover w-full h-full`}
            src={url}
            controls={false}
            playsInline
            muted
          >
            <source data-src={url} type="video/mp4"></source>
          </video>
        )}
      </div>
      <Modal
        width={900}
        footer={null}
        closeIcon={
          <IoIosCloseCircleOutline className="relative text-lg text-red-500 -top-4 -right-3" />
        }
        open={openModal}
        onCancel={() => setOpenModal(false)}
      >
        <video
          className={`object-cover w-full h-full`}
          src={url}
          autoPlay
          controls={true}
          playsInline
          muted
        >
          <source data-src={url} type="video/mp4"></source>
        </video>
      </Modal>
    </React.Fragment>
  );
};

export default VideoPreview;
