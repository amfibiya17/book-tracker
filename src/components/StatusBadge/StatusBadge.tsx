interface StatusBadgeProps {
  label: string;
}

function StatusBadge({ label }: StatusBadgeProps) {
  return (
    <div className="m-1 flex flex-col border border-black text-center">
      {label}
    </div>
  );
}

export default StatusBadge;
