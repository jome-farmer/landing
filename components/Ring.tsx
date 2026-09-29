// Progress ring on a 72px box: r=32 → circumference ≈ 201
export default function Ring({ value, color }: { value: number; color: string }) {
  return (
    <div className="ring">
      <svg width="72" height="72" viewBox="0 0 72 72">
        <circle cx="36" cy="36" r="32" fill="none" stroke="var(--hairline-strong)" strokeWidth="2" />
        <circle cx="36" cy="36" r="32" fill="none" stroke={color} strokeWidth="2" strokeDasharray={`${(value / 100) * 201} 201`} />
      </svg>
      <span dir="ltr">{value}%</span>
    </div>
  );
}
