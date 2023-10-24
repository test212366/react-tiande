export default function ProductPrevButton({ onClick, isIText }) {
  return (
    <button
      className={`absolute left-13px ..5x2:left-1 flex items-center justify-center w-4 h-4 z-10 text-black ${
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
          d="M7 8.81667L3.16788 5L7 1.175L5.82024 0L0.8 5L5.82024 10L7 8.81667Z"
          fill="black"
        />
      </svg>
    </button>
  );
}
