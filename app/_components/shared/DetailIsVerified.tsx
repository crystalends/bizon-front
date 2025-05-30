import VerifiedBadgeIcon from "../icons/VerifiedBadgeIcon";

export default function DetailIsVerified() {
  return (
    <div className="flex flex-wrap gap-2">
      <VerifiedBadgeIcon />
      <p className="text-primary">Документы проверены</p>
    </div>
  );
}
