interface StatusBadgeProps {
  label: string;
}

function StatusBadge(props: StatusBadgeProps) {
  const { label } = props;

  return (
    <div className="mt-1 flex justify-center">
      <span className="badge badge-lg px-3 bg-transparent border-0">
        {label}
      </span>
    </div>
  );
}

export default StatusBadge;
