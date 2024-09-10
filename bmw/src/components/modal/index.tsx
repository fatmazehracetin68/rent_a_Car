import { motion } from "framer-motion";
import { CarType } from "../../types"
import Images from "./Images";

interface Props{
    car:CarType;
    isOpen:boolean;
    close:() => void
}

const Modal = ({ car, isOpen, close }: Props) => {
    return (
      <>
        {isOpen && (
          <div className="fixed inset-0 bg-black z-20 grid place-items-center bg-opacity-50">
            <motion.div
            initial={{scale:0.5,opacity:0}}
            animate={{scale:1.1,opacity:1}}
            exit={{scale:0.5 , opacity:0}}
            transition={{duration:0.3}} className="bg-white relative p-6 max-w-lg max-h-[90vh] rounded-2xl flex flex-col gap-5 shadow-xl overflow-auto">
              <button className="cursor-pointer p-1 absolute end-1 top-1 z-10 bg-white rounded-full" onClick={close}>
                <img src="/close.svg" alt="close button" />
              </button>
  
              <Images car={car} />
  
              {Object.entries(car).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <h4 className="capitalize">{key.split("_").join(" ")}</h4>
                  <p className="font-semibold">{value}</p>
                </div>
              ))}
            </motion.div>
          </div>
        )}
      </>
    );
  };
  
export default Modal;