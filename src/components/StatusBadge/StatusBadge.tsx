interface StatusBadgeProps {
  label: string;
}

function StatusBadge(props: StatusBadgeProps) {
  const { label } = props;

  return (
    <div className="m-1 flex flex-col border border-black text-center">
      {label}
    </div>
  );
}

export default StatusBadge;
