interface StatusBadgeProps {
  label: string;
}

function StatusBadge(props: StatusBadgeProps) {
  const { label } = props;

  return (
    <div className="mt-2 flex flex-col text-center">
      {label}
    </div>
  );
}

export default StatusBadge;
