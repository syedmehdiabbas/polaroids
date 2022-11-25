import Image from "next/image";
import Button from "../Button";
import BackButton from "./BackButton";
import Photographer from "./Photographer";

const CardDetails = ({ photo, setCurrentCard }) => {
  return (
    <div className="px-8 py-12 xl:py-28 flex gap-6 flex-col items-center w-full">
      <div className="w-full flex justify-start mb-10 px-8">
        <BackButton onClick={() => setCurrentCard(null)} />
      </div>
      <div
        className={`bg-slate-50 p-4 pb-16 w-[400px] rounded shadow-md -rotate-1 cursor-pointer flex justify-center`}
      >
        <Image
          src={photo?.urls?.small}
          className=""
          alt={photo.alt_description}
          width={384}
          height={384}
        />
      </div>
      <p className=" text-3xl font-medium text-slate-600">
        {photo.description}
      </p>

      <Photographer user={photo?.user} />

      <div className=" flex flex-wrap gap-x-8 gap-y-3justify-center">
        <Button>
          <a href={photo?.links?.download} target="_blank" rel="noreferrer">
            Visit Download Link
          </a>
        </Button>
      </div>
    </div>
  );
};

export default CardDetails;
