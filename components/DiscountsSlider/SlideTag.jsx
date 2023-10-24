export default function SlideTag({ text }) {
  return (
    <div
      className={`border border-dashed border-primary bg-white rounded-3px p-4  hover:cursor-pointer ..5x2:py-2.5 ..5x2:px-2 hover:border-solid hover:border-primary-hover`}
    >
      <p className=" font-noto-sans font-light text-xs leading-100% whitespace-nowrap">
        {text}
      </p>
    </div>
  );
}
