import React from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { MdFileDownload } from "react-icons/md";
import { motion } from "framer-motion"
const Card = ({data, reference} ) => {
  return (
    <motion.div drag  dragConstraints={reference} whileDrag={{ scale: 1.1 }} dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}className="relative w-60 h-72 rounded-[40px] bg-sky-400/90 px-8 py-10 overflow-hidden">
      <IoDocumentTextOutline />
      <p className="text-sm leading-none mt-5 font-semibold">
        {data.desc}
      </p>
      <div className="footer absolute bottom-0  w-full left-0">
        <div className="flex justify-between px-8 py-3 items-center mb-3">
        <h5>{data.filesize}</h5>
        {data.close ? <IoMdClose />: <MdFileDownload size="1.4em"/>}
        </div>
        {data.tag.isOpen &&(
        <div className="tag w-full py-4 bg-sky-950">
          <h3 className="flex justify-center text-zinc-50">{data.tag.tagTitle}</h3>
        </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
