export default function ProductNextButton({ onClick, isIText }) {
  return (
    <button
      className={`absolute right-13px ..5x2:right-1 flex items-center justify-center w-4 h-4 z-10 text-black ${
        isIText === 'Акции'
          ? ' bottom-10 ..5x2:bottom-6'
          : ' bottom-50px ..5x2:bottom-8'
      }`}
      onClick={onClick}
    >
      <svg
        width="7"
        height="10"
        viewBox="0 0 7 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 8.81667L3.83212 5L0 1.175L1.17976 0L6.2 5L1.17976 10L0 8.81667Z"
          fill="black"
          // fill-opacity="0.7"
        />
      </svg>
    </button>
  );
}
