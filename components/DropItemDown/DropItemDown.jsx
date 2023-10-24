import Image from 'next/image';

const DropItemDown = ({ title, src, title2, isLast }) => {
  return (
    <div
      className={`mr-7 ..5x1:mr-2 ${title2 ? 'mt-4' : ''} ${
        isLast ? 'mr-0' : ''
      } cursor-pointer`}
    >
      <Image
        src={src}
        height="120px"
        width="195px"
        className="object-cover rounded-lg"
        alt="no image"
      />
      <p className="text-md text-center text-xs font-semibold mt-2">
        {title}
        <br /> {title2}
      </p>
    </div>
  );
};
export default DropItemDown;
